<template>
  <div class="btn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Btn"
}
</script>

<style scoped>
  .btn {
    border-radius: 5px;
    margin-top: 10px;
    font-size: 15px;
    height: 30px;
    width: 80px;
    line-height: 30px;
    text-align: center;
    background: #31c27c;
    margin-right: 10px;
    color: white !important;
    cursor: pointer;
  }

  .btn:hover {
    background: #2caf6f;
  }
</style>