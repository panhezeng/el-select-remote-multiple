<template>
  <div id="app">
    <h1>
      因为apiary的mock比较弱，如想获得预期效果，纯搜索只支持输入 Option name 1
      ，创建功能只支持输入 Option name 2
    </h1>
    <el-select-remote-multiple
      :api-options-url="apiOptionsUrl"
      :api-create-url="apiCreateUrl"
      api-options-res-path="data.data"
      :api-options-callback="apiOptionsCallback"
      :selected-obj.sync="selectedObj"
      :selected.sync="selected"
      placeholder="输入关键字，从搜索结果中选择"
    >
      <template v-slot:prefix>
        <span>test</span>
      </template>
    </el-select-remote-multiple>

    <!--    <el-select-remote-multiple-->
    <!--      :api-options-url="apiOptionsUrl"-->
    <!--      :api-create-url="apiCreateUrl"-->
    <!--      api-options-res-path="data.data"-->
    <!--      :selected-obj.sync="selectedObj"-->
    <!--      :selected.sync="selected"-->
    <!--      placeholder="输入关键字，从搜索结果中选择"-->
    <!--    >-->
    <!--    </el-select-remote-multiple>-->
  </div>
</template>

<script>
import Vue from "vue";
//  import ElSelectRemoteMultiple from '../../dist/el-select-remote-multiple.min'
//  const ElSelectRemoteMultiple = require('../../dist/el-select-remote-multiple.min')

//  Vue.use(ElSelectRemoteMultiple)

// import '@panhezeng/vue-axios'

window.ElSelectRemoteMultipleOptions = { ajax: Vue.http };
// require("../../dist/el-select-remote-multiple.min");
require("../../src");

//  const ElSelectRemoteMultiple = () => import('../../dist/el-select-remote-multiple.min')

export default {
  name: "App",
  //    components: {ElSelectRemoteMultiple},
  data() {
    return {
      apiOptionsUrl:
        "https://private-87040-publicexample.apiary-mock.com/el-select-remote-multiple/options",
      apiCreateUrl:
        "https://private-87040-publicexample.apiary-mock.com/el-select-remote-multiple/option",
      selected: [],
      selectedObj: []
    };
  },
  methods: {
    apiOptionsCallback(options) {
      options.forEach(item => {
        this.$set(item, "name", "id:" + item.id + " " + "name:" + item.name);
      });
    }
  }
};
</script>
