<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<style>
html,body{
  margin: 0;
  width: 100%;
  height: 100%;
  background: #0b1530;
  overflow: hidden;
}
*{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>
