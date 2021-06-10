<template>
  <div class="navbar">
    <NavBarInner></NavBarInner>
  </div>
</template>

<script>
import NavBarInner from "./NavBarInner";

export default {
  name: "NavBar",
  components: {
    NavBarInner
  }
}
</script>

<style scoped>
  .navbar {
    height: 90px;
    background: #fff;
  }
</style>