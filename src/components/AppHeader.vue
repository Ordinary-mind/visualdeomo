<template>
    <div class="app-header-wrap">
        <div class="flex-1"></div>
        <h2 class="flex-1 title">{{title}}</h2>
        <div class="flex-1"></div>
    </div>
</template>
<script>
export default {
    name:"AppHeader",
    data(){
        return {
            title: "大数据可视化分析平台"
        }
    }
}
</script>
<style lang="scss" scoped>
.app-header-wrap{
    display: flex;
    background: #1d3154;
    height: 70px;

    .flex-1{
        flex: 1;
    }

    .title{
        background: #38517a;
        color: #eef0f4;
        line-height: 70px;
    }
}
</style>