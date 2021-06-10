<template>
  <div class="inner">
    <div class="top_logo">
      <img src="../../assets/img/navbar/logo.png" style="width: 100%"/>
    </div>
    <div class="top_nav">
      <ul>
        <li><p @click="activeBG(1)" :class="{active: 1 === activeIndex}">音乐馆</p></li>
        <li><p @click="activeBG(2)" :class="{active: 2 === activeIndex}">我的音乐</p></li>
        <li><p @click="activeBG(3)" :class="{active: 3 === activeIndex}">客户端</p></li>
        <li><p @click="activeBG(4)" :class="{active: 4 === activeIndex}">开放平台</p></li>
        <li><p @click="activeBG(5)" :class="{active: 5 === activeIndex}">VIP</p></li>
      </ul>
    </div>
    <div class="top_search">
      <div style="padding-left: 11px;height: 36px;width: 215px;border: 1px gray solid;margin-top: 26px;border-radius: 5px">
        <input type="text" class="search_input" placeholder="搜索音乐、MV、歌单、用户">
        <i class="iconfont" style="margin-left: 10px;font-size: 18px;line-height: 36px">&#xe60e;</i>
      </div>
    </div>
    <div class="top_opt">
      <div class="top_login" @mouseover="MenuIsShow">
        <div><img src="../../assets/img/navbar/user.jpg" alt="" style="width: 100%;cursor: pointer"/></div>
        <ul style="position: absolute">
          <li>绿钻豪华版</li>
          <li>付费音乐包</li>
          <li>评论通知</li>
          <li>提出登录</li>
        </ul>
      </div>
      <div class="top_vip">
        <span>开通VIP</span>
        <i class="iconfont">&#xe67e;</i>
      </div>
      <div class="top_recharge">
        <span>充值</span>
        <i class="iconfont">&#xe67e;</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarInner",
  data() {
    return {
      activeIndex: 1
    }
  },
  methods: {
    activeBG(index) {
      this.activeIndex = index;
    }
  },
  computed: {
    MenuIsShow() {
      return true;
    }
  }
}
</script>

<style scoped>
.active {
  color: white!important;
  background: #31c27c;
}

.top_nav p:hover {
  color: #9FF57EFF;
}


.inner {
  width: 1200px;
  height: 100%;
  margin: 0 auto;

  display: flex;
}

.inner > div {
  height: 100%;
  line-height: 90px;
}

.top_logo {
  padding-top: 15px;
}

.top_nav ul {
  display: flex;
  margin-left: 20px;
}

.top_nav ul li {
  list-style: none;
  width: 94px;
}

.top_nav ul li p {
  list-style: none;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
}

.top_search {
  line-height: 0!important;
  margin-left: 20px;
}

.search_input {
  border: 0;
  width: 174px;
  font-size: 14px;
  outline: none;
  margin-bottom: 10px;
}

.top_login {
  margin-top: 25px;
  margin-left: 20px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  overflow: hidden;
}

.top_opt {
  width: auto;
  display: flex;
  line-height: normal!important;
  margin-left: 10px;
}

.top_opt > div {
  margin-left: 10px;
}

.top_vip ,.top_recharge{
  height: 38px;
  margin-top: 25px;
  /*background: #31c27c;*/
  border: 1px solid gray;
  line-height: 38px;
  text-align: center;
  border-radius: 3px;
  font-size: 15px!important;
}

.top_vip > i ,.top_recharge > i {
  margin-left: 5px;
}

.top_vip {
  width: 100px;
}

.top_recharge {
  width: 65px;
}

</style>