<template>
  <div>
    <el-select style="width:100%;" :placeholder="placeholder"
               @change="updateSelected"
               v-model="labelsSelected"
               multiple :allow-create="Boolean(apiUrlCreate)"
               filterable remote :remote-method="getLabelsOptions" :loading="labelsLoading" :disabled="disabled">
      <template v-for="item in labelsOptions">
        <template v-if="item && item[valueKey]">
          <el-option :key="item[valueKey]" :label="item[labelKey]" :value="item[valueKey]"/>
        </template>
      </template>
    </el-select>
    <slot>
    </slot>
  </div>
</template>

<script>
  import { Select, Option } from 'element-ui'
  import getObjectItemByPath from '@panhezeng/utils/dist/get-object-item-by-path.js'

  export default {
    name: 'ElSelectRemoteMultiple',
    components: { 'el-select': Select, 'el-option': Option },
    props: {
      // selectedObj是选中Option对象的key-value数组，el-select的默认选中数据显示，必须依赖此数据，如果只有selected的value数组，无法获得对应的label显示
      // 本组件默认选中数据的显示，只依赖此对象
      selectedObj: {
        type: Array,
        required: true,
        default () {
          return []
        }
      },
      // selected是选中Option对象的value数组，默认valueKey是id，通常提交给后端此数组即可
      selected: {
        type: Array,
        default () {
          return []
        }
      },
      // el-select组件label属性对应的Option对象属性名
      labelKey: {
        type: String,
        default: 'name'
      },
      // el-select组件value属性对应的Option对象属性名
      valueKey: {
        type: String,
        default: 'id'
      },
      // ajax实例，用于请求数据，必须提供和axios一样形式的get和post方法，传参要求一样，返回Promise对象
      ajax: {
        validator (value) {
          return value instanceof Object && value.hasOwnProperty('get') && value.hasOwnProperty('post')
        },
        required: true
      },
      // 获得下拉Options的api url
      apiUrlOptions: {
        type: String,
        required: true
      },
      // 获得下拉Options的api参数key
      apiUrlOptionsParamsKey: {
        type: Object,
        default () {
          return {
            limit: 'limit',
            offset: 'offset',
            search: 'search'
          }
        }
      },
      // 一次搜索多少条Options
      apiUrlOptionsLimit: {
        type: Number,
        default: 100
      },
      // ajax返回res对象获取Options数据的path
      apiUrlOptionsResPath: {
        type: String,
        default: 'data'
      },
      // 创建Option的api地址，默认undefined，即el-select的allow-create属性为false，不允许创建Option
      apiUrlCreate: String,
      // ajax返回res对象获取创建Options数据的path
      apiUrlCreateResPath: {
        type: String,
        default: 'data'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        labelsSelected: [],
        labelsOptions: [],
        labelsLoading: false,
        needInitData: true
      }
    },
    watch: {
      selectedObj: {
        immediate: true,
        handler (val, oldVal) {
          this.initData()
        }
      }
    },
    methods: {
      initData () {
        if (this.needInitData) {
          this.labelsOptions = this.selectedObj
          this.labelsSelected = this.selectedObj.reduce((accumulator, current) => {
            if (Object.prototype.toString.call(current) === '[object Object]' && current[this.valueKey]) {
              accumulator.push(Number(current[this.valueKey]))
            }
            return accumulator
          }, [])
          this.$emit('update:selected', this.labelsSelected)
          this.$nextTick(function () {this.labelsOptions = []})
        }
        this.needInitData = true
      },
      async updateSelected () {
        const options = this.selectedObj.concat(this.labelsOptions)
        const selectedObj = []
        for (let i = this.labelsSelected.length; i--;) {
          const item = this.labelsSelected[i]
//          console.log(item, Object.prototype.toString.call(item))
          if (Object.prototype.toString.call(item) === '[object Number]') {
            let obj = options.find(o => parseInt(o[this.valueKey]) === parseInt(item))
            if (Object.prototype.toString.call(obj) === '[object Object]' && Object.keys(obj).length) {
              selectedObj.push(obj)
            } else {
              this.labelsSelected.splice(i, 1)
            }
          } else if (Object.prototype.toString.call(item) === '[object String]' && this.apiUrlCreate) {
            let body = {}
            body[this.labelKey] = item.trim()
            try {
              const res = await this.ajax.post(this.apiUrlCreate, body)
              const newOption = getObjectItemByPath(res, this.apiUrlCreateResPath)
              selectedObj.push(newOption)
              this.labelsSelected[i] = parseInt(newOption[this.valueKey])
//              console.log(this.labelsSelected[i], Object.prototype.toString.call(this.labelsSelected[i]))
            } catch (e) {
              this.labelsSelected.splice(i, 1)
            }
          } else {
            this.labelsSelected.splice(i, 1)
          }
        }
        this.needInitData = false
        this.$emit('update:selectedObj', selectedObj)
        this.$emit('update:selected', this.labelsSelected)
        this.labelsOptions = []
//        this.$forceUpdate()
//        console.log(this.labelsSelected)
//        console.log(selectedObj)
      },
      async getLabelsOptions (search = '') {
        let options = []
        this.labelsLoading = true
        search = String(search).trim()
        if (search) {
          try {
            const res = await this.ajax.get(this.apiUrlOptions, {
              params: {
                [this.apiUrlOptionsParamsKey.limit]: this.apiUrlOptionsLimit,
                [this.apiUrlOptionsParamsKey.offset]: 0,
                [this.apiUrlOptionsParamsKey.search]: search
              }
            })

            options = getObjectItemByPath(res, this.apiUrlOptionsResPath)
            // 如果是数组，则判断搜索关键字是不是在搜索列表中，
            // 否则重置为空数组
            if (Object.prototype.toString.call(options) === '[object Array]') {
              const hasOptionIndex = options.findIndex(o => String(o[this.labelKey]) === search)
              // 如果输入的label不在搜索返回的Options列表中，并且不允许创建，则重置为空数组
              if (hasOptionIndex === -1 && !this.apiUrlCreate) {
                options = []
              }
            } else {
              options = []
            }
          } catch (e) {}
        }
        this.labelsOptions = options
        this.labelsLoading = false
      }
    }
  }
</script>


