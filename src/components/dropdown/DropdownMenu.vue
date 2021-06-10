<template>
  <div class="dropdownMenu">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Dropdown-menu",
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  .dropdownMenu {
    position: absolute;
    width: 250px;
    height: auto;
    font-size: 15px;
  }
</style>