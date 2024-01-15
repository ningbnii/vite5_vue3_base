<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <a href="/test/index">跳转/test/index</a>
</template>
<script setup>
import { getUserInfo } from './../api/user'

// 请求接口demo
getUserInfo().then(function (res) {
  console.log(res)
})
</script>
<style scoped></style>
