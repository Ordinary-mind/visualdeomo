<template>
  <div class="a-world-cloud">
    <div class="header">词云图</div>
    <div class="content-wrap">
      <div class="content">
      <wordcloud style="width:100%;height:100%;"
                :data="data"
              >
              </wordcloud>
    </div>
    </div>
  </div>
</template>

<script>
import wordcloud from "vue-wordcloud";
export default {
  name: "AWorldCloud",
  props: ["data"],
  components:{
      wordcloud
  },
  data() {
    return {
      
    };
  },
};
</script>
<style lang="scss" scoped>
.a-world-cloud {
  height: 100%;
  .header {
    background: #1d2f52;
    text-align: center;
    line-height: 35px;
    font-size: 16px;
    color: white;
  }
  .content-wrap{
    height: calc(100% - 35px);
    padding-top: 4px;
    .content {
    height: 100%;
    background: #13213b;
  }
  }
}
</style>
