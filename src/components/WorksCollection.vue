<template>
  <header class="header">
    <div class="header-left" @mouseleave="topNavAble('leave')">
      <div class="topnav-title" @mouseover="topNavAble('over')">
        <img :src="hlogo" alt="H" class="topnav-title-icon" />
        <router-link to="/" class="topnav-title-a">{{
          topNav.title
        }}</router-link>
      </div>
      <ul class="topnav-ul" id="topNavUl">
        <li v-for="link in topNav.links" :key="link.en">
          <router-link :to="link.url">{{ link.ch }}</router-link>
        </li>
      </ul>
    </div>
    <div class="header-right">
      <div class="topsearch" :class="searchBtn.show ? 'topsearch-able' : ''">
        <input id="topInput" type="text" @blur="searchInputAble()" />
        <div
          class="topsearch-button iconfont icon-btn_search"
          @click="searchInputAble()"
        ></div>
      </div>
      <div class="topoption" :class="optionBtn.show ? 'topoption-able' : ''">
        <div
          class="topoption-button iconfont icon-shezhi"
          @click="optionAble()"
        ></div>
        <ul
          class="topoption-ul"
          :class="optionBtn.show ? 'topoption-able' : ''"
        >
          <li v-for="(opt, index) in optionBtn.options" :key="opt.name">
            <label :for="opt.id">{{ opt.name }}</label>
            <input
              :id="opt.id"
              type="checkbox"
              v-model="opt.value"
              :disabled="index == 2"
            />
          </li>
        </ul>
      </div>
    </div>
  </header>
  <main :class="['main']" id="main">
    <div class="mainmask" id="mainMask">
      <video
        :src="'assets/video/' + videoOpts.msg.videourl"
        class="mainvideo"
        muted
        loop
        :autoplay="videoOpts.playOpt.autoplay"
        :height="workDetail.show ? 1000 : 400"
        id="workVideo"
        :style="videoOpts.playOpt.pause ? 'opacity:0.8;' : 'opacity:1;'"
        @click="detailAble('showdetail')"
      ></video>
    </div>
    <div
      class="basebtn centerbtn1"
      :style="videoOpts.hover && !workDetail.show ? 'transform:scale(1);' : ''"
      v-if="!workDetail.show"
    >
      写点什么内容呢
    </div>
    <div
      class="basebtn centerbtn2"
      :style="videoOpts.hover && !workDetail.show ? 'transform:scale(1);' : ''"
      v-if="!workDetail.show"
    >
      什么呢
    </div>
  </main>
  <div
    class="ringborder"
    id="ring"
    :style="
      workDetail.show
        ? 'transition: all .5s .5s;opcaity:1;'
        : 'transition: all 0.4s;opacity:0;'
    "
  >
    <div class="ring-point" id="point"></div>
  </div>
  <aside
    class="worklist"
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
            worksList.selected == index ? 'font-size: 22px;color: #6e7275;' : ''
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
  <aside class="workdetail" id="workDetial">
    <h2>
      <span class="iconfont icon-shoucang"></span>
      <span>{{ workDetail.subtitle }}</span>
    </h2>
    <h1>{{ workDetail.title }}</h1>
    <p>
      {{ workDetail.introduce }}
    </p>
    <div class="workdetail-btn" @click="detailAble('showlist')">
      <span>Other</span><span class="iconfont icon-play"></span>
    </div>
    <div class="workdetail-infoicon">
      <img :src="sjx" alt="sjx" height="10" />
      information
    </div>
  </aside>
  <footer
    class="footer"
    :style="workDetail.show ? 'transform: translateY(100px);opacity:0;' : ''"
  >
    <span class="iconfont icon-shoucang"></span>
    <span>{{ videoOpts.msg.name }}</span>
  </footer>
</template>


<script>
import { defineComponent, reactive, onMounted, watch } from "vue";
import hlogo from "../assets/images/hlogo.png";
import sjx from "../assets/images/sjx.png";
export default defineComponent({
  data() {
    return {
      hlogo,
      sjx,
    };
  },
  mounted() {
    document.body.style = "overflow:hidden;";
  },
  setup(props, context) {
    var worksData = reactive([
      { name: "特斯拉线圈", platform: "电子制作", videourl: "tslq.mp4" },
      { name: "脱氧核糖核酸", platform: "DNA", videourl: "dna.mp4" },
      { name: "无线呼叫系统", platform: "cpu", videourl: "cpu.mp4" },
      { name: "智慧城市网络", platform: "PC", videourl: "zhihuicity.mp4" },
      { name: "智慧树", platform: "PC", videourl: "tree.mp4" },
      { name: "地球网络", platform: "earth", videourl: "earth.mp4" },
      { name: "水晶DNA", platform: "cpu", videourl: "dna2.mp4" },
      { name: "水晶钻石", platform: "cpu", videourl: "zuanshi.mp4" },
      { name: "生长树", platform: "cpu", videourl: "tree2.mp4" },
      { name: "cpu2型", platform: "cpu", videourl: "cpu2.mp4" },
    ]);
    //Header左侧导航
    let topNav = reactive({
      icon: { icon: "H", url: "" },
      title: "返回首页",
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
    function topNavInit() {
      //导航栏列表初始位置初始化
      let ul = document.getElementById("topNavUl");
      let lis = ul.getElementsByTagName("li");
      ul.style = "opacity:0;" + "display:none" + "overflow:hidden;";
      for (let i = 0; i < lis.length; i++) {
        lis[i].style =
          "transform:translateY(-" +
          i * 40 +
          "px);" +
          "transition:all " +
          i * 0.2 +
          "s";
      }
    }
    function topNavAble(mouse) {
      //列表展开动画
      switch (mouse) {
        case "over":
          {
            topNav.show = true;
            let ul = document.getElementById("topNavUl");
            ul.style = "opacity:1;height: 340px;";
            let liGroup = ul.getElementsByTagName("li");
            for (let i = 0; i < liGroup.length; i++) {
              liGroup[i].style =
                "transform:translateY(0px);" +
                "transition: all " +
                i * 0.2 +
                "s";
            }
          }
          break;
        case "leave":
          {
            topNav.show = false;
            let ul = document.getElementById("topNavUl");
            ul.style = "opacity:0;height: 0px;" + "overflow:hidden;";
            let liGroup = ul.getElementsByTagName("li");
            for (let i = 0; i < liGroup.length; i++) {
              liGroup[i].style =
                "transform:translateY(-" +
                i * 40 +
                "px);" +
                "transition: all " +
                0.8 +
                "s";
            }
          }
          break;
        default:
          {
          }
          break;
      }
    }
    onMounted(() => {
      topNavInit();
    });
    //Header右侧
    let searchBtn = reactive({
      show: false,
      lock: false,
    });
    function searchInputAble() {
      //显示搜索框
      if (searchBtn.lock == false) {
        searchBtn.lock = true;
        setTimeout(() => {
          //点击截流
          searchBtn.lock = false;
        }, 200);
        searchBtn.show = !searchBtn.show;
        if (searchBtn.show) {
          let input = document.getElementById("topInput");
          input.focus();
        }
      }
    }
    let optionBtn = reactive({
      show: false,
      lock: false,
      options: [
        { name: "自动播放", id: "autoplay", value: true },
        { name: "自动切项", id: "autonext", value: false },
        { name: "暗黑模式", id: "blackmodle", value: false },
      ],
      checkbox: [], //搞定checkbox------------------
    });
    function optionAble() {
      //显示搜索框
      if (optionBtn.lock == false) {
        optionBtn.lock = true;
        setTimeout(() => {
          //点击截流
          optionBtn.lock = false;
        }, 200);
        optionBtn.show = !optionBtn.show;
      }
    }
    //视频外围圆环
    let deg = 0;
    let animateId = null;
    let ringLock = true;
    function pointRing() {
      //圆环环绕动画
      //let ring = document.getElementById('ring')
      let point = document.getElementById("point");
      up();
      function up() {
        deg += Math.PI / 720;
        let px = 580 + 600 * Math.cos(deg),
          py = 580 - 600 * Math.sin(deg);
        point.style.top = py + "px";
        point.style.left = px + "px";
        if (deg > Math.PI / 2) deg = -Math.PI / 2;
        setTimeout(() => {
          if (ringLock) animateId = window.requestAnimationFrame(up);
        }, 10);
      }
    }
    //Main视频播放

    var videoOpts = reactive({
      videoEle: {},
      msg: { name: "特斯拉线圈", platform: "电子制作", videourl: "tslq.mp4" },
      hover: false,
      clock: false,
      playOpt: { autoplay: true, pause: false, width: 400, height: "auto" },
    });
    function playORpause(state) {
      if (state == "play") {
        videoOpts.hover = true;
        optionBtn.options[0].value = true;
        videoOpts.videoEle.play();
      } else {
        videoOpts.hover = false;
        optionBtn.options[0].value = false;
        videoOpts.videoEle.pause();
      }
    }
    watch(
      () => [
        optionBtn.options[0].value,
        optionBtn.options[1].value,
        optionBtn.options[2].value,
      ],
      ([new0, new1, new2]) => {
        if (new0) {
          videoOpts.videoEle.play();
          ringLock = true;
          pointRing();
        } else {
          videoOpts.videoEle.pause();
          setTimeout(() => {
            ringLock = false;
            window.cancelAnimationFrame(animateId);
          }, 0);
        }
        if (new1) {
          autoNextF();
        } else {
          window.clearInterval(worksList.setInterval);
          worksList.setInterval = null;
        }
      }
    );
    onMounted(() => {
      videoOpts.msg = worksData[worksList.selected];
      videoOpts.videoEle = document.getElementById("workVideo");
      videoOpts.videoEle.currentTime = 3;
      pointRing();
    });
    //右侧列表
    var worksList = reactive({
      data: [],
      selected: 5,
      startindex: 5,
      workulStyle: "transform: translateY(-240px);",
      ulposnowStyle: "height:0px",
      clicklock: false,
      y0: 0,
      y1: 0,
      autoNext: false,
      setInterval: null,
    });
    function selectwork(index) {
      let dy = (worksList.selected - 2) * 80;
      worksList.ulposnowStyle = "height:" + 360 * (index / 10) + "px";
      if (index >= 2 && index <= 8) {
        dy = (index - 2) * 80;
        worksList.workulStyle = "transform: translateY(-" + dy + "px);";
      }
      if ((index >= 0 && index < 2) || index > 10) {
        worksList.workulStyle = "transform: translateY(-" + 0 + "px);";
      }
      //let video = document.getElementById('mainMask')
      //待完成：视频切换动效，三个圆的交互
      worksList.selected = index;
      videoOpts.msg = worksData[worksList.selected];
    }
    function mouseTouch(e) {
      switch (e.type) {
        case "mousedown":
          {
            worksList.clicklock = true;
            worksList.y0 = e.screenY;
            //console.log("down", e);
          }
          break;
        case "mousemove":
          {
            if (worksList.clicklock == true) {
              //console.log("move");
              worksList.y1 = e.screenY;
              let dy = worksList.y0 - worksList.y1;
              let index = worksList.startindex + parseInt(dy / 60);
              let dindex = parseInt(dy / 60);
              if (index < 0 || index > 10) index = worksList.selected;
              //console.log(worksList.startindex, index, dindex);
              selectwork(index, dindex);
            }
          }
          break;
        case "mouseup":
          {
            worksList.clicklock = false;
            worksList.startindex = worksList.selected;
            //console.log(worksList.selected);
          }
          break;
        case "mouseleave":
          {
            if (worksList.clicklock == true) {
              worksList.clicklock = false;
              //console.log("鼠标移出", "当前锁:", worksList.clicklock);
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
    function autoNextF() {
      if (!worksList.setInterval)
        worksList.setInterval = setInterval(() => {
          worksList.selected++;
          if (worksList.selected > 10) worksList.selected = 0;
          selectwork(worksList.selected);
        }, 1000);
    }
    onMounted(() => {
      let ul = [];
      for (let i = 0; i < worksData.length; i++) {
        console.log(worksData[i]);
        ul.push(worksData[i].name);
      }
      worksList.data = ul;
    });
    //详情页
    let workDetail = reactive({
      show: false,
      title: "SGTC特斯拉线圈",
      subtitle: "Tesla coil",
      introduce:
        "这是一种分布参数高频串联谐振变压器，可以获得上百万伏的高频电压。传统特斯拉线圈的原理是使用变压器使普通电压升压，然后给初级LC回路谐振电容充电，充到放电阈值的，火花间隙放电导通，初级LC回路发生串联谐振，给次级线圈提供足够高的励磁功率，其次是和次级LC回路的频率相等，让次级线圈的电感与分布电容发生串联谐振，这时放电终端电压最高，于是就形成闪电了。",
    });
    function detailAble(type) {
      let workList = document.getElementById("workList");
      let detailEle = document.getElementById("workDetial");
      let main = document.getElementById("main");
      if (type == "showdetail") {
        // detailEle.style =
        //   "opacity:1;transform:translateX(0px);";
        detailEle.classList.add("workdetail-show");
        detailEle.classList.remove("workdetail-hidden");
        workList.style = "opacity:0;transform:translateX(200px);";
        workDetail.show = true;
        main.classList.add("maindetail");
        main.classList.remove("maindetailreverse");
      } else if (type == "showlist") {
        // detailEle.style =
        //   "opacity:0;transform:translateX(-200px);";
        detailEle.classList.add("workdetail-hidden");
        detailEle.classList.remove("workdetail-show");
        workList.style = "opacity:1;transform:translateX(0px);";
        workDetail.show = false;
        //playORpause("pause");
        main.classList.remove("maindetail");
        main.classList.add("maindetailreverse");

        //console.log(detailPlay);
      }
    }
    return {
      worksData,

      topNav,
      topNavAble,

      searchBtn,
      searchInputAble,
      optionBtn,
      optionAble,

      videoOpts,
      playORpause,

      worksList,
      selectwork,
      mouseTouch,
      workDetail,
      detailAble,
    };
  },
});
</script>

<style lang="less" scoped>
@themeColor: #565656;
@colorBk: #e8edf3;
@colorFont: #737b81;
@colorH1: #4e4e4e;
@btnBk: #ebf0f5;
@btnShadowDown: #c9cdd0;
@btnShadowUp: #fff;
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

.btn-normal {
  box-shadow: 2px 2px 4px #c9cdd0, -2px -2px 4px #fff;
  background-color: #e8edf3;
}
.btn-down {
  box-shadow: inset 2px 2px 2px #b0b3b6,
    inset -1px -1px 2px 1px rgb(252, 253, 255), inset 0px 0px 40px 10px #e7ecee;
  background-color: #eceff1;
}
.emboss {
  background-color: #ebf0f5;
  box-shadow: 2px 2px 4px 0px #bcc0c1, -1px -1px 4px 0px #ffffff,
    inset 2px 2px 4px #ffffff, inset -2px -2px 4px #ced2d6;
}
//顶部内容
.header {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 30px 20px;
  min-width: 780px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  color: #839299;
}
.header-left {
  width: 220px;
  height: 60px;
  position: relative;
  z-index: 12;
  .topnav-title {
    position: absolute;
    z-index: 12;
    box-sizing: border-box;
    width: 180px;
    height: 60px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    .btn-normal();
    .topnav-title-icon {
      width: 30px;
    }
    .topnav-title-a {
      padding: 0 10px;
      color: @colorFont;
      font-family: "jzjdxcs";
      font-size: 20px;
    }
  }
  .topnav-ul {
    position: absolute;
    z-index: 11;
    width: 180px;
    margin-top: 30px;
    padding-top: 30px;
    box-sizing: border-box;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    list-style: none;
    transition: all 0.2s;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    box-shadow: 0 0 4px #b7b7b7;
    transition: all 0.5s;
    li a {
      display: inline-block;
      width: 110px;
      line-height: 50px;
      font-family: "jzjdxcs";
      font-size: 20px;
      text-align: justify;
      text-align-last: justify; //当行数仅为1行时，两端对齐需要此属性。
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
  .topsearch-button {
    position: absolute;
    z-index: 10;
    box-sizing: border-box;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 36px;
    color: @colorFont;
    .btn-normal();
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
.topsearch-able {
  .topsearch-button {
    .btn-down();
  }
  #topInput {
    width: 400px;
    opacity: 1;
  }
}
.topoption {
  margin: 0 30px;
  .topoption-button {
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
  .topoption-ul {
    display: none;
    opacity: 0;
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    //width: 150px;
    margin-top: 20px;
    margin-left: calc((60px - 150px) / 2 - 60px);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    background: #ebf0f5;
    box-shadow: 0 0 4px #b7b7b7;
    transition: all 0.5s;
    li {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      padding: 5px 10px;
      label {
        font-size: 18px;
        margin-right: 1rem;
      }
      input[type="checkbox"] {
        display: inline-block;
        height: 18px;
        width: 18px;
      }
    }
  }
}
.topoption-able {
  .topoption-button {
    .btn-down();
  }
  .topoption-ul {
    display: block;
    opacity: 1;
  }
}
//主体内容
.ringborder {
  //display: none;
  position: absolute;
  height: 1200px;
  width: 1200px;
  top: calc((100% - 1200px) / 2);
  left: -600px;
  border: 2px solid #89a0ae;
  border-radius: 50%;
  transition: all 0.5s 0.5s;
  .ring-point {
    text-align: end;
    top: 600px;
    left: 1180px;
    position: absolute;
    z-index: 4;
    height: 40px;
    width: 40px;
    background-color: #89a0ae;
    border-radius: 50%;
  }
}
.main {
  position: absolute;
  z-index: 5;
  width: 60%;
  height: 500px;
  left: calc((100% - 60%) / 2);
  top: calc((100% - 500px) / 2);
  transition: all 1s;
  &:hover {
    .centerbtn1 {
      transform: scale(1);
    }
    .centerbtn2 {
      transform: scale(1);
    }
  }
  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    border: 1px solid #c3d3db;
    left: calc((100% - 480px) / 2);
    top: calc((100% - 480px) / 2);
  }
  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    width: 660px;
    height: 660px;
    border-radius: 50%;
    border: 1px solid #c3d3db;
    left: calc((100% - 660px) / 2);
    top: calc((100% - 660px) / 2);
  }
}
.mainmask {
  position: absolute;
  z-index: 10;
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
  .mainvideo {
    opacity: 1;
    position: absolute;
    z-index: 10;
    //border-radius: 50%;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
  }
}
.maindetail {
  width: 1200px;
  height: 1200px;
  top: calc((100% - 1200px) / 2);
  left: -600px;
  animation: detailElemain 0.4s linear;
  .mainmask {
    width: 1000px;
    height: 1000px;
    top: calc((100% - 1000px) / 2);
    left: 100px;
    animation: detailvideo 0.4s linear;
    .mainvideo {
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
  animation: detailElemain 0.6s linear reverse;
  .mainmask {
    width: 400px;
    height: 400px;
    top: calc((100% - 400px) / 2);
    left: calc((100% - 400px) / 2);
    animation: detailvideo 0.6s linear reverse;
    .mainvideo {
      height: 400px;
      transition: all 1s;
    }
  }
}
@keyframes detailElemain {
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
.worklist {
  user-select: none;
  box-sizing: border-box;
  z-index: 5;
  position: absolute;
  width: 220px;
  height: 800px;
  padding: 200px 20px;
  right: 5%;
  top: calc((100% - 800px) / 2);
  transition: all 1s ease-out;
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
      font-size: 16px;
      color: #c6cfd6;
      transition: all 0.5s;
      line-height: 60px;
      text-align: end;
    }
    .selected {
      font-size: 18px;
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
  position: absolute;
  z-index: 4;
  box-sizing: border-box;
  height: 80%;
  width: 38%;
  top: 10%;
  right: 0;
  padding: 2%;
  transition: all 1s ease;
  overflow: hidden;
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
  }
  .workdetail-btn {
    transform: scale(0);
    font-family: fantasy;
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
    box-shadow: 0 0 0px #fff;
    transition: all 0.5s;
    span {
      font-size: 22px;
    }
    span:nth-child(2) {
      margin-left: 0.5rem;
    }
    &:hover {
      .emboss();
      border: 2px solid #ffffff00;
    }
  }
  .workdetail-infoicon {
    transform: translateY(-30px);
    font-size: 16px;
    color: rgb(131, 146, 153);
    font-style: oblique;
    font-weight: 600;
    margin-top: 80px;
    text-align: end;
    transition: all 0.5s;
  }
}
.workdetail-show {
  opacity: 1;
  transform: translateX(0px);
  .workdetail-btn {
    transform: scale(1);
  }
  .workdetail-infoicon {
    transform: translateY(0px);
  }
}
.workdetail-hidden {
  opacity: 0;
  transform: translateX(-100px);
  .workdetail-btn {
    transform: scale(0px);
  }
  .workdetail-infoicon {
    transform: translateY(40px);
  }
}
//底部说明
.footer {
  transform: translateY(0px);
  transition: all 1s;
  box-sizing: border-box;
  position: absolute;
  z-index: 6;
  width: 320px;
  height: 60px;
  bottom: 50px;
  left: calc((100% - 320px) / 2);
  border-radius: 100px;
  box-shadow: inset 2px 2px 2px #c9cdd0, inset -2px -2px 2px #fff,
    inset 0px 0px 30px #d1d6dc;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  color: #89a0ae;
  background-color: #ebf0f5;
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