<template>
  <header class="top-header">
    <ul class="top-nav">
      <li v-for="nav in topNav.left" :key="nav.en">{{ nav.ch }}</li>
    </ul>
    <!-- <img src="../../public/images/H.png" alt="Home" class="top-logo"> -->
    <div class="top-logo-box">
      <div class="top-logo"></div>
    </div>

    <ul class="top-nav">
      <li v-for="nav in topNav.right" :key="nav.en">{{ nav.ch }}</li>
    </ul>
  </header>
  <div class="screen1">
    <div class="introduce">
      <h1>种棠花</h1>
      <h2>致力于创造美好的事物</h2>
      <h3>
        软硬双修。拥有良好的硬件、软件知识，擅长技术性、应用性工作；有较强的动手能力、逻辑思维能力和自学能力。<br />
        实干笃行。充满责任心，专注于笃定的事物，不断地追求完美。<br />
        真诚专一。宽容豁达，乐于助人。
      </h3>
    </div>
  </div>
  <div class="screen2">
    <div>
      <div class="ring"></div>
      <img src="../../public/images/cpu.png" alt="ai" height="240px">
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  setup(props, context) {
    let topNav = reactive({
      left: [
        { ch: "首页", en: "Home", url: "/" },
        { ch: "作品集锦", en: "Portfolio", url: "/portfolio" },
        { ch: "软件领域", en: "Software", url: "/software" },
      ],
      center: { icon: "H", url: "" },
      right: [
        { ch: "硬件领域", en: "Hardware", url: "/hardware" },
        { ch: "娱乐天地", en: "Game", url: "/game" },
        { ch: "关于", en: "About", url: "/about" },
      ],
    });
    return { topNav };
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
});
</script>

<style lang="less">
@font-face {
  font-family: "msyh";
  src: url("../../public/fonts/msyh.ttf");
}
@font-face {
  font-family: "jzjdxcs";
  src: url("../../public/fonts/jzjdxcs.ttf");
}
@themeColor: #565656;
* {
  margin: 0;
  padding: 0;
}
a {
  &:link {
    color: rgb(0, 0, 0);
    text-decoration: none;
  }
  &:visited {
    color: rgb(0, 0, 0);
    text-decoration: none;
  }
  &:hover {
    color: rgb(110, 110, 110);
    text-decoration: none;
  }
  &:active {
    color: rgb(0, 0, 0);
    text-decoration: none;
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
  width: 100%;
  height: 80px;
  padding: 10px 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
  .top-logo-box {
    width: 40px;
    height: 40px;
    margin: auto 0;
    border-radius: 50%;
    padding: 4px;
    background-image: linear-gradient(to bottom, #414141, #f0f0f0);
    box-shadow: 0 0 10px #7a7a7a;
  }
  .top-logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: url("../../public/images/Hwhite.png");
    background-size: 100%;
    background-position: 50%;
  }
  .top-nav {
    width: calc((100% - 60px) / 2);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-content: center;
    li {
      //height: 80px;
      line-height: 80px;
      font-family: "jzjdxcs";
      font-size: 18px;
      color: @themeColor;
    }
  }
}

/* 首页第1屏——介绍页 */
.screen1 {
  margin: 0;
  height: 1080px;
  width: 100%;
  background-image: url("../../public/images/bk1.png");
  background-color: #e8edf3;
  background-position: top;
  background-size: 1920px 1080px;
  background-repeat: no-repeat;
}
.introduce {
  padding-top: 380px;
  padding-left: 6rem;
  h1 {
    font-size: 3rem;
    padding: 1rem 0;
    color: #717171;
  }
  h2 {
    font-size: 4rem;
    color: #464646;
  }
  h3 {
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.8rem;
    color: #8c8c8c;
  }
}
/* 首页第2屏——技能大类页 */
.screen2 {
  width: 100%;
  height: 1080px;
  //background-color: #e8edf3;
  box-shadow: 0 -50px 60px #e8edf3;
  background-image: url('../../public/images/bk2.png');
  background-color: #e8edf3;
  background-position: top;
  background-size: 1920px 1080px;
  background-repeat: no-repeat;
}
.ring{
  height: 300px;
  width: 300px;
  border: 10px solid rgb(155, 159, 163);
  border-radius: 50%;
  transform: rotateX(45deg);
  box-shadow: 0 8px 8px #000;
}
</style>
