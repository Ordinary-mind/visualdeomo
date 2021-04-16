<template>
  <div class="histogram-chart">
    <div class="header">柱状图</div>
    <div class="content">
      <v-chart
        :options="options"
        style="height: 100%; width: 100%;background: #13213b;"
        autoresize
      ></v-chart>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistogramChart",
  props: [],
  data() {
    return {
      options: {
          title:{
              text:"576.5亿",
              left: 'center',
              top: 30,
              textStyle:{
                  color: "white",
              }
          },
        xAxis: {
          type: "category",
          data: ["14年", "15年", "16年", "17年", "18年"],
          axisLine: {
            lineStyle: {
              color: "#fff",
              // width:8,//这里是为了突出显示加上的
            },
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
          axisLabel:{
            show:false
        }
        },
        series: [
          {
            data: [120, 200, 150, 80, 210],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(220, 220, 220, 0.4)",
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  var colorList = [
                    "#176476",
                    "#176476",
                    "#176476",
                    "#176476",
                    "#15efef",
                  ];
                  return colorList[params.dataIndex];
                },
              },
            },
          },
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.histogram-chart {
  height: 100%;
  .header {
    background: #1d2f52;
    text-align: center;
    line-height: 35px;
    font-size: 16px;
    color: white;
  }
  .content {
    height: calc(100% - 35px);
    padding-top: 4px;
  }
}
</style>
