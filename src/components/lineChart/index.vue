<template>
  <div class="line-chart">
    <div class="header">折线图</div>
    <div class="content">
      <v-chart
        :options="options"
        style=" width: 100%;height:100%"
        autoresize
      ></v-chart>
    </div>
  </div>
</template>

<script>
export default {
  name: "LineChart",
  props: [],
  data() {
    return {
      options:{
          color: ["#16e3e5", "#e16690"],
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["2017年", "2018年"],
          orient: "horizontal",
          top: "bottom",
          left: "center",
          textStyle: {
            //图例文字的样式
            color: "#fff",
            // fontSize:16
          },
        },
        grid: {
          left: "3%",
          right: "30px",
          bottom: "30px",
          top: "20px",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["1月", "2月", "3月", "4月", "5月"],
          axisLine: {
            lineStyle: {
              color: "#fff",
              // width:8,//这里是为了突出显示加上的
            },
          },
        },
        yAxis: {
          type: "value",
          splitLine: { show: false }, //去除网格线
          axisLine: {
            lineStyle: {
              color: "#fff",
              // width:8,//这里是为了突出显示加上的
            },
          },
        },
        series: [
          {
            name: "2017年",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90],
            symbol: "none",
            areaStyle: {
              normal: {
                color: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#16e3e5", // 0% 处的颜色
                    },
                    {
                      offset: 0.9,
                      color: "#16e3e500", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                },
              },
            },
          },
          {
            name: "2018年",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290],
            symbol: "none",
            areaStyle: {
              normal: {
                color: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#dc3881", // 0% 处的颜色
                    },
                    {
                      offset: 0.9,
                      color: "rgba(220,56,129,0)", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                },
              },
            },
          },
        ],
      }
    };
  },
};
</script>
<style lang="scss" scoped>
.line-chart {
    height: 100%;
  .header {
    background: #1d2f52;
    text-align: center;
    line-height: 35px;
    font-size: 16px;
    color: white;
  }
  .content {
    margin-top: 4px;
    background: #13213b;
    height: calc(100% - 35px);
  }
}
</style>
