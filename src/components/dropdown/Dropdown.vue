<template>
  <div class="dropdown" @mouseover="isShow = true" @mouseleave="isShow = false">
    <slot></slot>
    <div style="height: 25px"></div>
    <div class="dropdownMenu" v-show="isShow">
      <slot name="dropdownMenu"></slot>
    </div>
  </div>
</template>

<script>
import Item from "./DropdownMenuItem";

export default {
  name: "SelectOpt",
  components: {
    Item
  },
  data() {
    return {
      isShow: false,
    }
  }
}
</script>

<style scoped>
  .dropdown {
    height: auto;
    margin-left: -8px;
  }

  .dropdownMenu {
    border-radius: 5px;
    border: 1px solid #f2f2f2;
  }

  .dropdownMenu li{
    list-style: none;
  }
</style>