<template>

  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
//import HomePage from "./components/HomePage.vue";
export default defineComponent({
  name: 'App',
  // components: {
  //   HomePage
  // },
  setup(props) {
        //顶部导航栏
    let topNav = reactive({
      left: [
        { ch: "首页", en: "Home", url: "/" },
        { ch: "作品集锦", en: "Portfolio", url: "/works" },
        { ch: "软件领域", en: "Software", url: "/software" },
      ],
      center: { icon: "H", url: "" },
      right: [
        { ch: "硬件领域", en: "Hardware", url: "/hardware" },
        { ch: "娱乐天地", en: "Game", url: "/game" },
        { ch: "关于", en: "About", url: "/about" },
      ],
    });
    return {topNav}
  }
})
</script>

<style lang="less" scoped>
@font-face {
  font-family: "jzjdxcs";
  src: url("../assets/fonts/jzjdxcs.ttf");
}
@font-face {
  font-family: "Threadz";
  src: url("../assets/fonts/Threadz-Needle-1.ttf");
}
@themeColor: #565656;
@colorBk: #e8edf3;
@colorFont: #565656;
@colorH1: #4e4e4e;
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  transition: all 0.5s;
  &:link {
    color: #d6d6d6;
  }
  &:visited {
    color: @colorFont;
  }
  &:hover {
    color: #69cde6;
  }
  &:active {
    //color: #f19f32;
    color: #69cde6;
  }
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
/* 顶部导航 */
.top-header {
  position: absolute;
  top: 0;
  height: 60px;
  width: 100%;
  min-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  .top-logo {
    width: 60px;
    height: 60px;
    text-indent: 25%;
    line-height: 60px;
    border: 2px solid #eef2f3;
    border-radius: 50%;
    box-shadow: inset 2px 2px 12px 4px #ebedef, 2px 2px 4px 2px #d8dee2,
      -2px -2px 4px #fff;
    text-shadow: 1px 1px 2px #bac8d8, 0 0 0 #8f9aa8, 1px 1px 2px #91979e;
    transition: all 0.4s;
    a {
      color: #ffffff00;
      font-size: 40px;
      font-family: "Threadz";
      transition: all 0.1s;
    }
    &:hover {
      transform: scale(0.9);
      // background-color: #eff3f8;
      // border-color: #d6dce2;
      // box-shadow: inset 0px 0px 4px 0px #ebedef, 0px 0px 0px 0px #d8dee2,
      //   -0px -0px 0px #fff;
      text-shadow: 1px 1px 2px #76c4d8, 0 0 0 #ffffff, 1px 1px 2px #7bd2dd;
    }
  }
  .top-nav {
    width: calc((100% - 60px) / 2);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    li {
      padding: 0 10px;
      //line-height: 60px;
      cursor: pointer;
      font-family: "jzjdxcs";
      font-size: 18px;
      color: @themeColor;
    }
  }
}
</style>
