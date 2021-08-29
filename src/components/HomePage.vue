<template>
  <header class="top-header">
    <ul class="top-nav">
      <li v-for="nav in topNav.left" :key="nav.en">
        <router-link :to="nav.url">{{nav.ch}}</router-link>
      </li>
    </ul>
    <div class="top-logo">
      <a href="/">H</a>
    </div>
    <ul class="top-nav">
      <li v-for="nav in topNav.right" :key="nav.en">
        <router-link :to="nav.url">{{nav.ch}}</router-link>
      </li>
    </ul>
  </header>
  <div class="screen1">
    <div class="introduce1">
      <h2>{{ screen1Data.h2 }}</h2>
      <h1>{{ screen1Data.h1 }}</h1>
      <h3 v-for="(h3, index) in screen1Data.h3" :key="index">
        {{ h3 }}
      </h3>
    </div>
  </div>
  <div class="strip"></div>
  <div>
  </div>
  <div class="screen2">
    <div class="screen2-introduce">
      <h1>{{ screen2Data.theme.title }}</h1>
      <h3 v-for="section in screen2Data.theme.sections" :key="section.title">
        <span>{{ section.title }}&nbsp;·&nbsp;</span>
        <span>{{ section.content }}</span>
      </h3>
      <div class="basebtn">了解更多<span class="iconfont icon-play"></span></div>
    </div>
    <div class="card" v-for="(card, index) in screen2Data.cards" :key="index">
      <img class="entity" :src="card.img" alt="3d" />
      <p class="card-content">{{ card.content }}</p>
    </div>
  </div>
  <div class="screen3">
    <div class="m1cpu"></div>
    <div class="vediocards">
      <div class="vedioc1">
        <span class="iconfont icon-yuanzi"></span>
        <h2 class="vedioc1-title">
          {{ screen3Data.main.title }}
        </h2>
        <div class="palybtn"></div>
      </div>
      <div class="vedioc2" v-for="pro in screen3Data.products" :key="pro.title">
        <h3 class="vedioc2-title">{{ pro.title }}</h3>
        <p>{{ pro.subtitle }}</p>
        <div class="basebtn">了解更多<span class="iconfont icon-play"></span></div>
      </div>
    </div>
  </div>
  <div class="screen4">
    <div class="screen4-box">
      <div class="screen4-header">
        <h1>{{ screen4Data.main.title }}</h1>
        <p>{{ screen4Data.main.subtitle }}</p>
      </div>
      <div class="screen4-main">
        <ul class="screen4-list">
          <li
            v-for="(item, index) in screen4Data.skills"
            :key="item.name"
            :class="[
              'skillcard',
              index == screen4Data.selected ? 'skillselected' : '',
            ]"
            @click="skillSelect(index)"
          >
            <span :class="['iconfont', item.icon]"></span>
            <h4 class="skillname">{{ item.name }}</h4>
            <span
              class="iconfont icon-play"
              :style="
                index == screen4Data.selected
                  ? 'color:' + item.color
                  : 'color:#969ba0'
              "
            ></span>
          </li>
        </ul>
        <div class="screen4-main-radar">
          <div class="lbx" id="radar"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="screen5">
    <h1>{{ screen5Data.theme.title }}</h1>
    <div class="screen5-row1">
      <div class="echartgroup1">
        <div class="chart-circular" id="echartsRing"></div>
        <div class="chart-line" id="echartsLine"></div>
      </div>
      <div
        v-for="note in screen5Data.notes.row1"
        :key="note.title.name"
        class="screen5-row1-card"
      >
        <div :class="['screen5-row1-card-header']" :style="note.style">
          <span
            :class="['iconfont', note.icon.font]"
            :style="note.icon.style"
          ></span>
          <h4 :style="note.title.style">{{ note.title.name }}</h4>
        </div>
        <div class="screen5-row1-card-info">
          <p>
            <span>{{ note.num }}</span
            ><span>{{ note.unit }}</span>
          </p>
          <p>{{ note.intro }}</p>
          <div class="progress">
            <div
              class="nowprogress"
              :style="note.meter.style"
              :data-nowvalue="note.meter.value"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="screen5-row2">
      <div
        v-for="note in screen5Data.notes.row2"
        :key="note.title"
        class="screen5-row2-card"
      >
        <div class="screen5-row2-card-header">
          <span :class="['iconfont', note.icon]"></span>
          <h4>{{ note.title }}</h4>
        </div>
        <div class="screen5-row2-card-content">
          {{ note.content }}
        </div>
      </div>
    </div>
  </div>
  <div class="screen6">
    <div class="screen6-theme">
      <div class="screen6-theme-title">
        <span :class="['iconfont', screen6Data.theme.icon]"></span>
        <h1>{{ screen6Data.theme.title }}</h1>
      </div>
      <div class="screen6-theme-content">
        <p v-for="(sec, index) in screen6Data.theme.sections" :key="index">
          {{ sec }}
        </p>
      </div>
    </div>
    <div class="screen6-card"
      v-for="card in screen6Data.cards"
      :key="card.title"
    >
      <div class="screen6-card-img"></div>
      <div class="screen6-card-title">
        <h4>{{ card.title }}</h4>
      </div>
      <div class="screen6-card-content">
        <p>{{ card.content }}</p>
      </div>
    </div>
  </div>
  <div class="screen7">
    <h1>{{ screen7Data.theme.title }}</h1>
    <p>{{ screen7Data.theme.subtitle }}</p>
    <div class="screen7-row">
      <div class="screen7-ring">
        <div class="screen7-ring-inset">{{ screen7Data.ringNum }}%</div>
        <div class="screen7-ring-inset2"></div>
      </div>
      <div class="screen7-sorts">
        <div class="sort" v-for="down in screen7Data.downList" :key="down.num">
          <div>
            <span>{{ down.num }}</span>
            <a href="/">{{ down.name }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="screen8">
    <div class="screen8-main">
      <div class="screen8-left">
        <div class="bottom-logo">
          <a :href="footerDiv.logo.link">{{ footerDiv.logo.letter }}</a>
        </div>
        <h3>{{ footerDiv.logo.title }}</h3>
      </div>
      <div class="screen8-center">
        <ul class="navlist">
          <li v-for="nav in footerDiv.navs" :key="nav">
            <a href="/">{{ nav }}</a>
          </li>
        </ul>
      </div>
      <div class="screen8-right">
        <h3>{{ footerDiv.contact }}</h3>
        <ul class="followul">
          <li v-for="icon in footerDiv.icons" :key="icon">
            <span :class="['iconfont', icon]"></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="screen8-info">
      <div class="screen8-info-left">
        <p><span class="iconfont icon-youxiang"></span>{{ footerDiv.email }}</p>
      </div>
      <div class="screen8-info-right">{{ footerDiv.copyright }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, onMounted } from "vue";
//import * as echarts from "echarts";
import img_ROGZ590A from '../assets/images/ROGZ590A.png'
import img_DNA from '../assets/images/DNA.png'
export default defineComponent({
  setup(props, context) {
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
    //screen1-欢迎页
    let screen1Data = reactive({
      h1: "一朵雪花映着霓虹的魅影",
      h2: "雪影霓虹",
      h3: [
        "黑夜都市绽放霓虹耀光，飞雪飘飘逃往寂静山岭",
        "六方晶花倒映城市繁华，虹光咄咄只见刹那雪影",
      ],
    });
    //screen2-技能大类
    let screen2Data = reactive({
      theme: {
        title: "硬件与软件联合",
        sections: [
          {
            title: "基石",
            content:
              "世间万物，千篇归于一律。模拟电路、数字电路大规模集成，筑建现代信息产业基石。",
          },
          {
            title: "序列",
            content:
              "万事俱备，一切皆已初定。 数据和指令制定过程，每一次抉择将创生新的结果。",
          },
        ],
      },
      cards: [
        {
          img: img_ROGZ590A,
          content:
            "电子信息科学与技术专业培养适应社会与经济发展需要，具有道德文化素养、社会责任感、创新精神和创业意识，掌握必备的数学、自然科学基础知识和相应专业知识，具备良好的学习能力、实践能力、专业能力和一定的创新创业能力，身心健康，可从事电子信息及相关领域中系统、设备和器件的研究、设计、开发、制造、应用、维护、管理等工作的高素质专门人才。",
        },
        {
          img: img_DNA,
          content:
            "前端即网站前台部分，运行在PC端，移动端等浏览器上展现给用户浏览的网页。随着互联网技术的发展，HTML5，CSS3，前端框架的应用，跨平台响应式网页设计能够适应各种屏幕分辨率，合适的动效设计，给用户带来极高的用户体验。",
        },
      ],
    });
    //screen3-作品列表
    let screen3Data = reactive({
      main: {
        title: "特斯拉线圈",
      },
      products: [
        { title: "玖玖点餐", subtitle: "（微信小程序）" },
        { title: "石柱房产网", subtitle: "（H5-PC端）" },
        { title: "无线呼叫系统", subtitle: "（硬件电子-毕业设计作品）" },
      ],
    });
    //screen4-技术栈
    let screen4Data = reactive({
      main: { title: "技术栈", subtitle: "软硬双修，文理兼备" },
      skills: [
        { name: "电子技术", icon: "icon-dianlu", color: "rgb(60 241 99)" },
        { name: "Web前端", icon: "icon-H5", color: "rgb(60 232 249)" },
        { name: "软件应用", icon: "icon-vs", color: "rgb(255 225 0)" },
        { name: "社会实践", icon: "icon-shehui", color: "rgb(232 63 227)" },
      ],
      selected: 1,
    });
    let radarEchart = reactive({});
    let radarData = reactive([
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
              color: "rgb(60 241 99)",
            },
            areaStyle: {
              opacity: 0.2,
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
              color: "rgb(60 232 249)",
            },
            areaStyle: {
              opacity: 0.2,
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
              { name: "PS", max: 100 },
              { name: "Office", max: 100 },
              { name: "AutoCAD", max: 100 },
              { name: "Unity3D", max: 100 },
              { name: "Git", max: 100 },
            ],
          },
          series: {
            name: "软件应用",
            type: "radar",
            lineStyle: {
              width: 1,
              opacity: 0.5,
            },
            data: [[70, 60, 75, 68, 50, 65]],
            symbol: "none",
            itemStyle: {
              color: "rgb(230 205 22)",
            },
            areaStyle: {
              opacity: 0.2,
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
              { name: "学习能力", max: 100 },
              { name: "动手能力", max: 100 },
              { name: "沟通交流", max: 100 },
              { name: "抗压能力", max: 100 },
              { name: "理性", max: 100 },
              { name: "感性", max: 100 },
            ],
          },
          series: {
            name: "社会实践",
            type: "radar",
            lineStyle: {
              width: 1,
              opacity: 0.5,
            },
            data: [[78, 80, 68, 76, 85, 75]],
            symbol: "none",
            itemStyle: {
              color: "rgb(232 63 227)",
            },
            areaStyle: {
              opacity: 0.2,
            },
          },
        },
      },
    ]);
    function echartsRadar() {
      radarEchart = echarts.init(document.getElementById("radar"));
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
          show: false,
          bottom: 5,
          data: ["Web前端"],
          itemGap: 20,
          textStyle: {
            color: "#000",
            fontSize: 14,
          },
          selectedMode: "single",
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
      option && radarEchart.setOption(option);
    }
    function skillSelect(num) {
      console.log(num);
      if (screen4Data.selected != num) {
        screen4Data.selected = num;
        console.log(screen4Data.selected);
        radarEchart.setOption(radarData[num].option);
      }
    }
    onMounted(() => {
      echartsRadar();
    });
    //screen5-推荐文章
    let screen5Data = reactive({
      theme: { title: "推荐文章" },
      notes: {
        row1: [
          {
            title: {
              name: "综合信息",
              style: "background:#85a4cd;color:#fff;",
            },
            icon: {
              font: "icon-danmu",
              style: "background:#5b8fd5;color:#fff;",
            },
            num: "2318",
            unit: "篇",
            intro: "今日新增1318篇",
            meter: {
              value: 0.8,
              style:
                "background-image: radial-gradient(#c7e4ff 30%, #ccd4dc);width:0px;",
            },
          },
          {
            title: {
              name: "点赞数",
              style: "background:#a398d7;color:#fff;",
            },
            icon: {
              font: "icon-shoucang",
              style: "background:#805bd5;color:#fff;font-size: 2rem;",
            },
            num: "42,324",
            unit: "次",
            intro: "今日新增点赞1512次",
            meter: {
              value: 0.5,
              style:
                "background-image: radial-gradient(#eed6fd 30%, #ccd4dc);width:0px",
            },
            style: "background:#a398d7;",
          },
        ],
        row2: [
          {
            title: "新拟态UI设计",
            icon: "icon-yun",
            content:
              "19年末一位来自乌克兰的设计师AlexanderPlyuto在追波和ins上发布了下图的一张作品然后火了，浏览超30W+，获得众多设计师的喜爱，并被追波收录到2020设计趋势预测里面。有设计师称这种设计叫Neumorphism（新拟态）或者Soft UI（软UI），于是新拟态就慢慢传开了。",
          },
          {
            title: "小程序接口鉴权",
            icon: "icon-miniapp",
            content:
              "接口鉴权是指后台接口（包括自建后台接口与云函数）在被调用时需要对本次接口调用进行权限校验，否则容易发生越权行为。如商品删除接口，后台在收到请求时应当校验调用者的身份信息（如 openid、 ip 地址、开发者自定义的登录态信息等），只有指定用户才可以通过校验进行删除。",
          },
          {
            title: "游戏推荐",
            icon: "icon-game",
            content:
              "《ENDER LILIES》接近香草社的清丽美术风格和女主角，可能是很多人会想“买买买”的原因。这个瘦弱的女孩在休息、伫立和战斗时的许多神态和动作细节都能让人从心底涌现出保护欲，可以说是洛丽塔型角色的典型设计。围绕着莉莉（Lily）有很多会让人联想到美好事物的设计。",
          },
        ],
      },
      echartsData: {
        option: {
          line: {
            grid: {
              left: "0%",
              right: "0%",
              top: "0%",
              bottom: "0%",
              //containLabel: true
            },
            xAxis: [
              {
                show: false,
                type: "category",
                boundaryGap: false,
                data: [
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15",
                ],
              },
            ],
            yAxis: [
              {
                show: false,
                type: "value",
                max: 800,
              },
            ],
            series: [
              {
                name: "邮件营销",
                type: "line",
                stack: "总量",
                smooth: true,
                showSymbol: false,
                color: "#bc76c2",
                areaStyle: {
                  color: "#cacfdd",
                },
                emphasis: {
                  focus: "series",
                },
                data: [130 ,138, 112, 139, 140 ,128 ,126 ,102, 117 ,122 ,100 ,101 ,104, 145, 146],
              },
              {
                name: "联盟广告",
                type: "line",
                stack: "总量",
                smooth: true,
                showSymbol: false,
                color: "#aabcd1",
                areaStyle: {
                  color: "#d4deea",
                },
                emphasis: {
                  focus: "series",
                },
                data: [120 ,125, 145 ,106 ,145 ,114 ,115 ,112 ,147, 109 ,123, 144 ,133, 101, 145],
              },
            ],
          },
        },
      },
      echartsObj2: {},
    });
    let data1 =
      "130 138 112 139 140 128 126 102 117 122 100 101 104 145 146 123 124 122 137 140 144 103 126 142 127 110 122 101 138 137 147 125 145 104 106 145 133 131 123 121";
    let data2 =
      "120 125 145 106 145 114 115 112 147 109 123 144 133 101 145 130 130 112 142 116 104 101 114 102 108 103 145 140 119 118 138 111 106 124 110 121 120 102 133 116";
    data1 = data1.split(" ");
    data2 = data2.split(" ");
    function echartsRing() {
      var myChart = echarts.init(document.getElementById("echartsRing"));
      // 指定图表的配置项和数据
      var option = {
        legend: {
          top: "bottom",
        },
        // toolbox: {
        //   show: false,
        //   feature: {
        //     //mark: { show: true },
        //     //dataView: { show: true, readOnly: false },
        //     //restore: { show: true },
        //     //saveAsImage: { show: true },
        //   },
        // },
        // legend: {
        //   show: false,
        // },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [100, 120],
            center: ["50%", "50%"],
            roseType: "radius",
            itemStyle: {
              borderRadius: 1,
              shadowColor: "#aeb8ce",
              shadowOffsetX: 5,
              shadowOffsetY: 8,
              shadowBlur: 4,
            },
            label: {
              show: false,
            },
            color: ["#b7c4cf", "#9489d0", "#7e9fca", "#b9c5cf", "#fff"],
            data: [25, 20, 10, 8, 4],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
    function echartsLine() {
      screen5Data.echartsObj2 = echarts.init(
        document.getElementById("echartsLine")
      );
      screen5Data.echartsObj2.setOption(screen5Data.echartsData.option.line);
    }
    function progressInit() {
      //初始化进度条，必须匹配响应进度条组件
      let pros = document.getElementsByClassName("progress");
      for (let pro of pros) {
        let width =
          pro.offsetWidth * parseFloat(pro.children[0].dataset.nowvalue);
        pro.children[0].style.width = width + "px";
      }
    }
    function lineMove() {
      //循环数据
      data1.push(data1.shift());
      data2.push(data2.shift());
      let updata1 = data2.slice(0, 15),
        updata2 = data1.slice(0, 15);
      screen5Data.echartsObj2.setOption({
        series: [{ data: updata1 }, { data: updata2 }],
      });
    }
    onMounted(() => {
      echartsRing();
      echartsLine();
      progressInit();
      setInterval(() => {
        lineMove();
      }, 3000);
    });
    //screen6-娱乐领域
    let screen6Data = reactive({
      theme: {
        title: "娱乐领域",
        icon: "icon-mi",
        sections: [
          "游戏发生在一个被称作“提瓦特”的幻想世界，在这里，被神选中的人将被授予“神之眼”，导引元素之力。玩家将扮演一位名为“旅行者”的神秘角色，在自由的旅行中邂逅性格各异、能力独特的同伴们，和他们一起击败强敌，找回失散的亲人——同时，逐步发掘“原神”的真相。",
          "剑灵凭借完美的视觉表现力,电影版的剧情体验,深厚的东方文化底蕴,自由灵活的战斗体验,成为突破传统、引领潮流的最受期待网游。",
          "天地处于“混沌”状态，有“盘古”生于其间。盘古身体不断成长，原来的混沌状态不能容纳其身体而分裂，“清气”上升为天，“浊气”沉降为地。盘古死后，其精、气、神分化成三位大神，分别为伏羲、神农、女娲。",
        ],
      },
      cards: [
        {
          title: `剑 灵`,
          content:
            "剑灵凭借完美的视觉表现力,电影版的剧情体验,深厚的东方文化底蕴,自由灵活的战斗体验,成为突破传统、引领潮流的最受期待网游。",
        },
        {
          title: `原 神`,
          content:
            "游戏发生在一个被称作“提瓦特”的幻想世界，在这里，被神选中的人将被授予“神之眼”，导引元素之力。",
        },
      ],
    });
    //screen7-下载相关
    let screen7Data = reactive({
      theme: { title: "下载", subtitle: "相关资源下载" },
      ringNum: 92,
      downList: [
        { num: "01", name: "作品文件" },
        { num: "02", name: "源码文件" },
        { num: "03", name: "相关文档" },
      ],
    });
    //底部导航栏
    let footerDiv = reactive({
      logo: { letter: "H", link: "/", title: "HUANG" },
      navs: [
        "Company",
        "Notices",
        "About",
        "Supply",
        "Careers",
        "Cookies",
        "Contact",
        "News",
      ],
      contact: "与我联系",
      icons: ["icon-qq", "icon-weixin", "icon-guge", "icon-liuyan"],
      email: "Montaiyx@gmail.com",
      copyright: `© 2021-2021 Montaiyx`,
    });
    return {
      topNav,
      screen1Data,
      screen2Data,
      screen3Data,
      screen4Data,
      radarEchart,
      screen5Data,
      screen6Data,
      screen7Data,
      footerDiv,
      skillSelect,
    };
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
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
  background-color: @colorBk;
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
/* 首页第1屏——介绍页 */
.screen1 {
  height: 100vh;
  width: 100%;
  min-width: 1200px;
  background-image: url("../assets/images/bk1.png");
  background-color: @colorBk;
  background-position: 65% 50%;
  background-size: 180%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
}
.introduce1 {
  padding: 0 6rem;
  h1 {
    font-size: 4rem;
    padding: 1rem 0;
    color: @colorH1;
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
  top: 700px;
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
  width: 100%;
  padding: 200px 0;
  min-width: 1200px;
  box-shadow: 0 -50px 60px #e8edf3;
  background-image: url("../assets/images/bk2.png");
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
}
.screen2-introduce {
  text-align: justify;
  h1 {
    margin-bottom: 1rem;
    width: 350px;
    font-size: 4rem;
    color: @colorH1;
  }
  h3 {
    width: 310px;
    font-size: 1rem;
    font-weight: normal;
    margin-bottom: 2rem;
    color: #8c8c8c;
    span:first-child {
      color: @colorH1;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
}
.basebtn {
  cursor: pointer;
  margin-left: 4rem;
  width: 150px;
  height: 50px;
  line-height: 55px;
  font-size: 1rem;
  font-family: "jzjdxcs";
  color: #8c8c8c;
  text-indent: 2rem;
  //text-align: center;
  background-image: url("../assets/images/btn.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  transition: all 0.5s;
  span {
    transition: all 0.5s;
    margin-left: 10px;
  }
  &:hover {
    background-image: url("../assets/images/btn2.png");
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
  //height: 300px;
  color: #787a7b;
  transition: all 0.5s;
  background-image: url("../assets/images/block1.png");
  background-size: 360px auto;
  background-repeat: no-repeat;
  background-position: bottom;
  text-align: center;
  .entity {
    height: 420px;
    transition: all 0.5s;
    &:hover {
      transform: translate(0, -20px);
    }
  }
  &:hover {
    background-image: url("../assets/images/block2.png");
  }
}
.card-content {
  box-sizing: border-box;
  width: 360px;
  padding: 2rem;
  font-size: 0.8rem;
  text-indent: 2rem;
  line-height: 1.8rem;
  text-align: justify;
}
/* 首页第3屏——作品列表页 */
.screen3 {
  height: 400px;
  width: 100%;
  background-color: #e8edf3;
  padding: 200px 0;
}
.m1cpu {
  height: 270px;
  background-image: url("../assets/images/m1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1920px 900px;
  box-shadow: inset 0 14px 20px #3b4146;
  transition: all 0.5s;
  &:hover {
    background-size: 1960px 960px;
  }
}
.vediocards {
  position: relative;
  margin-top: -120px;
  width: 100%;
  height: 230px;
  min-width: 1200px;
  display: flex;
  flex-direction: row nowrap;
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
    color: #e7eff13b;
    //filter: drop-shadow(2px 2px 4px #98a7b5);
    text-shadow: -2px -2px 2px #ffffff, 0px 0px 0px #343c48, 2px 2px 4px #d0d6df;
  }
  .vedioc1-title {
    width: 130px;
    font-size: 2.4rem;
    color: #e7eff1;
    filter: drop-shadow(2px 2px 4px #98a7b5);
    text-shadow: 2px 2px 4px #3f4244, -2px -2px 4px #fff;
  }
  .palybtn {
    cursor: pointer;
    height: 100px;
    width: 100px;
    background-image: url("../assets/images/play.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    transition: all 0.3s ease-in;
    &:hover {
      background-image: url("../assets/images/play2.png");
    }
  }
}
.vedioc2 {
  box-sizing: border-box;
  width: 270px;
  height: 230px;
  margin: 10px;
  border: 2px solid #e5ebec;
  border-radius: 10px;
  filter: drop-shadow(4px 4px 4px #adb1b3);
  background-color: #e8edf3;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  box-shadow: inset 0px 0px 40px 12px #eceff1;
  p {
    text-align: center;
    color: #848788;
    line-height: 2rem;
    margin: 0.5rem 0;
  }
}
.vedioc2-title {
  text-align: center;
  font-size: 2rem;
  font-weight: normal;
  font-family: "jzjdxcs";
  color: #626e71;
}
/* 首页第4屏——技术栈 */
.screen4 {
  background-color: @colorBk;
  height: 750px;
  padding: 50px 0;
  width: 100%;
  min-width: 1200px;
  margin: 0 auto;
}
.screen4-box {
  width: 1200px;
  height: 480px;
  margin: 0 auto;
  border-radius: 10px;
  background-image: linear-gradient(to right, #e8edf3, @colorBk);
  box-shadow: -17px -10px 18px #fff;
}
.screen4-header {
  padding: 2rem;
  h1 {
    color: @colorH1;
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
  justify-content: space-evenly;
  align-items: flex-start;
}
.screen4-list {
  height: 540px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
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
    transition: all 0.6s;
    .skillname {
      font-size: 1.6rem;
      font-weight: normal;
      color: #99a7b3;
      //text-shadow: 1px 3px 5px #dfe6ee, 0px 0px 0px #1b2635, 1px 3px 2px #d0d6df;
      transition: all 0.6s;
    }
    span {
      color: #969ba0;
      font-size: 3rem;
      transition: all 0.6s;
    }
  }
  .skillselected {
    background-color: #aab7c7;
    box-shadow: 4px 4px 14px 4px #c7ced8;
    transform: translate(0, -5px);
    .skillname {
      color: #ffffff;
      //text-shadow: 2px 2px 2px #68757d, -2px -2px 2px #cadcea;
    }
    span:first-child {
      color: #ffffff70;
      //text-shadow: 0px 0px 0px #dfe6ee, 0px 0px 0px #1b2635, 0px 0px 0px #d0d6df;
      text-shadow: -1px -2px 2px #dfe6ee, 0px 0px 0px #1b2635,
        2px 2px 4px #d0d6df;
    }
    span:last-child {
      opacity: 0.6;
      color: #f1f7fb;
      text-shadow: none;
      filter: drop-shadow(-2px 2px 4px #919699);
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
    // background-image: url("../assets/images/zz.png");
    // background-size: 100%;
  }
}

/* 首页第5屏——文章推荐 */
.screen5 {
  //transform: scale(1.1);
  box-sizing: border-box;
  height: 850px;
  width: 100%;
  padding: 100px 0;
  margin: 0 auto;
  min-width: 1200px;
  background-color: @colorBk;
  h1 {
    color: @colorH1;
    width: 1200px;
    margin: 0 auto;
  }
}
.screen5-row1 {
  height: 240px;
  width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-evenly;
  align-items: center;
}
.screen5-row2 {
  padding: 100px 0;
  margin: 0 auto;
  height: 240px;
  width: 1200px;
  display: flex;
  flex-flow: row nowrap;
  align-content: flex-start;
  justify-content: space-evenly;
  align-items: center;
}
.echartgroup1 {
  height: 255px;
  width: 300px;
  overflow: hidden;
}
.chart-circular {
  position: absolute;
  z-index: 10;
  height: 280px;
  width: 280px;
  //border: 1px solid #000;
}
.chart-line {
  position: absolute;
  z-index: 9;
  height: 200px;
  width: 200px;
  margin: 40px;
  //border: 1px solid #000;
  border-radius: 50%;
  overflow: hidden;
}
.progress {
  height: 8px;
  width: 220px;
  box-shadow: inset 2px 2px 2px 0px #c2d2de, 0px 1px 2px 1px #bac3ca;
  display: flex;
  align-items: center;
  .nowprogress {
    height: 8px;
    background-image: radial-gradient(#eff7ff 30%, #ccd4dc);
    box-shadow: -1px 1px 4px 1px #9ba2ab;
    transition: all 2s;
  }
}
.screen5-row1-card {
  height: 255px;
  width: 300px;
  background: #e8edf3;
  border-radius: 24px 0 0 0;
  overflow: hidden;
  box-shadow: 4px 4px 10px 4px #d7dde4, -4px -4px 10px 4px #fff;
  .screen5-row1-card-header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    overflow: hidden;
    box-shadow: 2px 2px 10px 4px rgb(206, 206, 206), -2px -2px 4px 4px #fff;
    span {
      position: relative;
      z-index: 11;
      display: block;
      width: 70px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 1.4rem;
      background: #5b8fd5;
      box-shadow: 2px 0px 10px 0px #5f5f5f;
    }
    h4 {
      width: 230px;
      line-height: 50px;
      text-align: center;
      font-size: 1.6rem;
      background: #85a4cd;
    }
  }
  .screen5-row1-card-info {
    box-sizing: border-box;
    height: 205px;
    padding: 2rem 3rem;
    color: #4c5568;
    p:first-child {
      font-weight: bolder;
      span:first-child {
        font-size: 2.4rem;
        margin-right: 0.5rem;
      }
      span:last-child {
        font-size: 1.5rem;
      }
    }
    p:nth-child(2) {
      color: #848484;
      padding: 0.4rem 0 1.4rem 0;
    }
  }
}
.screen5-row2-card {
  height: 255px;
  width: 300px;
  //border: 1px solid #000;
  border-radius: 4px;
  box-shadow: 4px 4px 10px 4px #d7dde4, -4px -4px 4px 2px #fff;
  .screen5-row2-card-header {
    height: 70px;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    background-color: #d9dee4;
    border-radius: 4px;
    box-shadow: 4px 4px 6px 0px #cecece, -2px -2px 4px 0px #fff;
    span {
      position: absolute;
      padding: 15px;
      border-radius: 50%;
      font-size: 50px;
      background-color: #e8edf3;
      margin: -25px 0 0 -25px;
      color: #ffffff29;
      text-shadow: 1px 3px 2px #dfe6ee, 0px 0px 0px #ffffff, 4px 2px 4px #95979a;
      box-shadow: 4px 4px 8px 2px #c2c3c3, -2px -2px 8px 4px #fff;
    }
    h4 {
      width: 300px;
      color: #4141415e;
      text-align: center;
      font-size: 20px;
      line-height: 70px;
      text-shadow: 1px 3px 6px #e8edf3, 0 0 0 #414141, 1px 3px 6px #e8edf3;
    }
  }
  .screen5-row2-card-content {
    box-sizing: border-box;
    width: 300px;
    height: 150px;
    padding: 30px;
    line-height: 28px;
    font-size: 14px;
    text-align: justify;
    color: #9da1a7;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
}
/* 首页第6屏——娱乐领域 */
.screen6 {
  box-sizing: border-box;
  height: 750px;
  width: 1200px;
  min-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
  background-color: @colorBk;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: space-evenly;
  align-items: flex-end;
}
.screen6-theme {
  height: 500px;
  width: 270px;
  .screen6-theme-title {
    box-sizing: border-box;
    position: absolute;
    z-index: 10;
    width: 270px;
    height: 70px;
    background-color: #e8edf3;
    border-radius: 8px;
    box-shadow: inset 2px -2px 4px #d8e1e6, -2px 2px 4px #d8e1e6,
      inset -2px 2px 4px #fafcff, 2px -2px 4px #fffefd;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding-left: 1rem;
    span {
      font-size: 3rem;
      text-shadow: 0px 0px 9px #dfe6ee, 0px 0px 0px #000000, 2px 2px 4px #d0d6df;
      color: #fff0;
    }
    h1 {
      margin-left: 1rem;
      color: fade(@colorH1, 40%);
      text-shadow: 2px 3px 4px #e8edf3, 0 0 0 #5d676b, 2px 2px 4px #ffffff;
    }
  }
  .screen6-theme-content {
    box-sizing: border-box;
    //padding-top: 70px;
    padding: 70px 1rem;
    z-index: 9;
    position: absolute;
    width: 270px;
    height: 500px;
    background-color: #dbe0e7;
    background-image: linear-gradient(to bottom, #f3f7fb 20%, #e8edf3);
    border-radius: 10px;
    box-shadow: 2px 4px 8px #babfc5, -2px -4px 8px #ffffff;
    p {
      margin-top: 1rem;
      text-indent: 2rem;
      text-align: justify;
      color: #727272;
      font-size: 14px;
    }
  }
}
.screen6-card {
  position: relative;
  z-index: 10;
  width: 270px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 0px 0px 12px 4px #bdbc94;
  transition: all 0.5s;
  &:hover {
    transform: scale(0.98);
    box-shadow: 0px 0px 4px 2px #bdbc94;
  }
  .screen6-card-img {
    position: absolute;
    z-index: 9;
    width: 270px;
    height: 350px;
    background-size: 100%;
    background-position: bottom;
    background-repeat: no-repeat;
    background-position: top;
    background-image: url(../assets/images/bns.png);
  }
  .screen6-card-title {
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
    h4 {
      font-size: 32px;
      text-align: center;
      color: #47321921;
      line-height: 55px;
      text-shadow: 1px 3px 6px #f2f3e8, 0 0 0 #77703b, 1px 3px 6px #f3f2e8;
    }
  }
  .screen6-card-content {
    z-index: 9;
    position: absolute;
    width: 270px;
    height: 500px;
    border-radius: 10px;
    box-shadow: 2px 4px 8px #a9bace, -2px -4px 8px #ffffff;
    background-image: linear-gradient(to bottom, #e8edf3 50%, #f3da70);
    mask-image: url("../assets/images/tx.png");
    -webkit-mask-image: url("../assets/images/tx.png");
    p {
      position: absolute;
      bottom: 0px;
      text-indent: 2rem;
      text-align: justify;
      color: #bd9c40;
      font-size: 14px;
      padding: 2rem 1rem;
    }
  }
}
.screen6-card:nth-child(3) {
  box-shadow: 0px 0px 12px 4px #94b0bd;
  transition: all 0.5s;
  &:hover {
    transform: scale(0.98);
    box-shadow: 0px 0px 4px 2px #94b0bd;
  }
    .screen6-card-img {
    background-image: url(../assets/images/xiao.png);
  }
  .screen6-card-title {
    h4 {
      color: #324b5a44;
      text-shadow: 1px 3px 6px #e8edf3, 0 0 0 #23343f, 1px 3px 6px #e8edf3;
    }
    background-color: #e8edf3;
    border-radius: 50px;
    box-shadow: inset 2px -2px 2px #408e96, -1px 1px 2px #378a92,
      inset -2px 2px 2px #abe3e8, 1px -1px 2px #9ae3ea;
  }
  .screen6-card-content {
    box-shadow: 2px 4px 8px #a9bace, -2px -4px 8px #ffffff;
    background-image: linear-gradient(to bottom, #e8edf3 50%, #95f0ea);
    p {
      color: #66a0bb;
    }
  }
  .screen6-card-bottom {
    background-image: linear-gradient(to bottom, #e8edf3 20%, #59c1bb);
    mask-image: linear-gradient(359deg, black 40%, transparent);
    -webkit-mask-image: linear-gradient(359deg, black 40%, transparent);
  }
}
/* 首页第7屏——下载 */
.screen7 {
  height: 400px;
  width: 1200px;
  padding: 50px 0;
  margin: 0 auto;
  h1 {
    color: #505050;
    padding: 1rem 0;
  }
  p {
    color: #a7a7a7;
    //padding: 1rem 0;
  }
}
.screen7-row {
  margin-top: 50px;
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
  mask-image: linear-gradient(180deg, black, transparent);
  -webkit-mask-image: linear-gradient(180deg, black 50%, transparent);
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
.sort div {
  span:nth-child(1) {
    margin-right: 1.2rem;
    font-size: 4rem;
    font-weight: 400;
    color: #9aa4b5;
    text-shadow: 2px 2px 2px #646567, -2px -2px 2px #ffffff;
    font-family: sans-serif;
  }
  a:nth-child(2) {
    cursor: pointer;
    font-weight: normal;
    font-size: 2rem;
    color: #626e71;
    font-family: monospace;
    transition: all .5s;
    text-decoration: underline solid #93a4a800;
    &:hover{
      text-decoration: underline solid #93a4a8;
    }
  }
}
/* 首页第8屏——页脚 */
.screen8 {
  height: 350px;
  min-width: 1200px;
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
  border-bottom: 2px solid rgb(230, 238, 247);
}
.screen8-left {
  width: 320px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: #fff;
  .bottom-logo {
    width: 58px;
    height: 58px;
    a {
      display: block;
      box-sizing: border-box;
      padding: 4px;
      width: 58px;
      height: 58px;
      font-family: "Threadz";
      font-size: 36px;
      text-indent: 6px;
      line-height: 42px;
      color: #fff;
      border-radius: 50%;
      border: 4px solid;
      &:hover {
          color: #69cde6;
      }
    }
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
    &:hover {
      color: #69cde6;
    }
    a {
      color: #dee4ec;
      &:hover {
        color: #69cde6;
      }
    }
  }
}
.screen8-right {
  h3 {
    font-size: 2.4rem;
    color: #cbd3d8;
    margin-bottom: 2rem;
  }
}
.followul {
  width: 400px;
  height: 64px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  li {
    height: 64px;
    line-height: 64px;
    border-radius: 12px;
    transition: all .3s ease-out;
    &:hover {
      //transform: scale(0.95);
      .iconfont {
        box-shadow: -1px -1px 2px #c8cbcf, 1px 1px 4px #46494c,
          inset 1px 1px 2px 0px #fff;
        text-shadow: 1px 1px 1px #646567, -1px -1px 1px #ffffff;
      }
    }
  }
  .iconfont {
    font-size: 28px;
    padding: 16px;
    border-radius: 10px;
    background-color: #a1abb6;
    color: #dae0e8;
    box-shadow: -2px -2px 4px #c8cbcf, 2px 2px 8px #46494c,
      inset 0px 0px 2px 1px #fff;
    text-shadow: 2px 2px 2px #646567, -2px -2px 2px #ffffff;
    transition: all .3s ease-out;
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