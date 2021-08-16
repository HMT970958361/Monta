<template>
  <header class="top-header">
    <ul class="top-nav">
      <li v-for="nav in topNav.left" :key="nav.en">{{ nav.ch }}</li>
    </ul>
    <div class="top-logo-box">
      <div class="top-logo"></div>
    </div>
    <ul class="top-nav">
      <li v-for="nav in topNav.right" :key="nav.en">{{ nav.ch }}</li>
    </ul>
  </header>
  <div class="screen1">
    <div class="introduce1">
      <h2>种棠花</h2>
      <h1>致力于创造美好的事物</h1>
      <h3>
        软硬双修。拥有良好的硬件、软件知识，擅长技术性、应用性工作；有较强的动手能力、逻辑思维能力和自学能力。<br />
        实干笃行。充满责任心，专注于笃定的事物，不断地追求完美。<br />
        真诚专一。宽容豁达，乐于助人。
      </h3>
    </div>
  </div>
  <div class="strip"></div>
  <div class="screen2">
    <div class="introduce2">
      <h1>
        <p>硬件与软件</p>
        <p>奇妙联合</p>
      </h1>
      <h3>
        模拟电路、数字电路、集成电路构建了它的身躯，在各行各业中发挥着非常重要的作用，是现代信息社会的基石。
      </h3>
      <h3>
        特定顺序组织的计算机数据和指令赋予它灵魂，是无形的，没有物理形态，渗透了人类大量的脑力劳动和逻辑思维，软件具有可复用性。
      </h3>
      <div class="basebtn">了解更多&nbsp;&nbsp;&nbsp;▶</div>
      <!-- <img src="../../public/images/cpu.png" alt="ai" height="240px"> -->
    </div>
    <div class="card">
      <img src="../../public/images/jqr.png" alt="jqr" width="360px" />
      <p class="card-content">
        具有扎实的理论基础、丰富的电子知识，具有良好的电子电路分析能力。良好的手动操作能力，能熟练读图，会使用各种电子测量、生产工具，了解各类电子元器件的原理、型号、用途，了解单片机开发技术，熟练各种相关设计软件.
      </p>
    </div>
    <div class="card">
      <img src="../../public/images/pc.png" alt="jqr" width="360px" />
      <p class="card-content">
        前端技术一般分为前端设计和前端开发，前端设计一般可以理解为网站的视觉设计，前端开发则是网站的前台代码实现，包括基本的HTML和CSS以及JavaScript/ajax，最新的高级版本HTML5、CSS3，以及SVG等。
      </p>
    </div>
  </div>
  <div class="screen3">
    <div class="m1"></div>
    <div class="vediocards">
      <div class="vedioc1">
        <span class="iconfont icon-yuanzi"></span>
        <h2 class="vedioc1-title">
          特斯拉 <br />
          线圈
        </h2>
        <span class="iconfont icon-bofang"></span>
        <!-- <img src="../../public/images/crle.png" alt=""> -->
      </div>
      <div class="vedioc2">
        <h3 class="vedioc2-title">无线呼叫系统</h3>
        <div class="basebtn">了解更多&nbsp;&nbsp;&nbsp;▶</div>
      </div>
      <div class="vedioc2">
        <h3 class="vedioc2-title">玖玖点餐</h3>
        <div class="basebtn">了解更多&nbsp;&nbsp;&nbsp;▶</div>
      </div>
      <div class="vedioc2">
        <h3 class="vedioc2-title">石柱房产网</h3>
        <div class="basebtn">了解更多&nbsp;&nbsp;&nbsp;▶</div>
      </div>
    </div>
  </div>
  <div class="screen4">
    <div class="screen4-box">
      <div class="screen4-header">
        <h1>技术栈</h1>
        <p>软硬双休，文理兼备，是不可多得的好人选</p>
      </div>
      <div class="screen4-main">
        <div class="screen4-main-list">
          <div class="skillcard">
            <img
              src="../../public/images/cpu.png"
              alt=""
              width="80"
              height="80"
            />
            <h4 class="skillname">电子技术</h4>
            <span class="iconfont icon-play"></span>
          </div>
          <div class="skillcard skillselected">
            <img
              src="../../public/images/cpu.png"
              alt=""
              width="80"
              height="80"
            />
            <h4 class="skillname">Web前端</h4>
            <span class="iconfont icon-play"></span>
          </div>
          <div class="skillcard">
            <img
              src="../../public/images/cpu.png"
              alt=""
              width="80"
              height="80"
            />
            <h4 class="skillname">工具辅助</h4>
            <span class="iconfont icon-play"></span>
          </div>
          <div class="skillcard">
            <img
              src="../../public/images/cpu.png"
              alt=""
              width="80"
              height="80"
            />
            <h4 class="skillname">工具辅助</h4>
            <span class="iconfont icon-play"></span>
          </div>
        </div>
        <div class="screen4-main-radarmap">
          <div class="lbx"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="screen5">
    <div class="screen5-card1">
      <div class="screen5-card-title">
        <span class="iconfont icon-mi"></span>
        <h1>风色幻想</h1>
      </div>
      <div class="screen5-card-content">
        <p>游戏发生在一个被称作“提瓦特”的幻想世界，在这里，被神选中的人将被授予“神之眼”，导引元素之力。玩家将扮演一位名为“旅行者”的神秘角色，在自由的旅行中邂逅性格各异、能力独特的同伴们，和他们一起击败强敌，找回失散的亲人——同时，逐步发掘“原神”的真相。</p>
        <p>剑灵凭借完美的视觉表现力,电影版的剧情体验,深厚的东方文化底蕴,自由灵活的战斗体验,成为突破传统、引领潮流的最受期待网游。</p>
        <p>天地处于“混沌”状态，有“盘古”生于其间。盘古身体不断成长，原来的混沌状态不能容纳其身体而分裂，“清气”上升为天，“浊气”沉降为地。盘古死后，其精、气、神分化成三位大神，分别为伏羲、神农、女娲。</p>
      </div>
      <div class="screen5-card-bottom"></div>
    </div>
    <div class="screen5-card2">
      <div class="person"></div>
      <div class="screen5-card-title">
        <h1>剑&nbsp;灵</h1>
      </div>
      <div class="screen5-card-content"></div>
      <div class="screen5-card-bottom"></div>
    </div>
    <div class="screen5-card3">
      <div class="person"></div>
      <div class="screen5-card-title">
        <h1>原&nbsp;神</h1>
      </div>
      <div class="screen5-card-content"></div>
      <div class="screen5-card-bottom"></div>
    </div>
  </div>
  <div class="screen6">

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
@colorBk: #e8edf3;
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
body {
  background-color: @colorBk;
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
  align-items: center;
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
    align-items: center;
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
  margin: 0 auto;
  background-image: url("../../public/images/bk1.png");
  background-color: @colorBk;
  background-position: center;
  background-size: 1920px 1080px;
  background-repeat: no-repeat;
}
.introduce1 {
  padding-top: 380px;
  margin-left: 6rem;
  h1 {
    font-size: 4rem;
    padding: 1rem 0;
    color: #464646;
  }
  h2 {
    font-size: 3rem;
    color: #717171;
  }
  h3 {
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.8rem;
    color: #8c8c8c;
  }
}
.strip {
  position: absolute;
  top: 800px;
  left: 2rem;
  height: 400px;
  width: 8px;
  margin-left: 20px;
  border-radius: 8px;
  background-image: linear-gradient(to bottom, #e8edf3, #fff);
  box-shadow: inset 0px 0px 2px 2px #bfc1c4;
  &::after {
    z-index: 12;
    content: "";
    display: block;
    height: 400px;
    width: 8px;
    position: absolute;
    margin-left: 0px;
    border-radius: 8px;
    background-image: linear-gradient(to bottom, #e8edf3, #fff);
    box-shadow: 0px 4px 4px 2px #e8edf3;
    opacity: 0.8;
  }
}
/* 首页第2屏——技能大类页 */
.screen2 {
  height: 750px;
  width: 1200px;
  margin: 0 auto;
  box-shadow: 0 -50px 60px #e8edf3;
  background-image: url("../../public/images/bk2.png");
  background-color: @colorBk;
  background-position: bottom;
  background-size: 1920px 1080px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-evenly;
  align-items: center;
  .introduce2 {
    text-align: justify;
    h1 {
      margin-bottom: 1rem;
      width: 300px;
      color: #717171;
    }
    h3 {
      width: 300px;
      font-size: 14px;
      font-weight: normal;
      margin-bottom: 2rem;
      color: #8c8c8c;
    }
  }
}
.basebtn {
  margin-left: 4rem;
  width: 140px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-family: "jzjdxcs";
  color: #8c8c8c;
  text-align: center;
  border-radius: 20px;
  background-color: @colorBk;
  border: 4px solid #e8edf3;
  box-shadow: 4px 8px 12px #d9dfe4, -2px -2px 4px #fff;
  filter: drop-shadow(2px 4px 6px #cbd3d8);
  transition: all 0.2s ease-out;
  &:hover {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.1), 0 0 0 rgba(255, 255, 255, 1),
      inset 8px 8px 12px rgba(0, 0, 0, 0.1),
      inset -8px -8px 12px rgba(255, 255, 255, 1);
  }
}
.card {
  width: 360px;
  height: 300px;
  background-color: #eef1f5;
  border: 2px solid #d1d7dd;
  border-radius: 20px;
  box-shadow: 2px 2px 4px 4px #cbd3d8, -2px -2px 4px 4px #fff;
  color: #787a7b;
  transition: all 0.2s ease-out;
  &:hover {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.1), 0 0 0 rgba(255, 255, 255, 1),
      inset 18px 18px 30px rgba(0, 0, 0, 0.1),
      inset -18px -18px 30px rgba(255, 255, 255, 1);
  }
  img {
    position: absolute;
    z-index: 10;
    margin-top: -200px;
  }
}
.card-content {
  margin-top: 80px;
  box-sizing: border-box;
  width: 360px;
  padding: 1rem;
  text-indent: 2rem;
  line-height: 1.8rem;
  position: absolute;
}
/* 首页第3屏——播放列表页 */
.screen3 {
  height: 600px;
  width: 100%;
  background-color: @colorBk;
}
.m1 {
  position: absolute;
  height: 270px;
  width: 100%;
  background-image: url("../../public/images/m1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1920px 900px;
  box-shadow: inset 0 4px 8px 4px #98a7b5;
}
.vediocards {
  position: absolute;
  width: 100%;
  margin-top: -60px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-evenly;
  align-items: flex-end;
}
.vedioc1 {
  box-sizing: border-box;
  height: 450px;
  width: 270px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  align-items: flex-start;
  justify-content: space-around;
  border-radius: 20px;
  background-image: linear-gradient(to bottom, #c0cad5, #98a7b5);
  box-shadow: 2px 2px 4px 4px #cbd3d8, -2px -2px 4px 4px #fff;
  .icon-yuanzi {
    font-size: 6rem;
    color: #e7eff1;
    filter: drop-shadow(2px 2px 4px #98a7b5);
    text-shadow: 2px 2px 3px #3f4244, -2px -2px 6px #fff;
  }
  .vedioc1-title {
    margin-left: 1rem;
    font-size: 2.4rem;
    color: #e7eff1;
    filter: drop-shadow(2px 2px 4px #98a7b5);
    text-shadow: 2px 2px 4px #3f4244, -2px -2px 4px #fff;
  }
  .icon-bofang {
    margin-left: 1rem;
    font-size: 4rem;
    text-shadow: 2px 2px 4px #7d8690, -1px -1px 4px #d4dde6, 0px 0px 7px #6f7780;
    color: #98a6b9;
    filter: blur(1px);
    transition: all 1s;
    &:hover {
      color: #a6b3c7;
      text-shadow: -2px -2px 4px #7d8690, 0px 0px 4px #d4dde6,
        0px 0px 7px #6f7780;
    }
  }
}
.vedioc2 {
  width: 270px;
  height: 230px;
  border: 4px solid #e1e9ef;
  border-radius: 10px;
  filter: drop-shadow(4px 8px 8px #cbd3d8);
  background-color: @colorBk;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
}
.vedioc2-title {
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2rem;
  font-weight: normal;
  font-family: "jzjdxcs";
  color: #626e71;
}
/* 首页第4屏——技能掌握页 */
.screen4 {
  background-color: @colorBk;
  height: 750px;
  width: 1200px;
  margin: 0 auto;
}
.screen4-box {
  width: 600px;
  height: 320px;
  margin-left: 6rem;
  border-radius: 10px;
  background-image: linear-gradient(to right, #e8edf3, @colorBk);
  box-shadow: -17px -10px 18px #fff;
}
.screen4-header {
  padding: 2rem;
  h1 {
    color: #505050;
  }
  p {
    line-height: 2rem;
    color: #98999a;
  }
}
.screen4-main {
  width: 1200px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.screen4-main-list {
  height: 540px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  .skillcard {
    box-sizing: border-box;
    padding: 1rem;
    width: 350px;
    height: 100px;
    border-radius: 10px;
    background-color: #e8edf3;
    box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #bbc1c7;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    img {
      box-sizing: border-box;
      padding: 10px;
      border-radius: 10px;
      background-color: #dfe7ee;
      box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #bbc1c7;
    }
    .skillname {
      font-size: 1.6rem;
      font-weight: normal;
      color: #bcc5cd;
    }
    span {
      color: #dfe7ee;
      font-size: 2.4rem;
      filter: drop-shadow(2px 2px 1px #6e7072);
    }
  }
  .skillselected {
    background-color: #aab7c7;
    img {
      background-color: #aab7c7;
      box-shadow: inset -2px -2px 8px rgb(224, 230, 233),
        inset 2px 2px 16px #666b71;
    }
    .skillname {
      color: #e2e9ee;
      text-shadow: 2px 2px 2px #6f7780;
    }
    span {
      color: #b2c0d2;
      filter: drop-shadow(-4px 4px 2px #6e7072);
      transform: rotateY(180deg);
    }
  }
}
.screen4-main-radarmap {
  margin-left: 100px;
  width: 600px;
  height: 540px;
  border-radius: 10px;
  background-color: #e8edf3;
  box-shadow: -8px -8px 18px #ffffff, 8px 8px 18px #c3c7cc;
  .lbx {
    position: absolute;
    width: 500px;
    height: 440px;
    margin-left: 50px;
    margin-top: 50px;
    border-radius: 10px;
    background-color: #e8edf3;
    box-shadow: -8px -8px 18px #ffffff, 8px 8px 18px #cacfd4;
    text-align: center;
    line-height: 540px;
    background-image: url("../../public/images/zz.png");
    background-size: 100%;
  }
}
/* 首页第5屏——技能掌握页 */
.screen5 {
  box-sizing: border-box;
  height: 700px;
  width: 1200px;
  padding: 50px 0px;
  margin: 0 auto;
  background-color: @colorBk;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: space-evenly;
  align-items: flex-end;
}
.screen5-card-title {
  box-sizing: border-box;
  position: absolute;
  z-index: 10;
  width: 270px;
  height: 70px;
  background-color: #e8edf3;
  border-radius: 8px;
    box-shadow: inset 4px -4px 8px #d89836, -4px 4px 8px #c18d3e, inset -4px 4px 8px #fff0d9, 4px -4px 8px #fffefd;}
.screen5-card-content {
  z-index: 9;
  position: absolute;
  width: 270px;
  height: 480px;
  background-color: #dbe0e7;
  background-image: linear-gradient(to bottom, #e8edf3 20%, #ffc6aa);
  border-radius: 10px;
  box-shadow: 2px 4px 8px #b98b74, -2px -4px 8px #ffffff;
}
.screen5-card-bottom {
  z-index: 8;
  position: absolute;
  width: 270px;
  height: 250px;
  margin-top: 250px;
  background-color: #eebca5;
  border-radius: 10px;
  box-shadow: 2px 4px 8px #b98b74;
      background-image: linear-gradient(to bottom, #e8edf3 20%, #dfb49f);
    -webkit-mask-image: linear-gradient(359deg, black 40%, transparent);
}
.screen5-card1 {
  height: 500px;
  width: 270px;
  .screen5-card-title{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding-left: 1rem;
    span{
      font-size: 3rem;
    }
    h1{
      margin-left: 1rem;
      color: rgb(70, 70, 70);
    }
  }
  .screen5-card-content{
    box-sizing: border-box;
    padding-top: 70px;
    padding: 70px 1rem;
    //overflow: auto;
    p{
      margin-top: 1rem;
      text-indent: 2rem;
      text-align: justify;
      color: #727272;
      font-size: 14px;
      
    }
  }
}
.screen5-card2 {
  width: 270px;
  height: 500px;
  //background-color: #dbe0e7;
  .person {
    position: absolute;
    z-index: 9;
    width: 270px;
    height: 250px;
    margin-top: 120px;
    background-image: url(/public/images/lihui/ningguang.png);
    background-size: 140%;
    background-position: bottom;
    background-repeat: no-repeat;
    background-position: top;
  }
  .screen5-card-title {
    box-sizing: border-box;
    position: absolute;
    z-index: 12;
    width: 200px;
    height: 70px;
    margin-top: 280px;
    background-color: #e8edf3;
    border-radius: 50px;
    box-shadow: inset 4px -4px 8px #bbb797, -4px 4px 8px #c5ba61, inset -4px 4px 8px #e6dea6, 4px -4px 8px #d4cea5;
    h1{
      text-align: center;
      color: #473219;
      line-height: 70px;
  }
    }
 
  .screen5-card-content {
    z-index: 10;
    box-shadow: 2px 4px 8px #a9bace, -2px -4px 8px #ffffff;
    background-image: linear-gradient(to bottom, #e8edf3 75%, #f6e393);
    -webkit-mask-image: url("../../public/images/tx.png");
  }
  .screen5-card-bottom {
    background-image: linear-gradient(to bottom, #e8edf3 20%, #e6d381);
    -webkit-mask-image: linear-gradient(359deg, black 40%, transparent);
  }
}
.screen5-card3 {
  width: 270px;
  height: 500px;
  .person {
    position: absolute;
    z-index: 9;
    width: 270px;
    height: 250px;
    margin-top: 120px;
    background-image: url(/public/images/lihui/xiao.png);
    background-size: 140%;
    background-position: bottom;
    background-repeat: no-repeat;
    background-position: top;
  }
  .screen5-card-title {
    box-sizing: border-box;
    position: absolute;
    z-index: 12;
    width: 200px;
    height: 70px;
    margin-top: 280px;
    h1{
      text-align: center;
      color: #324b5a;
      line-height: 70px;
  }
    background-color: #e8edf3;
    border-radius: 50px;
    box-shadow: inset 4px -4px 8px #408e96, -4px 4px 8px #378a92, inset -4px 4px 8px #abe3e8, 4px -4px 8px #9ae3ea;
  }
  .screen5-card-content {
    box-shadow: 2px 4px 8px #a9bace, -2px -4px 8px #ffffff;
    background-image: linear-gradient(to bottom, #e8edf3 75%, #95f0ea);
    -webkit-mask-image: url("../../public/images/tx.png");
  }
  .screen5-card-bottom {
    background-image: linear-gradient(to bottom, #e8edf3 20%, #69e4dc);
    -webkit-mask-image: linear-gradient(359deg, black 40%, transparent);
  }
}
.screen6{

}
</style>
