<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/screen";

#app {
  font-family: $font-stack-alpha, Helvetica, Arial, sans-serif;
  text-align: center;
  color: var(--font-color-primary);
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
