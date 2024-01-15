<template>
  <div>入口</div>
  <a href="/test/index">跳转/test/index</a>
</template>
<script setup>
import { getUserInfo } from './../api/user'

// 请求接口demo
getUserInfo().then(function (res) {
  console.log(res)
})
</script>
<style lang="scss" scoped></style>
