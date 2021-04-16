<template>
  <div class="weather">
    <div class="title">全球</div>
          <div class="content">
            <p class="icon-wrap">
              <i class="el-icon-grape icon-size"></i>
            </p>
            <p class="normal-text">
              15-24℃
            </p>
            <p class="normal-text">
              东风微风
            </p>
            <p class="normal-text">
                <el-badge is-dot style="margin-top:4px;"></el-badge>
              轻度
            </p>
          </div>
  </div>
</template>

<script>
export default {
  name: "Weather",
  props: ["value", "unit", "text"],
};
</script>
<style lang="scss" scoped>
.weather {
  .title{
      background:#31466b;padding:4px 0;font-size:13px;color:white;
  }

  .content{
      background: #172847;margin-top: 4px;color:white;
    padding: 10px 0;

    .icon-wrap{
        padding:6px;

        .icon-size{
            font-size:24px;
        }
    }

    .normal-text{
        font-size:12px;padding:2px 0;
    }
  }
}
</style>
