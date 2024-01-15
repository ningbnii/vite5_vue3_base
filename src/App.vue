<template>
  <router-view v-slot="{ Component }">
    <vue-page-stack>
      <component :is="Component" :key="$route.fullPath" />
    </vue-page-stack>
  </router-view>
</template>

<script setup></script>

<style scoped></style>
