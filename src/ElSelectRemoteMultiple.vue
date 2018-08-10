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
  import delArrayItemByValue from '@panhezeng/utils/dist/del-array-item-by-value.js'

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
      // ajax返回res对象的数据节点名，默认和axios一样，是data
      ajaxResDataKey: {
        type: String,
        default: 'data'
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
        default: 50
      },
      // ajax返回res对象获取Options数据的key名
      apiUrlOptionsResKey: {
        type: String,
        default: 'data'
      },
      // 创建Option的api地址，默认undefined，即el-select的allow-create属性为false，不允许创建Option
      apiUrlCreate: String,
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
        labelsLoading: false
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
        const selected = this.selectedObj.map(o => o[this.valueKey])
        // 如果selectedObj数据转换为selected后，和现有selected不相等，则进入
        if (JSON.stringify(selected.sort()) !== JSON.stringify(this.labelsSelected.sort())) {
          this.labelsOptions = this.processLabelsOptions()
          this.labelsSelected = selected
          this.$emit('update:selected', this.labelsSelected)
        }
      },
      updateSelected () {
        const selectedObj = []
        const selected = []
        this.labelsSelected.forEach(value => {
          let obj = this.labelsOptions.find(o => String(o[this.valueKey]) === String(value))
          if (obj) {
            selectedObj.push(obj)
            selected.push(obj[this.valueKey])
          }
        })
        this.labelsSelected = selected
        this.$emit('update:selectedObj', selectedObj)
        this.$emit('update:selected', this.labelsSelected)
      },
      createOption (label) {
        // 如果允许创建，并且是用户输入了label
        if (this.apiUrlCreate && label) {
          const hasOptionIndex = this.labelsOptions.findIndex(o => String(o[this.labelKey]) === String(label))
          // 如果输入的label不在搜索返回的Options列表中，则发送创建Option请求，并在回调中更新该Option数据
          if (hasOptionIndex === -1) {
            let body = {}
            body[this.labelKey] = label
            this.ajax.post(this.apiUrlCreate, body).then((res) => {
              this.labelsOptions = this.processLabelsOptions([res[this.ajaxResDataKey]])
            })
            return true
          }
        }
        return false
      },
      processLabelsOptions (data = []) {
        this.selectedObj.forEach(o => {
          delArrayItemByValue(data, o[this.valueKey], this.valueKey)
        })
        return JSON.parse(JSON.stringify(this.selectedObj)).concat(data)
      },
      async getLabelsOptions (search = '') {
        search = String(search).trim()
        console.log('search', search)
        if (search) {
          this.labelsLoading = true
          try {
            const res = await this.ajax.get(this.apiUrlOptions, {
              params: {
                [this.apiUrlOptionsParamsKey.limit]: this.apiUrlOptionsLimit,
                [this.apiUrlOptionsParamsKey.offset]: 0,
                [this.apiUrlOptionsParamsKey.search]: search
              }
            })
            this.labelsOptions = this.processLabelsOptions(res[this.ajaxResDataKey][this.apiUrlOptionsResKey])
            this.createOption(search)
          } catch (e) {}
          this.labelsLoading = false
        } else {
          this.labelsOptions = []
        }
      }
    }
  }
</script>
