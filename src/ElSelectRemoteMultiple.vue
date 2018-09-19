<template>
  <div>
    <el-select style="width:100%;" :placeholder="placeholder"
               @change="updateSelected"
               v-model="labelsSelected"
               multiple :allow-create="Boolean(apiUrlCreate)"
               filterable remote :remote-method="getLabelsOptions" :loading="labelsLoading" :disabled="disabled">
      <el-option v-for="(item,index) in labelsOptions" :key="index" :label="item[labelKey]" :value="item[valueKey]">
      </el-option>
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
    components: {'el-select': Select, 'el-option': Option},
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
        required: false,
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
          this.labelsSelected = this.selectedObj.map(o => o[this.valueKey])
          this.$nextTick(function () {this.labelsOptions = []})
        }
        this.needInitData = true
      },
      updateSelected () {
        const options = this.selectedObj.concat(this.labelsOptions)
        const selectedObj = []
        for (let i = this.labelsSelected.length; i--;) {
          const item = this.labelsSelected[i]
          let obj = options.find(o => String(o[this.valueKey]) === String(item))
          if (obj) {
            selectedObj.push(obj)
          }
        }
        this.needInitData = false
        this.$emit('update:selectedObj', selectedObj)
        this.$emit('update:selected', this.labelsSelected)
        this.labelsOptions = []
//        this.$forceUpdate()
      },
      async createOption (label) {
        // 如果允许创建，并且是用户输入了label
        if (this.apiUrlCreate && label) {
          const hasOptionIndex = this.labelsOptions.findIndex(o => String(o[this.labelKey]) === String(label))
          // 如果输入的label不在搜索返回的Options列表中，则发送创建Option请求，并在回调中更新该Option数据
          if (hasOptionIndex === -1) {
            let body = {}
            body[this.labelKey] = label
            try {
              const res = await this.ajax.post(this.apiUrlCreate, body)
              const newOption = getObjectItemByPath(res, this.apiUrlCreateResPath)
              this.labelsOptions = [newOption]
//              this.$forceUpdate()
              return true
            } catch (e) {}
          }
        }
        return false
      },
      async getLabelsOptions (search = '') {
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
            this.labelsOptions = getObjectItemByPath(res, this.apiUrlOptionsResPath)
            await this.createOption(search)
          } catch (e) {}
        }
        this.labelsLoading = false
      }
    }
  }
</script>
