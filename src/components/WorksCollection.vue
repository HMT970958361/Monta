<template>
  <header>
    <div class="topnav">
      <div class="topnav-normal">
        <img src="../assets/images/hlogo.png" alt="H" />
        <span>返回首页</span>
      </div>
      <ul class="topnav-ul">
        <li v-for="link in topNav.links" :key="link.en">
          <router-link :to="link.url">{{ link.ch }}</router-link>
        </li>
      </ul>
    </div>
    <div class="topsearch">
      <div class="topsearch-normal"></div>
      <div class="topsearch-input"></div>
    </div>
    <div class="topul">
      <div class="topul-normal"></div>
      <ul class="topul-list"></ul>
    </div>
  </header>
</template>

<script>
import { defineComponent, reactive, onMounted } from "vue";
export default defineComponent({
  setup(props, context) {
    let topNav = reactive({
      icon: { icon: "H", url: "" },
      links: [
        { ch: "首页", en: "Home", url: "/" },
        { ch: "作品集锦", en: "Portfolio", url: "/works" },
        { ch: "软件领域", en: "Software", url: "/software" },
        { ch: "硬件领域", en: "Hardware", url: "/hardware" },
        { ch: "娱乐天地", en: "Game", url: "/game" },
        { ch: "关于", en: "About", url: "/about" },
      ],
    });

    return { topNav };
  },
});
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
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
@colorFont: #737b81;
@colorH1: #4e4e4e;
@btnBk: #ebf0f5;
body {
  background-color: @colorBk;
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
.topnav {
  .topnav-normal {
    width: 200px;
    padding: 10px;
    border-radius: 50px;
    box-shadow: 2px 2px 4px 2px #c9cdd0, -2px -2px 4px #d6d6d6;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    background: @btnBk;
    img {
      width: 50px;
    }
    span {
      padding: 0 13px;
      color: @colorFont;
      font-family: "jzjdxcs";
      font-size: 24px;
    }
  }
  .topnav-ul {
    list-style: none;
    li {
      width: 200px;
      padding: 10px;
      padding-left: 40px;
      text-align: center;
      font-family: "jzjdxcs";
      font-size: 20px;
      //background-color: @btnBk;
    }
  }
}
</style>