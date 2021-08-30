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

<style lang="less">
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
body {
  background-color: #ebf0f5;
  overflow: hidden;
}
</style>
