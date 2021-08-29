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
        <input type="text" id="" />
        <div class="topsearch-normal iconfont icon-btn_search"></div>
      </div>
      <div class="topul">
        <div class="topul-normal iconfont icon-shezhi"></div>
        <ul class="topul-list"></ul>
      </div>
    </div>
  </header>
  <main class="workmain">
    <div class="center">
      <img src="../assets/images/sd.gif" alt="sd" />
    </div>
  </main>
  <aside class="asideright">
    <ul>
      <li
        v-for="(work, index) in worksList.data"
        :key="work"
        :class="[worksList.selected == index ? 'selected' : '']"
        @click="selectwork(index)"
      >
        {{ work }}
      </li>
    </ul>
  </aside>
  <footer class="footer">
    <div class="footer-center">
      <span class="iconfont icon-shoucang"></span>
      <span>特斯拉球</span>
    </div>
  </footer>
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
    let worksList = reactive({
      data: [" ", " ", " ", "RNA", "GSDB", "DNA", "SQL", "1HP", " ", " ", " "],
      selected: 5,
    });
    function selectwork(index) {
      worksList.selected = index;
    }
    return { topNav, worksList, selectwork };
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
@btnShadowDown: #c9cdd0;
@btnShadowUp: rgb(235, 235, 235);
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
//顶部内容
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
    box-shadow: 2px 2px 4px 2px @btnShadowDown, -2px -2px 4px @btnShadowUp;
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
  width: 60px;
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: end;
  align-items: center;
  &:hover {
    input {
      display: block;
    }
  }
  .topsearch-normal {
    position: absolute;
    z-index: 10;
    box-sizing: border-box;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 36px;
    color: @colorFont;
    background-color: @btnBk;
    text-align: center;
    border-radius: 50%;
    box-shadow: 2px 2px 4px @btnShadowDown, -2px -2px 4px @btnShadowUp;
  }
  input {
    position: absolute;
    z-index: 8;
    //display: none;
    border: none;
    outline: none;
    box-sizing: border-box;
    background-color: #80818300;
    color: @colorFont;
    height: 50px;
    width: 400px;
    line-height: 60px;
    padding: 10px 2rem;
    font-size: 18px;
    border-radius: 60px;
    box-shadow: inset 2px 2px 4px @btnShadowDown,
      inset -2px -2px 4px @btnShadowDown;
  }
}
.topul {
  margin: 0 30px;
  .topul-normal {
    position: relative;
    box-sizing: border-box;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 36px;
    color: @colorFont;
    background-color: @colorBk;
    text-align: center;
    border-radius: 50%;
    box-shadow: 2px 2px 4px #a9aaaa, -2px -2px 4px #fff;
  }
}
//主体内容
.workmain {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.center {
  width: 400px;
  height: 400px;
  border: 1px solid rgb(190, 190, 190);
  border-radius: 50%;
  box-shadow: inset 2px 2px 4px @btnShadowDown, inset -2px -2px 4px @btnShadowUp;
  img {
    width: 300px;
    height: 300px;
    padding: 50px;
  }
}
//右侧列表
.asideright {
  position: absolute;
  z-index: 8;
  right: 50px;
  //top: calc((100% - 250px) / 2);
  ul {
    cursor: pointer;
    width: 100px;
    height: 250px;
    list-style: none;
    text-align: end;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    li {
      height: 50px;
      width: 80px;
      margin: 20px;
      font-family: "jzjdxcs";
      font-size: 22px;
      color: #c6cfd6;
      transition: all 0.5s;
    }
    .selected {
      font-size: 32px;
      color: #6e7275;
    }
  }
}
//底部说明
.footer {
  box-sizing: border-box;
  position: absolute;
  z-index: 2;
  bottom: 50px;
  left: 0;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}
.footer-center {
  //box-sizing: border-box;
  width: 320px;
  height: 60px;
  border-radius: 100px;
  box-shadow: inset 2px 2px 4px @btnShadowDown, inset -2px -2px 4px #fff;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  span:nth-child(1) {
    font-size: 32px;
    color: #b2bbc2;
  }
  span:nth-child(2) {
    margin-left: 0.6rem;
    font-family: "jzjdxcs";
    font-size: 22px;
    color: #b2bbc2;
  }
}
</style>