<template>
  <div class="annular-chart">
    <div class="header">环形图</div>
    <div class="content-wrap">
      <div class="content">
        <v-chart
          :options="options"
          style="height: 100%; width: 100%"
          autoresize
        ></v-chart>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PieChart",
  props: [],
  data() {
    return {
      options: {
        color: ["#39eba8", "#22314d"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          left: "center",
          bottom: 20,
          data: ["直接访问", "邮件营销"],
          textStyle:{
              color:"white"
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 610, name: "邮件营销" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  return params.percent + "%";
                }, //图形外文字上下显示
                textStyle:{
                    color:"white"
                }
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
.annular-chart {
  height: 100%;
  .header {
    background: #1d2f52;
    text-align: center;
    line-height: 35px;
    font-size: 16px;
    color: white;
  }
  .content-wrap {
    height: 100%;
    padding-top: 4px;
    height: calc(100% - 35px);
    .content {
        height: 100%;
      background: #13213b;
    }
  }
}
</style>
