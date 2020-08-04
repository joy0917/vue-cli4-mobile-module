<template>
  <div id="app">
    <div class="tc mt20">
      <van-button size="small" type="primary" class="mr10" to="/">首页</van-button>
      <van-button size="small" type="info" class="mr10" to="/page/test">次页</van-button>
      <van-button size="small" type="warning" to="/404">404</van-button>
    </div>
    <router-view v-if="reloadRouter"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      reloadRouter: true
    }
  },
  methods: {
    reload () {
      this.reloadRouter = false
      this.$nextTick(() => {
        this.reloadRouter = true
      })
    }
  }
}
</script>

<style lang="less">
html,body{
  width: 100%;
  height: 100%;
  margin: 0;
  font-size: 12px;
  color: #333;
  background: #f8f8f8;
  -webkit-font-smoothing: antialiased; // 字体抗锯齿渲染
  -moz-osx-font-smoothing: grayscale; // 字体抗锯齿渲染
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
