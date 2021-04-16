<template>
  <div class="base-unit">
    <p>{{ value }}({{ unit }})</p>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "BaseUnit",
  props: ["value", "unit", "text"],
};
</script>
<style lang="scss" scoped>
.base-unit {
  width: 100%;
  height: 100%;
  background: #13213b;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :nth-child(1) {
    color: #e3e4e8;
    font-size: 25px;
  }
  :nth-child(2) {
    color: #e3e4e8;
    font-size: 15px;
    padding-top: 2px;
  }
}
</style>
