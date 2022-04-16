<template>
  <div>
    <!--主应用渲染，读取的是当前主应用的路由-->
    <router-view v-show="$route.name"></router-view>
    <!--子应用渲染，读取子应用中的对应的路由-->
    <div v-show="!$route.name" id="micro-app"></div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    console.log('=============', this.$route.name);
  },
};
</script>
<style scoped lang="less"></style>
