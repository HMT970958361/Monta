<template>
  <header class="topheader">
    <div
      class="header-left"
      @mouseover="showNav('hover')"
      @mouseleave="showNav('leave')"
    >
      <div class="topnav-normal">
        <img src="../assets/images/hlogo.png" alt="H" />
        <router-link to="/">返回首页</router-link>
      </div>
      <ul class="topnav-ul" id="topNavUl">
        <li v-for="link in topNav.links" :key="link.en">
          <router-link :to="link.url">{{ link.ch }}</router-link>
        </li>
      </ul>
    </div>
    <div class="header-right">
      <div class="topsearch" :class="showSearch ? 'showsearch' : ''">
        <input type="text" id="topInput" @blur="inputshow()" />
        <div
          class="topsearch-normal iconfont icon-btn_search"
          @click="inputshow()"
        ></div>
      </div>
      <div class="topul" :class="topulShow ? 'showtopul' : ''">
        <div
          class="topul-normal iconfont icon-shezhi"
          @click="topulshow()"
        ></div>
        <ul class="topul-list"></ul>
      </div>
    </div>
  </header>
  <main :class="['main']" @mouseleave="playORpause('pause')" id="main">
    <div class="center" @mouseenter="playORpause('play')">
      <video
        src="src/assets/video/dna.mp4"
        class="work"
        muted
        loop
        :height="detailPlay ? 1000 : 400"
        id="work"
        :style="stop ? 'opacity:0.8;' : 'opacity:1;'"
        @click="detial('ulList')"
      ></video>
    </div>
    <div class="basebtn centerbtn1" :style="stop ? '' : 'transform:scale(1);'">
      脱氧核糖核酸
    </div>
    <div class="basebtn centerbtn2" :style="stop ? '' : 'transform:scale(1);'">
      核酸
    </div>
  </main>

  <aside
    class="asideright"
    @mouseleave="mouseTouch($event)"
    @mousemove="mouseTouch($event)"
    @mousedown="mouseTouch($event)"
    @mouseup="mouseTouch($event)"
    id="workList"
  >
    <div class="limitarea">
      <ul :style="worksList.workulStyle">
        <li
          v-for="(work, index) in worksList.data"
          :key="work"
          :style="
            worksList.selected == index ? 'font-size: 32px;color: #6e7275;' : ''
          "
          @click.self="selectwork(index)"
        >
          {{ work }}
        </li>
      </ul>
      <div class="ulpos">
        <div class="ulposnow" :style="worksList.ulposnowStyle"></div>
      </div>
    </div>
  </aside>
  <aside class="workdetail" id="detial">
    <h2>
      <span class="iconfont icon-shoucang"></span>
      <span>特斯拉线圈</span>
    </h2>
    <h1>SGTC特斯拉线圈</h1>
    <p>
      这是一种分布参数高频串联谐振变压器，可以获得上百万伏的高频电压。传统特斯拉线圈的原理是使用变压器使普通电压升压，然后给初级LC回路谐振电容充电，充到放电阈值的，火花间隙放电导通，初级LC回路发生串联谐振，给次级线圈提供足够高的励磁功率，其次是和次级LC回路的频率相等，让次级线圈的电感与分布电容发生串联谐振，这时放电终端电压最高，于是就形成闪电了。
    </p>
    <div class="workdetail-btn" @click="detial('detail')">
      More &nbsp;&nbsp;&nbsp;→
    </div>
    <div class="workdetail-infoicon">
      <img src="src/assets/images/sjx.png" alt="sjx" height="10px" />
      information
    </div>
  </aside>
  <footer class="footer" :style="detailPlay?'transform: translateY(100px);opacity:0;':''">
    <span class="iconfont icon-shoucang"></span>
    <span>特斯拉线圈</span>
  </footer>
</template>

<script>
import { defineComponent, reactive, onMounted, ref } from "vue";
export default defineComponent({
  setup(props, context) {
    //顶部左侧导航
    let topNav = reactive({
      icon: { icon: "H", url: "" },
      show: false,
      links: [
        { ch: "首页", en: "Home", url: "/" },
        { ch: "作品集锦", en: "Portfolio", url: "/works" },
        { ch: "软件领域", en: "Software", url: "/software" },
        { ch: "硬件领域", en: "Hardware", url: "/hardware" },
        { ch: "娱乐天地", en: "Game", url: "/game" },
        { ch: "关于", en: "About", url: "/about" },
      ],
    });
    onMounted(() => {
      let ul = document.getElementById("topNavUl");
      let lis = ul.getElementsByTagName("li");
      ul.style = "opacity:0;" + "height:0px;";
      for (let i = 0; i < lis.length; i++) {
        lis[i].style =
          "transform:translateY(-" +
          i * 40 +
          "px);" +
          "transition:all " +
          i * 0.2 +
          "s";
        //console.log(lis[i].style);
      }
    });
    function showNav(mouse) {
      if (mouse == "hover") {
        topNav.show = true;
        let ul = document.getElementById("topNavUl");
        ul.style = "opacity:1;" + "height:300px;";
        let lis = ul.getElementsByTagName("li");
        for (let i = 0; i < lis.length; i++) {
          lis[i].style =
            "transform:translateY(0px);" + "transition: all " + i * 0.2 + "s";
          console.log(lis[i].style);
        }
      }
      if (mouse == "leave") {
        topNav.show = false;
        let ul = document.getElementById("topNavUl");
        ul.style = "opacity:0;" + "height:0px;";
        let lis = ul.getElementsByTagName("li");
        for (let i = 0; i < lis.length; i++) {
          lis[i].style =
            "transform:translateY(-" +
            i * 40 +
            "px);" +
            "transition: all " +
            i * 0.2 +
            "s";
          console.log(lis[i].style);
        }
      }
    }
    //顶部右侧
    let showSearch = ref(false),
      clicklock = ref(false),
      topulShow = ref(false);
    function inputshow() {
      if (clicklock.value == false) {
        clicklock.value = true; //点击截流
        showSearch.value = !showSearch.value;
        if (showSearch.value) {
          let input = document.getElementById("topInput");
          input.focus();
        }
        setTimeout(() => {
          clicklock.value = false;
        }, 100);
      }
    }
    function topulshow() {
      //let input = document.getElementById('topInput')
      topulShow.value = !topulShow.value;
      console.log(topulShow.value);
    }

    //中部视频播放
    let stop = ref(true),
      work = reactive({});
    function playORpause(state) {
      console.log(state);
      if (state == "play") {
        stop.value = false;
        work.play();
      } else if (state == "pause"){
        stop.value = true;
          work.pause();
      }
    }
    onMounted(() => {
      work = document.getElementById("work");
      work.currentTime = 3;
    });
    //中部右侧列表
    let worksList = reactive({
      data: [
        "vue",
        "JS",
        "NODEJS",
        "RNA",
        "GSDB",
        "DNA",
        "SQL",
        "1HP",
        "AA",
        "BB",
        "CC",
      ],
      selected: 5,
      startindex: 5,
      workulStyle: "transform: translateY(-240px);",
      ulposnowStyle: "height:0px",
      clicklock: false,
      y0: 0,
      y1: 0,
    });
    function selectwork(index) {
      let dy = (worksList.selected - 2) * 80;
      worksList.ulposnowStyle = "height:" + 360 * (index / 10) + "px";
      if (index >= 2 && index <= 8) {
        dy = (index - 2) * 80;
        worksList.workulStyle = "transform: translateY(-" + dy + "px);";
      }
      worksList.selected = index;
    }
    function mouseTouch(e) {
      switch (e.type) {
        case "mousedown":
          {
            worksList.clicklock = true;
            worksList.y0 = e.screenY;
            console.log("down", e);
          }
          break;
        case "mousemove":
          {
            if (worksList.clicklock == true) {
              console.log("move");
              worksList.y1 = e.screenY;
              let dy = worksList.y0 - worksList.y1;
              let index = worksList.startindex + parseInt(dy / 60);
              let dindex = parseInt(dy / 60);
              if (index < 0 || index > 10) index = worksList.selected;
              console.log(worksList.startindex, index, dindex);
              selectwork(index, dindex);
            }
          }
          break;
        case "mouseup":
          {
            worksList.clicklock = false;
            worksList.startindex = worksList.selected;
            console.log(worksList.selected);
          }
          break;
        case "mouseleave":
          {
            if (worksList.clicklock == true) {
              worksList.clicklock = false;
              console.log("鼠标移出", "当前锁:", worksList.clicklock);
              let dy = worksList.y0 - worksList.y1;
              let index = worksList.startindex + parseInt(dy / 60);
              if (index < 0 || index > 10) index = worksList.selected;
              selectwork(index);
              worksList.startindex = worksList.selected;
            }
          }
          break;
        default:
          console.log("错误：", e.type);
          break;
      }
    }
    onMounted(() => {
      worksList.ulposnowStyle =
        "height:" + 360 * (worksList.selected / 10) + "px";
    });
    //
    let detailPlay = ref(false);
    function detial(type) {
      let workList = document.getElementById("workList");
      let detial = document.getElementById("detial");
      let main = document.getElementById("main");
      if (type == "ulList") {
        detial.style =
          "opacity:1;transform:translateX(0px);visibility: visible;";
        workList.style =
          "opacity:0;transform:translateX(200px);visibility: hidden;";
        detailPlay.value = true;
        setTimeout(() => {
          playORpause('play')
        }, 300);

        main.classList.add("maindetail");
        main.classList.remove("maindetailreverse");
        console.log("detailPlay", detailPlay.value);
      } else {
        detial.style =
          "opacity:0;transform:translateX(-200px);visibility: hidden;";
        workList.style =
          "opacity:1;transform:translateX(0px);visibility: visible;";
        detailPlay.value = false;
                setTimeout(() => {
          playORpause('pause')
        }, 300);
        main.classList.remove("maindetail");
        main.classList.add("maindetailreverse");

        console.log(detailPlay);
      }
    }
    return {
      topNav,
      showNav,
      stop,
      playORpause,
      showSearch,
      inputshow,
      topulShow,
      topulshow,
      worksList,
      selectwork,
      mouseTouch,
      detial,
      detailPlay,
    };
  },
});
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
a {
  text-decoration: none;
  transition: all 0.5s;
  &:link {
    color: @colorFont;
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
@themeColor: #565656;
@colorBk: #e8edf3;
@colorFont: #737b81;
@colorH1: #4e4e4e;
@btnBk: #ebf0f5;
@btnShadowDown: #c9cdd0;
@btnShadowUp: #fff;
.up {
  box-shadow: 2px 2px 4px #c9cdd0, -2px -2px 4px #fff;
  background-color: #e8edf3;
}
.down {
  box-shadow: 2px 2px 4px #84888c, -2px -2px 4px #fff, inset 2px 2px 4px #bcc1c7,
    inset -2px -2px 4px #fff;
  background-color: #eceff1;
}
.fudiao {
  background-color: #ebf0f5;
  box-shadow: 2px 2px 4px 0px #bcc0c1, -1px -1px 4px 0px #ffffff,
    inset 2px 2px 4px #ffffff, inset -2px -2px 4px #ced2d6;
}
//顶部内容
.topheader {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  margin: 30px 20px;
  min-width: 780px;
}
.header-left {
  width: 220px;
  .topnav-normal {
    position: relative;
    z-index: 12;
    box-sizing: border-box;
    width: 220px;
    padding: 5px 10px;
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
    position: relative;
    z-index: 10;
    list-style: none;
    position: absolute;
    z-index: 3;
    transition: all 0.2s;
    width: 220px;
    padding-top: 30px;
    margin-top: -30px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    .down();
    background-color: #e9eef3;
    li {
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-family: "jzjdxcs";
      font-size: 20px;
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
  height: 60px;
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: end;
  align-items: center;
  .topsearch-normal {
    position: absolute;
    z-index: 10;
    box-sizing: border-box;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 36px;
    color: @colorFont;
    .up();
    text-align: center;
    border-radius: 50%;
    transition: all 1s;
  }
  #topInput {
    position: absolute;
    z-index: 8;
    border: none;
    outline: none;
    box-sizing: border-box;
    height: 50px;
    width: 0px;
    line-height: 60px;
    padding: 10px 2rem;
    font-size: 18px;
    border-radius: 60px;
    box-shadow: inset 2px 2px 4px @btnShadowDown,
      inset -2px -2px 4px @btnShadowDown;
    background-color: #80818300;
    color: @colorFont;
    opacity: 0;
    transition: all 1s;
  }
}
.showsearch {
  .topsearch-normal {
    .down();
  }
  #topInput {
    width: 400px;
    opacity: 1;
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
    transition: all 0.6s;
  }
}

.showtopul {
  .topul-normal {
    .down();
  }
}
.main {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 500px;
  top: calc((100% - 500px) / 2);
  transition: all 1s;
}
//主体内容
.center {
  position: absolute;
  z-index: 1;
  width: 400px;
  height: 400px;
  top: calc((100% - 400px) / 2);
  left: calc((100% - 400px) / 2);
  border: 1px solid rgb(190, 190, 190);
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f4f7;
  transition: all 1s;
  text-align: center;
  // &::after {
  //   content: "";
  //   width: 400px;
  //   height: 400px;
  //   border-radius: 50%;
  //   border: 1px solid #7c8288d2;
  // }
  .work {
    position: absolute;
    z-index: 10;
    //border-radius: 50%;
    overflow: hidden;
    &:hover{
      .down();
    }
  }
}
.maindetail {
  width: 1200px;
  height: 1200px;
  top: calc((100% - 1200px) / 2);
  left: -500px;
  animation: detialmain 0.6s linear;
  //animation-fill-mode: forwards;
  .center {
    width: 1000px;
    height: 1000px;
    top: calc((100% - 1000px) / 2);
    left: 100px;
    animation: detailvideo 0.6s linear;
   // animation-fill-mode: forwards;
    video {
      height: 1000px;
      transition: all 0.5s;
    }
  }
}
.maindetailreverse {
  width: 400px;
  height: 400px;
  top: calc((100% - 400px) / 2);
  left: calc((100% - 400px) / 2);
  animation: detialmain 0.6s linear reverse;
  //animation-fill-mode: forwards;
  .center {
    width: 400px;
    height: 400px;
    top: calc((100% - 400px) / 2);
    left: calc((100% - 400px) / 2);
    animation: detailvideo 0.6s linear reverse;
    //animation-fill-mode: forwards;
    video {
      height: 400px;
      transition: all 1s;
    }
  }
}
@keyframes detialmain {
  0% {
    width: 400px;
    height: 400px;
    top: calc((100% - 400px) / 2);
    left: calc((100% - 400px) / 2);
  }
  100% {
    width: 1200px;
    height: 1200px;
    top: calc((100% - 1200px) / 2);
    left: -500px;
  }
}
@keyframes detailvideo {
  0% {
    width: 400px;
    height: 400px;
    top: calc((100% - 400px) / 2);
    left: calc((100% - 400px) / 2);
  }
  100% {
    width: 1000px;
    height: 1000px;
    top: calc((100% - 1000px) / 2);
    left: 100px;
  }
}
.basebtn {
  box-sizing: border-box;
  height: 60px;
  width: 240px;
  line-height: 40px;
  padding: 10px 2rem;
  border-radius: 100px;
  background-color: #ebf0f5;
  box-shadow: 2px 2px 4px 0px #bcc0c1, -1px -1px 4px 0px #ffffff,
    inset 2px 2px 4px #ffffff, inset -2px -2px 4px #ced2d6;
  color: #86909e;
  font-size: 24px;
  text-align: center;
  font-family: "jzjdxcs";
  transition: all 0.5s;
  overflow: hidden;
}
.centerbtn1 {
  position: absolute;
  z-index: 12;
  top: 300px;
  left: 200px;
  top: calc(((100% - 60px) / 2) - 100px);
  left: calc(((100% - 240px) / 2) - 200px);
  transform: scale(0);
}
.centerbtn2 {
  position: absolute;
  z-index: 12;
  top: 300px;
  left: 200px;
  top: calc(((100% - 60px) / 2) + 100px);
  left: calc(((100% - 240px) / 2) + 200px);
  transform: scale(0);
}
//右侧列表
.asideright {
  user-select: none;
  box-sizing: border-box;
  z-index: 8;
  position: absolute;
  //width: 220px;
  //height: 800px;
  padding: 200px 20px;
  right: 50px;
  top: calc((100% - 800px) / 2);
  //border: 1px solid;
  transition: all 1s;
  .limitarea {
    width: 200px;
    height: 400px;
    padding: 10px;
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: flex-start;
  }
  ul {
    box-sizing: border-box;
    //cursor: pointer;
    width: 160px;
    // height: 250px;
    list-style: none;
    //text-align: end;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.8s;
    li {
      box-sizing: border-box;
      height: 80px;
      width: 160px;
      padding: 10px;
      font-family: "jzjdxcs";
      font-size: 22px;
      color: #c6cfd6;
      transition: all 0.5s;
      line-height: 60px;
      text-align: end;
    }
    .selected {
      font-size: 32px;
      color: #6e7275;
    }
  }
  .ulpos {
    height: 360px;
    margin: 20px 10px;
    width: 8px;
    box-shadow: inset 2px 2px 2px 0px #c2d2de, 0px 1px 2px 1px #bac3ca;
    border-radius: 10px;
    .ulposnow {
      width: 6px;
      margin: 0 auto;
      //background-image: radial-gradient(#eff7ff 30%, #ccd4dc);
      background-image: radial-gradient(
        rgb(181, 236, 243) 30%,
        rgb(211, 223, 235)
      );
      box-shadow: -1px 1px 2px 1px #9ba2ab;
      opacity: 0.5;
      transition: all 0.5s;
      border-radius: 10px;
    }
  }
}
//右侧详情页
.workdetail {
  opacity: 0;
  visibility: hidden;
  transform: translateX(-200px);
  position: absolute;
  z-index: 10;
  box-sizing: border-box;
  height: 80%;
  width: 38%;
  top: 10%;
  right: 0px;
  //border: 1px solid;
  padding: 60px;
  transition: all 1s;
  h2 {
    font-size: 22px;
    font-style: oblique;
    color: rgb(157, 170, 180);
    span:nth-child(1) {
      font-size: 24px;
    }
  }
  h1 {
    font-size: 48px;
    padding: 1.5rem 0;
    color: #505b68;
  }
  p {
    color: rgb(131, 146, 153);
    line-height: 1.8rem;
    width: 420px;
  }
  .workdetail-btn {
    cursor: pointer;
    box-sizing: border-box;
    width: 200px;
    height: 50px;
    line-height: 30px;
    padding: 10px 30px;
    font-size: 22px;
    color: rgb(131, 146, 153);
    border: 2px solid rgb(131, 146, 153);
    border-radius: 50px;
    text-align: center;
    margin-top: 100px;
    transition: all 0.5s;
    &:hover {
      .fudiao();
    }
  }
  .workdetail-infoicon {
    font-size: 16px;
    color: rgb(131, 146, 153);
    font-style: oblique;
    font-weight: 600;
    margin-top: 100px;
    text-align: end;
  }
}
//底部说明
.footer {
  transform: translateY(0px);transition: all 1s;
  box-sizing: border-box;
  position: absolute;
  z-index: 2;
  width: 320px;
  height: 60px;
  bottom: 50px;
  left: calc((100% - 320px) / 2);
  border-radius: 100px;
  box-shadow: inset 2px 2px 4px @btnShadowDown, inset -2px -2px 4px #fff;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  color: #89a0ae;
  span:nth-child(1) {
    font-size: 32px;
    //color: #b2bbc2;
  }
  span:nth-child(2) {
    margin-left: 0.6rem;
    font-family: "jzjdxcs";
    font-size: 22px;
    //color: #b2bbc2;
  }
}
</style>