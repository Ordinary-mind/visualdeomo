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
  name: "AnnularChart",
  props: [],
  data() {
    return {
      options: {
        color: ["#22314d", "#ffdc64"],
        tooltip: {
          trigger: "item",
        },
        legend: {
          bottom: "5%",
          left: "center",
          // icon: "",
          textStyle: {
            color: "white",
            width: 30,
            overflow: "break",
          },
        },
        grid: {
          left: "15%",
        },
        graphic: [
          //为环形图中间添加文字
          {
            type: "text",
            left: "center",
            top: "42%",
            style: {
              text: "458",
              textAlign: "center",
              fill: "#cacdd3",
              fontSize: 25,
            },
          },
          {
            type: "text",
            left: "center",
            top: "55%",
            style: {
              text: "总数",
              textAlign: "center",
              fill: "#cacdd3",
              fontSize: 16,
            },
          },
        ],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "60%"],
            avoidLabelOverlap: true,
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  return params.percent + "%";
                }, //图形外文字上下显示
                textStyle: {
                  color: "white",
                },
              },
            },
            //指示文字
            labelLine: {
              normal: {
                lineStyle: {
                  color: "#e4e4e4",
                },
              },
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                // shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            data: [
              { value: 2048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
            ],
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
