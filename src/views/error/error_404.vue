<template>
  <section class="error">
    <van-image width="70%" :src="error_404"/>
    <p class="mt20">您访问的页面不存在</p>
    <!-- <p class="mt20">即将离开本页，<span class="red">{{ time }}</span>秒后返回首页</p> -->
  </section>
</template>

<script>
export default {
  name: 'error_404',
  data () {
    return {
      error_404: require('@/assets/img/404.png')
      // time: 5,
      // timeout: null
    }
  },
  mounted () {
    // this.timeout = setInterval(() => {
    //   this.time--
    //   if (this.time === 0) {
    //     clearInterval(this.timeout)
    //     this.$router.push({
    //       name: 'event'
    //     })
    //   }
    // }, 1000)
  },
  beforeDestroy () {
    // clearInterval(this.timeout)
  }
}
</script>

<style lang="less" scoped>
.error{
  padding: 50px 16px 0 16px;
  text-align: center;
  font-size: 16px;
}
.red{
  color: #D80000;
}
</style>
