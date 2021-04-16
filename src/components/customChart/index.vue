<template>
  <div class="custom-chart">
    <div class="header">自定义图表</div>
    <div class="content-wrap">
      <div class="content">
        <div class="flex-wrapper">
        <div class="flex-1">
          <div style="color:#35ca9e;font-size:16px">24</div>
          <div style="font-size:15px">指标</div>
        </div>
        <div class="flex-1">
          <div style="color:#35ca9e;font-size:16px">24</div>
          <div style="font-size:15px">指标</div>
        </div>
      </div>
      <div class="flex-wrapper">
        <div class="flex-1">
          <div style="color:#fff;font-size:16px">CO</div>
          <div style="font-size:14px">指标</div>
        </div>
        <div class="flex-1">
          <div style="color:#fff;font-size:16px">32.8</div>
          <div style="font-size:14px">指标</div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomChart",
  props: ["title", "link"],
};
</script>
<style lang="scss" scoped>
.custom-chart {
  height: 100%;
  .header {
    background: #1d2f52;
    text-align: center;
    line-height: 35px;
    font-size: 16px;
    color: white;
  }
  .content-wrap{
    height: 100%;
    padding-top: 4px;
    .content {
    background: #1d2f52;
    text-align: center;
    font-size: 16px;
    color: white;
    height: calc(100% - 35px);

    .flex-wrapper {
      display: flex;
      height: 50%;
      .flex-1 {
        flex: 1;
        background: #1c2b45;
        margin: 8px;
            display: flex;
    flex-direction: column;
    justify-content: center;
      }
    }
  }
  }
}
</style>
