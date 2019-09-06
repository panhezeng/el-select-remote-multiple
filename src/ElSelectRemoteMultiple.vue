<template>
  <div>
    <el-select
      v-model="labelsSelected"
      style="width:100%;"
      :placeholder="placeholder"
      :disabled="disabled"
      multiple
      filterable
      remote
      :remote-method="getLabelsOptions"
      :loading="labelsLoading"
      v-bind="$attrs"
      @change="updateSelected"
      v-on="$listeners"
    >
      <slot />
      <template v-slot:prefix="">
        <slot name="prefix" />
      </template>
      <template v-slot:empty="">
        <slot name="empty" />
      </template>
      <template v-for="item in labelsOptions">
        <template v-if="item && item[valueKey]">
          <el-option
            :key="item[valueKey]"
            :label="item[labelKey]"
            :value="item[valueKey]"
          />
        </template>
      </template>
    </el-select>
    <slot> </slot>
  </div>
</template>

<script>
import { Select, Option } from "element-ui";
import getObjectItemByPath from "@panhezeng/utils/dist/get-object-item-by-path.js";

const CreateTempPlaceholderValue =
  "ElSelectRemoteMultipleCreateTempPlaceholderValue";

export default {
  name: "ElSelectRemoteMultiple",
  components: { "el-select": Select, "el-option": Option },
  inheritAttrs: false,
  props: {
    // selectedObj是选中Option对象的key-value数组，el-select的默认选中数据显示，必须依赖此数据，如果只有selected的value数组，无法获得对应的label显示
    // 本组件默认选中数据的显示，只依赖此对象
    selectedObj: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    },
    // selected是选中Option对象的value数组，默认valueKey是id，通常提交给后端此数组即可
    selected: {
      type: Array,
      default() {
        return [];
      }
    },
    // el-select组件label属性对应的Option对象属性名
    labelKey: {
      type: String,
      default: "name"
    },
    // el-select组件value属性对应的Option对象属性名
    valueKey: {
      type: String,
      default: "id"
    },
    // ajax实例，用于请求数据，必须提供和axios一样形式的get和post方法，传参要求一样，返回Promise对象
    ajax: {
      validator(value) {
        return (
          value instanceof Object &&
          value.hasOwnProperty("get") &&
          value.hasOwnProperty("post")
        );
      },
      required: true
    },
    // 获得下拉Options的api url
    apiOptionsUrl: {
      type: String,
      required: true
    },
    // 获得下拉Options的api参数key
    apiOptionsParamKeys: {
      type: Object,
      default() {
        return {
          limit: "limit",
          offset: "offset",
          search: "search"
        };
      }
    },
    // 一次搜索多少条Options
    apiOptionsLimit: {
      type: Number,
      default: 10
    },
    // ajax返回res对象获取Options数据的path
    apiOptionsResPath: {
      type: String,
      default: "data"
    },
    apiOptionsCallback: {
      type: Function,
      default: undefined
    },
    // 创建Option的api url，默认undefined，即el-select的allow-create属性为false，不允许创建Option
    apiCreateUrl: {
      type: String,
      default: ""
    },
    // ajax返回res对象获取创建Options数据的path
    apiCreateResPath: {
      type: String,
      default: "data"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      labelsSelected: [],
      labelsOptions: [],
      labelsLoading: false
      // needInitData: true
    };
  },
  watch: {
    selectedObj: {
      immediate: true,
      handler() {
        this.update();
        // this.needInitData = true;
      }
    }
  },
  methods: {
    updateOptions(options) {
      if (
        /^\[object [^F]*Function\]$/.test(
          Object.prototype.toString.call(this.apiOptionsCallback)
        )
      ) {
        this.apiOptionsCallback(options);
      }
      this.labelsOptions = options;
    },
    update() {
      this.updateOptions(this.selectedObj);
      this.$nextTick(function() {
        this.labelsSelected = this.selectedObj.reduce(
          (accumulator, current) => {
            if (
              Object.prototype.toString.call(current) === "[object Object]" &&
              current[this.valueKey]
            ) {
              accumulator.push(current[this.valueKey]);
            }
            return accumulator;
          },
          []
        );
        if (
          JSON.stringify(this.selected.sort()) !==
          JSON.stringify(this.labelsSelected.sort())
        ) {
          this.$emit("update:selected", this.labelsSelected.slice());
          // console.log("update:selected", this.labelsSelected);
          // debugger
        }
      });
    },
    async updateSelected() {
      // const options = (this.labelsOptions = this.selectedObj.concat(
      //   this.labelsOptions
      // ));
      const selected = this.labelsSelected.slice();
      const options = this.selectedObj.concat(this.labelsOptions);
      const selectedObj = [];
      // 遍历选中的value
      for (let i = selected.length; i--; ) {
        const value = selected[i];
        // let selectedOptionIndex = -1;
        let selectedOption = null;
        for (let j = options.length; j--; ) {
          const option = options[j];
          if (String(option[this.valueKey]) === String(value)) {
            // selectedOptionIndex = j;
            selectedOption = option;
            break;
          }
        }
        // 如果有完全匹配的选项
        // 否则删除改选中值
        if (selectedOption) {
          // 如果是临时新创建的选项值，则发送给后端，获得后端入库后的value值，并且替换临时值
          if (String(value) === CreateTempPlaceholderValue) {
            try {
              const res = await this.ajax.post(this.apiCreateUrl, {
                [this.labelKey]: selectedOption[this.labelKey]
              });
              const newOption = getObjectItemByPath(res, this.apiCreateResPath);
              selectedObj.push(newOption);
            } catch (e) {
              continue;
            }
          } else {
            selectedObj.push(selectedOption);
          }
        }
      }
      // this.needInitData = false;
      this.$emit("update:selectedObj", selectedObj);
      // this.$emit("update:selected", this.labelsSelected.slice());
      // this.$nextTick(function() {
      //   this.labelsOptions = [];
      // });
      //        this.$forceUpdate()
      //        console.log(this.labelsSelected, 'this.labelsSelected')
      //        console.log(selectedObj)
    },
    async getLabelsOptions(label = "") {
      let options = [];
      this.labelsLoading = true;
      label = String(label).trim();
      if (label) {
        const res = await this.ajax.get(this.apiOptionsUrl, {
          params: {
            [this.apiOptionsParamKeys.limit]: this.apiOptionsLimit,
            [this.apiOptionsParamKeys.offset]: 0,
            [this.apiOptionsParamKeys.search]: label
          }
        });
        options = getObjectItemByPath(res, this.apiOptionsResPath);
        // 如果是数组，并且有长度
        if (Array.isArray(options) && options.length) {
          // if (options.length) {
          //   this.selectedObj.forEach(selected => {
          //     if (
          //       !options.some(
          //         option =>
          //           String(option[this.valueKey]) === selected[this.valueKey]
          //       )
          //     ) {
          //       options.push(selected);
          //     }
          //   });
          // } else {
          //   options = options.concat(this.selectedObj);
          // }
          //              console.log(label, 'label')
          // const hasOptionIndex = options.findIndex(o => {
          //   //                console.log(o[this.labelKey], label, 'findIndex')
          //   return String(o[this.labelKey]) === label;
          // });
          // //              console.log(hasOptionIndex, 'hasOptionIndex')
          // // 如果匹配的选项不是第一项，则把它移到第一项
          // // 如果搜索返回的Options列表中没有匹配的选项，并且允许创建，则新建临时选项数据加到第一项，后面updateSelected再进一步处理
          // if (hasOptionIndex > 0) {
          //   const b = options[0];
          //   options[0] = options[hasOptionIndex];
          //   options[hasOptionIndex] = b;
          // } else if (hasOptionIndex === -1 && this.apiCreateUrl) {
          //   options.unshift({
          //     [this.labelKey]: label,
          //     [this.valueKey]: CreateTempPlaceholderValue
          //   });
          // }
          // 如果允许创建，并且已选Options和搜索返回的Options列表中没有匹配的选项，则新建临时选项数据加到第一项，后面updateSelected再进一步处理
          if (
            this.apiCreateUrl &&
            !this.selectedObj
              .concat(options)
              .some(o => String(o[this.labelKey]) === label)
          ) {
            options.unshift({
              [this.labelKey]: label,
              [this.valueKey]: CreateTempPlaceholderValue
            });
          }
        }
      }
      if (!options.length) {
        options = this.selectedObj;
      }
      this.updateOptions(options);
      this.labelsLoading = false;
      //        console.log(options, 'options')
    }
  }
};
</script>
