<template>
  <div class="item" :class="{bgColor: bg}">
    <div class="itemLeft">
      <div :class="{itemTop: !bg}" >
        <slot></slot>
      </div>
      <div class="itembottom">
        <slot name="text"></slot>
      </div>
    </div>
    <div class="itemRight">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    bg: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .bgColor:hover {
    background: #31c27c;
    color: white!important;
  }

  .itemTop:hover {
    color: #31c27c;
    cursor: pointer;
  }

  .item {
    height: 50px;
    display: flex;
    padding-left: 10px;
    justify-content: space-between;
    color: black;
  }

  .itembottom {
    color: #999;
    font-size: 12px;
    margin-top: 3px;
  }

  .itemLeft {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }


  .itemRight {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 5px;
  }

</style>