<template>
  <div class="circular-graph">
    <div class="content">
      <div style="height: 100%; width: 100%" id="gisMap"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "GisMap",
  props: ["options"],
  watch: {
    options: {
      handler(v) {
        if (v) {
          // console.log(v);
          if (!this.mapChart) {
            this.mapChart = echarts.init(document.getElementById("gisMap"));
          }
          echarts.registerMap("guangzhou", v);
          let option = {
            visualMap: {
              left: "right",
              show: false,
              min: 1,
              max: 10000,
              // inRange: {
              //   color: [
              //     "#313695",
              //     "#4575b4",
              //   ],
              // },
              // text: ["High", "Low"], // 文本，默认为数值文本
              calculable: true,
            },
            series: [
              {
                name: "guangzhou",
                type: "map",
                roam: true,
                map: "guangzhou",
                data: v.data,
              },
            ],
          };
          this.mapChart.setOption(option, true);
        }
      },
    },
  },
  data() {
    return {
      mapChart: null,
    };
  },
  mounted() {
    let self = this;
    window.onresize = function (){
      self.mapChart.resize();
    }
  },
};
</script>
<style lang="scss" scoped>
.circular-graph {
  height: calc(100% - 12px);
  padding-top: 12px;
  .header {
    background: #1d2f52;
    text-align: center;
    line-height: 35px;
    font-size: 16px;
    color: white;
  }
  .content {
    height: 100%;
    background: #1d2f52;
  }
}
</style>
