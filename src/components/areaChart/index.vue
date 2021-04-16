<template>
  <div class="area-chart">
    <div class="header">{{title}}</div>
    <div class="content">
      <v-chart
        :options="options"
        style="height: 310px; width: 100%"
        autoresize
      ></v-chart>
    </div>
  </div>
</template>

<script>
export default {
  name: "AreaChart",
  props: ["options","title"],
  data() {
    return {
      
    };
  },
};
</script>
<style lang="scss" scoped>
.area-chart {
  .header {
    background: #1d2f52;
    text-align: center;
    padding: 8px;
    font-size: 16px;
    color: white;
  }
  .content {
    margin-top: 4px;
    background: #13213b;
  }
}
</style>
