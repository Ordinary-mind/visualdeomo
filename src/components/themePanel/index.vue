<template>
  <div class="theme-panel">
    <div class="title">{{ title }}</div>
    <div class="route-link">主题详情<i class="el-icon-arrow-right"></i></div>
  </div>
</template>

<script>
export default {
  name: "ThemePanel",
  props: ["title", "link"],
};
</script>
<style lang="scss" scoped>
.theme-panel {
  background: #1d2f52;
  display: flex;
  align-items: center;
  .title {
    flex: 1;
    font-size: 20px;
    text-align: left;
    padding: 12px 0 12px 16px;
    color: #eef0f4;
  }
  .route-link {
    flex: 1;
    text-align: right;
    padding: 8px 8px 8px 0;
    color: #eef0f4;
    cursor: pointer;
  }
}
</style>
