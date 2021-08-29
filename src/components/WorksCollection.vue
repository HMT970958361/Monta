<template>
  <header class="topheader">
    <div class="header-left">
      <div class="topnav-normal">
        <img src="../assets/images/hlogo.png" alt="H" />
        <router-link to="/">返回首页</router-link>
      </div>
      <ul class="topnav-ul">
        <li v-for="link in topNav.links" :key="link.en">
          <router-link :to="link.url">{{ link.ch }}</router-link>
        </li>
      </ul>
    </div>
    <div class="header-right">
      <div class="topsearch">
        <div class="topsearch-input">
          <input type="text" id="">
        </div>
        <div class="topsearch-normal iconfont icon-btn_search"></div>
      </div>
      <div class="topul">
        <div class="topul-normal iconfont icon-shezhi"></div>
        <ul class="topul-list"></ul>
      </div>
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
.topheader {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
}
.header-left {
  width: 220px;
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
    a {
      padding: 0 13px;
      color: @colorFont;
      font-family: "jzjdxcs";
      font-size: 24px;
    }
  }
  .topnav-ul {
    display: none;
    list-style: none;
    position: absolute;
    z-index: 10;
    li {
      width: 200px;
      padding: 8px;
      padding-left: 40px;
      text-align: center;
      font-family: "jzjdxcs";
      font-size: 20px;
      //background-color: @btnBk;
    }
  }
  &:hover {
    .topnav-ul {
      display: block;
    }
  }
}
.header-right {
  display: flex;
  flex-flow: row nowrap;
  justify-content: end;
  align-items: center;
}
.topsearch {
  width: 600px;
  .topsearch-normal {
    font-size: 24px;
    color: @colorFont;
    padding: 13px;
    border-radius: 50%;
    box-shadow: 2px 2px 4px #a9aaaa, -2px -2px 4px #fff;
  }
  .topsearch-input{
    display: flex;
    flex-flow: row nowrap;
    justify-content: end;
    align-items: center;
    input{
      border: none;
      background-color: #e8edf300;
    }
  }
}
.topul {
  margin: 0 30px;
  .topul-normal {
    font-size: 24px;
    color: @colorFont;
    padding: 13px;
    border-radius: 50%;
    box-shadow: 2px 2px 4px #a9aaaa, -2px -2px 4px #fff;
  }
}
</style>