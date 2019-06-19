# el-select-remote-multiple

## 示例

[点击预览](https://panhezeng.github.io/el-select-remote-multiple/)

示例代码目录 /example

示例使用的 apiary mock 服务每次 Request 获得的 Response 都是不变的。免费服务可能会出现无响应等错误。免费又稳定，限制少，支持 https 的 mock 也就 apiary。getsandbox 也不错就是每个月限制 5000 次请求。

## 说明

基于 element-ui 的组件，把 element-ui 官网 Select 选择器的多选，远程搜索，创建条目示例用法，进行了封装，该组件默认多选和远程搜索，如果需要创建条目功能，只需要传入创建的 api

创建的实现逻辑，用户输入搜索文本后，在搜索结果列表中查找是否存在匹配的文本，如果没有，则发送创建请求，创建成功后，更新组件自动添加的 option 对象为后端返回的 option 对象，因为组件自动添加的对象，通常只有文本，没有 id，和实际约定的 option 对象比，少字段

首先请按 element-ui 官方文档安装 element-ui，确保能正常使用 element-ui

修改了 output 方式，通过 require 或 window 方式使用，不需要加.default

```vue
<script>
export default {
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
  }
};
</script>
```

## 用法

如果不希望每次使用组件时都显式传入 ajax prop，则可以在全局注册组件前，通过 Vue.use 方式安装组件，给 use 传第二个参数，或者直接赋值 window.ElSelectRemoteMultipleOptions，数据结构要求{ajax:axios}。这样后面多处使用该组件实例时就不需要显式传入 ajax prop 了。
还有一种方法，就是再包一层，在包裹 js 里，直接修改此组件的 props，其他地方使用修改后的组件

### internal vue element-ui 方式

`npm i vue element-ui @panhezeng/el-select-remote-multiple -S`

#### 异步

```vue
<script>
const ElSelectRemoteMultiple = () =>
  import("@panhezeng/el-select-remote-multiple");

export default {
  components: { ElSelectRemoteMultiple }
};
</script>
```

#### 同步

##### export default components

```vue
<script>
import ElSelectRemoteMultiple from "@panhezeng/el-select-remote-multiple";

export default {
  components: { ElSelectRemoteMultiple }
};
</script>
```

##### Vue.use

```vue
<script>
import Vue from "vue";
import ElSelectRemoteMultiple from "@panhezeng/el-select-remote-multiple";

Vue.use(ElSelectRemoteMultiple, { ajax: axios });
</script>
```

### external vue element-ui 方式

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/element-ui@latest/lib/theme-chalk/index.css"
/>
<script src="https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/element-ui@latest/lib/index.js"></script>
```

`npm i @panhezeng/el-select-remote-multiple -S`

```javascript
// auto install
import "@panhezeng/el-select-remote-multiple";
```

or

```html
<!--auto install-->
<script src="https://cdn.jsdelivr.net/npm/@panhezeng/el-select-remote-multiple@latest/dist/el-select-remote-multiple.min.js"></script>
```

## 编译

```bash
# install dependencies
npm install

# 运行插件使用示例
npm run dev:example

# 编译插件
npm run build

# 发版
npm set registry https://registry.npmjs.org/ && npm set @panhezeng:registry https://registry.npmjs.org/ && npm version patch && npm publish --access public && npm set registry https://registry.npm.taobao.org/ && npm set @panhezeng:registry https://registry.npm.taobao.org/

```
