<template>
  <header class="top-header">
    <ul class="top-nav">
      <li v-for="nav in topNav.left" :key="nav.en">
        <a href="/">{{ nav.ch }}</a>
      </li>
    </ul>
    <div class="top-logo-box">
      <div class="top-logo">
        <a href="/">H</a>
      </div>
    </div>
    <ul class="top-nav">
      <li v-for="nav in topNav.right" :key="nav.en">
        <a href="/">{{ nav.ch }}</a>
      </li>
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
    <div class="screen2-introduce">
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
      <div class="basebtn">了解更多<span>▶</span></div>
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
        <div class="palybtn"></div>
      </div>
      <div class="vedioc2">
        <h3 class="vedioc2-title">无线呼叫系统</h3>
        <div class="basebtn">了解更多<span>▶</span></div>
      </div>
      <div class="vedioc2">
        <h3 class="vedioc2-title">玖玖点餐</h3>
        <div class="basebtn">了解更多<span>▶</span></div>
      </div>
      <div class="vedioc2">
        <h3 class="vedioc2-title">石柱房产网</h3>
        <div class="basebtn">了解更多<span>▶</span></div>
      </div>
    </div>
  </div>
  <div class="screen4">
    <div class="screen4-box">
      <div class="screen4-header">
        <h1>技术栈</h1>
        <p>软硬双修，文理兼备，乐善人生</p>
      </div>
      <div class="screen4-main">
        <ul class="screen4-list">
          <li
            v-for="(item, index) in Skills"
            :key="item.name"
            :class="['skillcard', index == skillNum ? 'skillselected' : '']"
            @click="skillSel(index)"
          >
            <img
              :src="'../../public/images/' + item.photo"
              alt="item.name"
              width="80"
              height="80"
            />
            <h4 class="skillname">{{ item.name }}</h4>
            <span class="iconfont icon-play"></span>
          </li>
        </ul>
        <div class="screen4-main-radar">
          <div class="lbx" id="radar"></div>
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
        <p>
          游戏发生在一个被称作“提瓦特”的幻想世界，在这里，被神选中的人将被授予“神之眼”，导引元素之力。玩家将扮演一位名为“旅行者”的神秘角色，在自由的旅行中邂逅性格各异、能力独特的同伴们，和他们一起击败强敌，找回失散的亲人——同时，逐步发掘“原神”的真相。
        </p>
        <p>
          剑灵凭借完美的视觉表现力,电影版的剧情体验,深厚的东方文化底蕴,自由灵活的战斗体验,成为突破传统、引领潮流的最受期待网游。
        </p>
        <p>
          天地处于“混沌”状态，有“盘古”生于其间。盘古身体不断成长，原来的混沌状态不能容纳其身体而分裂，“清气”上升为天，“浊气”沉降为地。盘古死后，其精、气、神分化成三位大神，分别为伏羲、神农、女娲。
        </p>
      </div>
      <div class="screen5-card-bottom"></div>
    </div>
    <div class="screen5-card2">
      <div class="person"></div>
      <div class="screen5-card-title">
        <h1>剑&nbsp;灵</h1>
      </div>
      <div class="screen5-card-content">
        <p>
          剑灵凭借完美的视觉表现力,电影版的剧情体验,深厚的东方文化底蕴,自由灵活的战斗体验,成为突破传统、引领潮流的最受期待网游。
        </p>
      </div>
      <div class="screen5-card-bottom"></div>
    </div>
    <div class="screen5-card3">
      <div class="person"></div>
      <div class="screen5-card-title">
        <h1>原&nbsp;神</h1>
      </div>
      <div class="screen5-card-content">
        <p>
          游戏发生在一个被称作“提瓦特”的幻想世界，在这里，被神选中的人将被授予“神之眼”，导引元素之力。
        </p>
      </div>
      <div class="screen5-card-bottom"></div>
    </div>
  </div>
  <div class="screen6">
    <h1>推荐文章</h1>
    <div class="screen6-row1">
      <div class="chart-circular" id="echartsRing"></div>
      <div class="screen6-card1">
        <div class="screen6-card1-header">
          <span class="iconfont icon-danmu"></span>
          <h4>General Message</h4>
        </div>
        <div class="screen6-card1-info">
          <p><span>2318</span> <span>Group </span></p>
          <p>Full exon sequence</p>
          <meter value="7" min="0" max="10" low="6" high="8"></meter>
        </div>
      </div>
      <div class="screen6-card1">
        <div class="screen6-card1-header">
          <span class="iconfont icon-shoucang"></span>
          <h4>Virus Sequence</h4>
        </div>
        <div class="screen6-card1-info">
          <p><span>42,324</span> <span>CFU</span></p>
          <p>Full exon sequence</p>
          <meter value="4" min="0" max="10" low="6" high="8"></meter>
        </div>
      </div>
    </div>
    <div class="screen6-row2">
      <div class="screen6-card2">
        <div class="screen6-card2-header">
          <span class="iconfont icon-approve"></span>
          <h4>Cloud TEC.</h4>
        </div>
        <div class="screen6-card2-content">
          Can could etc Can Can is an auxiliary verb, a modal auxiliary verb. We
          use can to:∙talk about possibility and ability ∙make requests
        </div>
      </div>
      <div class="screen6-card2">
        <div class="screen6-card2-header">
          <span class="iconfont icon-approve"></span>
          <h4>Cloud TEC.</h4>
        </div>
        <div class="screen6-card2-content">
          Can could etc Can Can is an auxiliary verb, a modal auxiliary verb. We
          use can to:∙talk about possibility and ability ∙make requests
        </div>
      </div>
      <div class="screen6-card2">
        <div class="screen6-card2-header">
          <span class="iconfont icon-approve"></span>
          <h4>Cloud TEC.</h4>
        </div>
        <div class="screen6-card2-content">
          Can could etc Can Can is an auxiliary verb, a modal auxiliary verb. We
          use can to:∙talk about possibility and ability ∙make requests
        </div>
      </div>
    </div>
  </div>
  <div class="screen7">
    <h1>下载</h1>
    <p>点击下载相关信息</p>
    <div class="screen7-row">
      <div class="screen7-ring">
        <div class="screen7-ring-inset">92%</div>
        <div class="screen7-ring-inset2"></div>
      </div>
      <div class="screen7-sorts">
        <div class="sort">
          <h4><span>01</span>作品源码</h4>
        </div>
        <div class="sort">
          <h4><span>02</span>电子文档</h4>
        </div>
        <div class="sort">
          <h4><span>03</span>用户手册</h4>
        </div>
      </div>
    </div>
  </div>
  <div class="screen8">
    <div class="screen8-main">
      <div class="screen8-left">
        <img src="../../public/images/H.png" alt="LOGO" />
        <h3>HUANG</h3>
      </div>
      <div class="screen8-center">
        <ul class="navlist">
          <li v-for="nav in footerNavs" :key="nav">{{ nav }}</li>
        </ul>
      </div>
      <div class="screen8-right">
        <h3>联系我们</h3>
        <ul class="followul">
          <li v-for="icon in followIcons" :key="icon">
            <span :class="['iconfont', icon]"></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="screen8-info">
      <div class="screen8-info-left">
        <p><span class="iconfont icon-youxiang"></span>Montaiyx@gmail.com</p>
      </div>
      <div class="screen8-info-right">© 2021-2021 Montaiyx</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import * as echarts from "echarts";
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
    let footerNavs = reactive([
      "Company",
      "Notices",
      "About",
      "Supply",
      "Careers",
      "Cookies",
      "Contact",
      "News",
    ]);
    let followIcons = reactive([
      "icon-qq",
      "icon-weixin",
      "icon-guge",
      "icon-liuyan",
    ]);
    let Skills = reactive([
      { name: "电子技术", photo: "cpu.png" },
      { name: "Web前端", photo: "cpu.png" },
      { name: "软件应用", photo: "cpu.png" },
      { name: "社会实践", photo: "cpu.png" },
    ]);
    return { topNav, footerNavs, followIcons, Skills };
  },
  data() {
    return {
      skillNum: 1,
      radarEchart: {},
      radarData: [
        {
          name: "电子技术",
          option: {
            legend: {
              data: ["电子技术"],
            },
            radar: {
              indicator: [
                { name: "模拟电子技术", max: 100 },
                { name: "数字电子技术", max: 100 },
                { name: "高频电路", max: 100 },
                { name: "信号与系统", max: 100 },
                { name: "通信原理", max: 100 },
                { name: "线性代数", max: 100 },
              ],
            },
            series: {
              name: "电子技术",
              type: "radar",
              lineStyle: {
                width: 1,
                opacity: 0.5,
              },
              data: [[89, 78, 86, 75, 81, 86]],
              symbol: "none",
              itemStyle: {
                color: "#F1513C",
              },
              areaStyle: {
                opacity: 0.1,
              },
            },
          },
        },
        {
          name: "Web前端",
          option: {
            legend: {
              data: ["Web前端"],
            },
            radar: {
              indicator: [
                { name: "JavaScript", max: 100 },
                { name: "CSS", max: 100 },
                { name: "HTML", max: 100 },
                { name: "Vue", max: 100 },
                { name: "Nodejs", max: 100 },
                { name: "HTTP", max: 100 },
              ],
            },
            series: {
              name: "Web前端",
              type: "radar",
              lineStyle: {
                width: 1,
                opacity: 0.5,
              },
              data: [[80, 80, 85, 80, 65, 60]],
              symbol: "none",
              itemStyle: {
                color: "#F9713C",
              },
              areaStyle: {
                opacity: 0.1,
              },
            },
          },
        },
        {
          name: "软件应用",
          option: {
            legend: {
              data: ["软件应用"],
            },
            radar: {
              indicator: [
                { name: "VSCode", max: 100 },
                { name: "CSS", max: 100 },
                { name: "HTML", max: 100 },
                { name: "Vue", max: 100 },
                { name: "Nodejs", max: 100 },
                { name: "HTTP", max: 100 },
              ],
            },
            series: {
              name: "软件应用",
              type: "radar",
              lineStyle: {
                width: 1,
                opacity: 0.5,
              },
              data: [[85, 88, 75, 74.8, 72, 78]],
              symbol: "none",
              itemStyle: {
                color: "#ff8c00",
              },
              areaStyle: {
                opacity: 0.05,
              },
            },
          },
        },
        {
          name: "社会实践",
          option: {
            legend: {
              data: ["社会实践"],
            },
            radar: {
              indicator: [
                { name: "VSCode", max: 100 },
                { name: "CSS", max: 100 },
                { name: "HTML", max: 100 },
                { name: "Vue", max: 100 },
                { name: "Nodejs", max: 100 },
                { name: "HTTP", max: 100 },
              ],
            },
            series: {
              name: "社会实践",
              type: "radar",
              lineStyle: {
                width: 1,
                opacity: 0.5,
              },
              data: [[65, 67, 60, 80, 20, 31]],
              symbol: "none",
              itemStyle: {
                color: "#0000ff",
              },
              areaStyle: {
                opacity: 0.05,
              },
            },
          },
        },
      ],
    };
  },
  methods: {
    echartsRing() {
      var myChart = echarts.init(document.getElementById("echartsRing"));

      // 指定图表的配置项和数据
      var option = {
        legend: {
          top: "bottom",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          show: false,
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [80, 100],
            center: ["50%", "50%"],
            roseType: "radius",
            itemStyle: {
              borderRadius: 1,
              shadowColor: "#aeb8ce",
              shadowOffsetX: 5,
              shadowOffsetY: 10,
              shadowBlur: 10,
            },
            color: ["#b7c4cf", "#9489d0", "#7e9fca", "#b9c5cf", "#fff"],
            data: [
              { value: 25, name: "1" },
              { value: 20, name: "2" },
              { value: 10, name: "3" },
              { value: 8, name: "4" },
              { value: 4, name: "5" },
            ],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    echartsRadar() {
      this.radarEchart = echarts.init(document.getElementById("radar"));
      let option = {
        //backgroundColor: '#e8edf3',
        // title: {
        //   text: "技术栈-六维图",
        //   left: "center",
        //   textStyle: {
        //     color: "#000",
        //     fontSize: 24,
        //   },
        // },
        legend: {
          bottom: 5,
          data: ["Web前端"],
          itemGap: 20,
          textStyle: {
            color: "#000",
            fontSize: 14,
          },
          selectedMode: "multiple",
        },
        radar: {
          indicator: [
            { name: "JavaScript", max: 100 },
            { name: "CSS", max: 100 },
            { name: "HTML", max: 100 },
            { name: "Vue", max: 100 },
            { name: "Nodejs", max: 100 },
            { name: "HTTP", max: 100 },
          ],
          //shape: 'circle',
          //splitNumber: 5,
          axisName: {
            color: "#5e697c",
          },
          splitLine: {
            lineStyle: {
              color: [
                "rgba(134, 147, 165, 0.1)",
                "rgba(134, 147, 165, 0.2)",
                "rgba(134, 147, 165, 0.4)",
                "rgba(134, 147, 165, 0.6)",
                "rgba(134, 147, 165, 0.8)",
                "rgba(134, 147, 165, 1)",
              ].reverse(),
            },
          },
          splitArea: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "rgba(119, 136, 153, 0.5)",
            },
          },
        },
        series: [
          {
            name: "Web前端",
            type: "radar",
            lineStyle: {
              width: 1,
              opacity: 0.5,
            },
            data: [[80, 80, 85, 80, 65, 60]],
            symbol: "none",
            itemStyle: {
              color: "#F9713C",
            },
            areaStyle: {
              opacity: 0.1,
            },
          },
        ],
      };
      option && this.radarEchart.setOption(option);
    },
    skillSel(num) {
      if (this.skillNum != num) {
        this.skillNum = num;
        this.radarEchart.setOption(this.radarData[num].option, true);
      }
      // if (this.skillNum === num) {
      //   this.skillNum = null;
      //   this.radarEchart.setOption(
      //     {
      //       legend: {
      //         data: ["电子技术", "Web前端", "软件应用", "社会实践"],
      //         selectedMode: "multiple",
      //       },
      //       radar: {
      //         indicator: [
      //           { name: "第一项", max: 100 },
      //           { name: "第二项", max: 100 },
      //           { name: "第三项", max: 100 },
      //           { name: "第四项", max: 100 },
      //           { name: "第五项", max: 100 },
      //           { name: "第六项", max: 100 },
      //         ],
      //       },
      //       series: [
      //         this.radarData[0].option.series,
      //         this.radarData[1].option.series,
      //         this.radarData[2].option.series,
      //         this.radarData[3].option.series,
      //       ],
      //     },
      //     true
      //   );
      // } else
    },
  },
  mounted() {
    this.echartsRing();
    this.echartsRadar();
  },
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
@font-face {
  font-family: "Threadz";
  src: url("../../public/fonts/Threadz-Needle-1.ttf");
}
@themeColor: #565656;
@colorBk: #e8edf3;
@colorFont: #565656;
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
    color: #ddcd3a;
  }
  &:active {
    color: #f19f32;
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
  top: 0;
  width: 100%;
  height: 80px;
  padding: 10px 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  .top-logo-box {
    border: 4px solid #afafaf;
    border-radius: 50%;
    box-shadow: 2px 2px 4px #4a4a4a;
    transition: all 0.5s;
    cursor: pointer;
    .top-logo {
      width: 50px;
      height: 50px;
      text-indent: 0.7rem;
      line-height: 50px;
      border: 4px solid #757575;
      border-radius: 50%;
      font-size: 2.4rem;
      font-weight: 600;
      color: #999999;
      font-family: "Threadz";
      -webkit-mask-image: linear-gradient(180deg, black 20%, #fff0);
      //text-shadow: 1px 3px 6px #f2f3e8, 0 0 0 #000000, 1px 3px 6px #f3f2e8;
      transition: all 0.5s;
      // &:hover{
      //   color:#505050;
      // }
    }
    &:hover {
      box-shadow: -0px -0pax 4px #a1a1a1;
      .top-logo a {
        color: #ddcd3a;
      }
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
      line-height: 60px;
      cursor: pointer;
      font-family: "jzjdxcs";
      font-size: 18px;
      color: @themeColor;
    }
  }
}

/* 首页第1屏——介绍页 */
.screen1 {
  height: 100vh;
  width: 100%;
  background-image: url("../../public/images/bk1.png");
  background-color: @colorBk;
  background-position: center;
  background-size: 1920px auto;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
}
.introduce1 {
  padding: 0 6rem;
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
  top: 600px;
  left: 3rem;
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
  //height: 750px;
  width: 100%;
  box-shadow: 0 -50px 60px #e8edf3;
  background-image: url("../../public/images/bk2.png");
  background-color: @colorBk;
  background-position: bottom;
  background-size: 1920px 1080px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  align-items: flex-end;
  .screen2-introduce {
    //height: 300px;
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
  cursor: pointer;
  margin-left: 4rem;
  width: 150px;
  height: 50px;
  line-height: 55px;
  font-size: 14px;
  font-family: "jzjdxcs";
  color: #8c8c8c;
  text-indent: 2rem;
  //text-align: center;
  background-image: url("../../public/images/btn.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  transition: all 0.5s;
  span {
    transition: all 0.5s;
    margin-left: 10px;
  }
  //border-radius: 20px;
  //background-color: @colorBk;
  //border: 4px solid #e8edf3;
  //box-shadow: 4px 8px 12px #d9dfe4, -2px -2px 4px #fff;
  //filter: drop-shadow(2px 4px 6px #cbd3d8);

  &:hover {
    background-image: url("../../public/images/btn2.png");
    span {
      margin-left: 20px;
    }
  }
  // &:hover {
  //   box-shadow: 0 0 0 rgba(0, 0, 0, 0.1), 0 0 0 rgba(255, 255, 255, 1),
  //     inset 8px 8px 12px rgba(0, 0, 0, 0.1),
  //     inset -8px -8px 12px rgba(255, 255, 255, 1);
  // }
}
.card {
  width: 360px;
  height: 300px;
  margin-top: 300px;
  //background-color: #eef1f5;
  //border: 2px solid #d1d7dd;
  //border-radius: 20px;
  //box-shadow: 2px 2px 4px 4px #cbd3d8, -2px -2px 4px 4px #fff;
  color: #787a7b;
  transition: all 0.5s;
  background-image: url("../../public/images/jb.png");
  background-size: auto 360px;
  background-repeat: no-repeat;
  background-position: bottom;
  // &:hover {
  //   box-shadow: 0 0 0 rgba(0, 0, 0, 0.1), 0 0 0 rgba(255, 255, 255, 1),
  //     inset 18px 18px 30px rgba(0, 0, 0, 0.1),
  //     inset -18px -18px 30px rgba(255, 255, 255, 1);
  // }
  &:hover {
    background-image: url("../../public/images/jb2.png");
  }
  img {
    position: absolute;
    z-index: 10;
    margin-top: -200px;
  }
}
.card-content {
  font-size: 0.8rem;
  margin-top: 80px;
  box-sizing: border-box;
  width: 360px;
  padding: 2rem;
  text-indent: 2rem;
  line-height: 1.8rem;
  position: absolute;
}
/* 首页第3屏——播放列表页 */
.screen3 {
  height: 1280px;
  width: 100%;
  background-color: #e8edf3;
  display: flex;
  align-items: center;
}
.m1 {
  position: absolute;
  height: 270px;
  width: 100%;
  background-image: url("../../public/images/m1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1920px 900px;
  box-shadow: inset 0 14px 20px #3b4146;
}
.vediocards {
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  align-items: flex-end;
}
.vedioc1 {
  box-sizing: border-box;
  height: 450px;
  width: 270px;
  padding: 2rem 3rem;
  margin: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  align-items: flex-start;
  justify-content: space-around;
  border-radius: 20px;
  background-image: linear-gradient(to bottom, #c0cad5, #98a7b5);
  box-shadow: 2px 2px 8px 0px #72797d, -2px -2px 8px 0px #fff;
  .icon-yuanzi {
    font-size: 6rem;
    color: #e7eff1;
    filter: drop-shadow(2px 2px 4px #98a7b5);
    text-shadow: 2px 2px 3px #3f4244, -2px -2px 6px #fff;
  }
  .vedioc1-title {
    font-size: 2.4rem;
    color: #e7eff1;
    filter: drop-shadow(2px 2px 4px #98a7b5);
    text-shadow: 2px 2px 4px #3f4244, -2px -2px 4px #fff;
  }
  .palybtn {
    cursor: pointer;
    height: 100px;
    width: 100px;
    background-image: url("../../public/images/play.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    transition: all 0.3s ease-in;
    &:hover {
      background-image: url("../../public/images/play2.png");
    }
  }
}
.vedioc2 {
  box-sizing: border-box;
  width: 270px;
  height: 230px;
  margin: 10px;
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
/* 首页第4屏——技能掌握 */
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
  width: 1000px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
}
.screen4-list {
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
.screen4-main-radar {
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
    // text-align: center;
    // line-height: 540px;
    // background-image: url("../../public/images/zz.png");
    // background-size: 100%;
  }
}
/* 首页第5屏——游戏领域 */
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
  box-shadow: inset 2px -2px 4px #d89836, -2px 2px 4px #c18d3e,
    inset -2px 2px 4px #fff0d9, 2px -2px 4px #fffefd;
}
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
  .screen5-card-title {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding-left: 1rem;
    span {
      font-size: 3rem;
    }
    h1 {
      margin-left: 1rem;
      color: #46464626;
      text-shadow: 1px 3px 6px #e8edf3, 0 0 0 #d89d5a, 1px 3px 6px #e8edf3;
    }
  }
  .screen5-card-content {
    box-sizing: border-box;
    padding-top: 70px;
    padding: 70px 1rem;
    //overflow: auto;
    p {
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
    margin-left: 2rem;
    box-sizing: border-box;
    position: absolute;
    z-index: 12;
    width: 170px;
    height: 55px;
    margin-top: 280px;
    background-color: #e8edf3;
    border-radius: 50px;
    box-shadow: inset 2px -2px 4px #bbb797, -1px 1px 2px #c5ba61,
      inset -2px 2px 4px #e6dea6, 1px -1px 2px #d4cea5;

    h1 {
      text-align: center;
      color: #47321921;
      line-height: 55px;
      text-shadow: 1px 3px 6px #f2f3e8, 0 0 0 #77703b, 1px 3px 6px #f3f2e8;
    }
  }

  .screen5-card-content {
    z-index: 10;
    box-shadow: 2px 4px 8px #a9bace, -2px -4px 8px #ffffff;
    background-image: linear-gradient(to bottom, #e8edf3 75%, #f6e393);
    -webkit-mask-image: url("../../public/images/tx.png");
    p {
      position: absolute;
      bottom: 0px;
      text-indent: 2rem;
      text-align: justify;
      color: #727272;
      font-size: 14px;
      padding: 1rem;
    }
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
    margin-left: 2rem;
    box-sizing: border-box;
    position: absolute;
    z-index: 12;
    width: 170px;
    height: 55px;
    margin-top: 280px;
    h1 {
      text-align: center;
      color: #324b5a44;
      line-height: 55px;
      text-shadow: 1px 3px 6px #e8edf3, 0 0 0 #23343f, 1px 3px 6px #e8edf3;
    }
    background-color: #e8edf3;
    border-radius: 50px;
    box-shadow: inset 2px -2px 2px #408e96, -1px 1px 2px #378a92,
      inset -2px 2px 2px #abe3e8, 1px -1px 2px #9ae3ea;
  }
  .screen5-card-content {
    box-shadow: 2px 4px 8px #a9bace, -2px -4px 8px #ffffff;
    background-image: linear-gradient(to bottom, #e8edf3 75%, #95f0ea);
    -webkit-mask-image: url("../../public/images/tx.png");
    p {
      position: absolute;
      bottom: 0px;
      text-indent: 2rem;
      text-align: justify;
      color: #727272;
      font-size: 14px;
      padding: 1rem;
    }
  }
  .screen5-card-bottom {
    background-image: linear-gradient(to bottom, #e8edf3 20%, #69e4dc);
    -webkit-mask-image: linear-gradient(359deg, black 40%, transparent);
  }
}
/* 首页第6屏——文章推荐 */
.screen6 {
  box-sizing: border-box;
  height: 900px;
  width: 1200px;
  margin: 0px auto;
  padding: 50px 0;
  background-color: @colorBk;
  h1 {
    margin-left: 6rem;
  }
}
.screen6-row1 {
  height: 240px;
  width: 1200px;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-evenly;
  align-items: center;
}
.screen6-row2 {
  margin-top: 50px;
  height: 240px;
  width: 1200px;
  margin: 100px auto;
  display: flex;
  flex-flow: row nowrap;
  align-content: flex-start;
  justify-content: space-evenly;
  align-items: center;
}
.chart-circular {
  height: 240px;
  width: 280px;
  //border: 1px solid #000;
}
.screen6-card1 {
  height: 240px;
  width: 280px;
  //border: 1px solid #000;
  border-radius: 40px 0 10px 10px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 4px rgb(206, 206, 206), -2px -2px 4px 4px #fff;
  .screen6-card1-header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    box-shadow: 2px 2px 10px 4px rgb(206, 206, 206), -2px -2px 4px 4px #fff;
    span {
      display: block;
      width: 70px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 2rem;

      background: #5b8fd5;
    }
    h4 {
      line-height: 50px;
      width: 210px;
      text-align: center;
      font-size: 1.2rem;
      background: #85a4cd;
    }
  }
  .screen6-card1-info {
    padding: 2rem;
    p:first-child {
      span:first-child {
        font-size: 2.4rem;
      }
      span:last-child {
        font-size: 1.5rem;
      }
    }
    p:nth-child(2) {
      color: #848484;
      padding: 0.2rem 0 1rem 0;
    }
    meter:nth-child(3) {
      width: 200px;
    }
  }
}
.screen6-card2 {
  height: 240px;
  width: 280px;
  //border: 1px solid #000;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 4px rgb(206, 206, 206), -2px -2px 4px 4px #fff;
  .screen6-card2-header {
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    background-color: #d9dee4;
    border-radius: 10px;
    box-shadow: 2px 2px 10px 4px rgb(206, 206, 206), -2px -2px 4px 4px #fff;
    span {
      font-size: 30px;
      padding: 10px;
      color: #fff;
      background-color: #626e71;
      border-radius: 50%;
      position: relative;
      margin: -20px 0 0 -20px;
    }
    h4 {
      color: #4141415e;
      margin-left: 2rem;
      font-size: 1.8rem;
      line-height: 50px;
      text-shadow: 1px 3px 6px #e8edf3, 0 0 0 #414141, 1px 3px 6px #e8edf3;
    }
  }
  .screen6-card2-content {
    padding: 1.5rem;
    font-size: 0.8rem;
    color: #9da1a7;
  }
}

/* 首页第7屏——下载 */
.screen7 {
  height: 500px;
  width: 1200px;
  padding: 50px 0;
  margin: 0 auto;
  h1 {
  }
  p {
    line-height: 3rem;
  }
}
.screen7-row {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
}

.screen7-ring {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #ffb18d 30%, #dc528f, #4953ce);
  -webkit-mask-image: linear-gradient(180deg, black, transparent);
}
.screen7-ring-inset {
  position: absolute;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  background-color: #e8edf3;
  margin: 20px 20px;
  text-align: center;
  line-height: 160px;
  font-size: 40px;
  color: #d8dee4ad;
  font-weight: 800;
  text-shadow: 1px 3px 6px #e8edf3, 0 0 0 #000, 1px 3px 6px #e8edf3;
  box-shadow: 2px 4px 12px #000;
}
.screen7-ring-inset2 {
  position: absolute;
  height: 130px;
  width: 130px;
  border-radius: 50%;
  border: 5px solid #f9f9f9;
  margin: 30px 30px;
  box-shadow: inset -4px -4px 8px #d8d8d8, -2px -2px 2px #c5c5c5,
    inset 2px 2px 4px #c8d4d4, -4px -4px 8px #f5f5f5;
}
.screen7-sorts {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  width: 800px;
}
.sort {
  h4 {
    font-weight: normal;
    font-size: 2rem;
    color: #626e71;
    font-family: "jzjdxcs";
    span {
      margin-right: 1.2rem;
      font-size: 4rem;
      font-weight: 800;
      color: transparent;
      text-shadow: -4px -3px 5px #ffffff;
      background-image: -webkit-linear-gradient(
        bottom,
        #ffffff,
        #828282,
        #ffffff
      );
      -webkit-background-clip: text;
    }
  }
}
/* 首页第8屏——页脚 */
.screen8 {
  height: 350px;
  background-color: #6c7a8a;
  //background-image: linear-gradient(135deg, #6c7a8a, #a6b3c1);
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
}
.screen8-main {
  width: 1200px;
  height: 200px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  border-bottom: 4px solid #a2b3c5;
}
.screen8-left {
  width: 320px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: #fff;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 4px solid #fff;
    padding: 4px;
    background-repeat: no-repeat;
  }
  h3 {
    font-size: 2rem;
    margin-left: 2rem;
    letter-spacing: 1rem;
    font-weight: 500;
    color: #fff;
  }
}
.navlist {
  width: 240px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  li {
    width: 100px;
    height: 40px;
    line-height: 40px;
    color: #cbd3d8;
  }
}
.screen8-right {
  height: 200px;
  h3 {
    font-size: 2.4rem;
    color: #cbd3d8;
  }
}
.followul {
  width: 400px;
  height: 100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  li {
  }
  .iconfont {
    font-size: 2rem;
    padding: 20px;
    border-radius: 10px;
    background-color: #a1abb6;
    color: #dae0e8;
    box-shadow: -2px -2px 4px #c8cbcf, 2px 2px 8px #878c91;
    text-shadow: 2px 2px 4px rgb(91, 104, 114);
  }
}
.screen8-info {
  width: 1200px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.screen8-info-left p {
  color: #d4dde6;
  span {
    font-size: 1.4rem;
    margin-right: 0.5rem;
  }
}
.screen8-info-right {
  color: #d4dde6;
}
</style>
