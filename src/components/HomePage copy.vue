<template>
  <header class="header">
    <img class="logo" src="public/images/logo_z.png" alt="Monta" />
    <nav class="topNav">
      <router-link v-for="nav in topNav" :key="nav.en" :to="nav.url">{{
        nav.ch
      }}</router-link>
    </nav>
  </header>
  <section class="screen0">
    <div class="slogan">
      <h1>Dream<br />visualization</h1>
      <p>指引所有的梦，去到希望之地，然后见到它。</p>
      <div class="letsgo" @click="scrollNext(0)">现在出发↓</div>
    </div>
    <div class="elec1" :style="style1"></div>
    <div class="elec2" :style="style2"></div>
  </section>
  <section class="screen1" style="color: #fff">
    <!-- <button @click="suspendAnimation()" class="suspendbtn">暂停动画</button>
    <button @click="restartAnimation()">恢复动画</button>
    <div id="mathdiv">
      <div class="formula" v-for="(LaTexs, index) in LaTexsArr" :key="index">
        {{ LaTexs }}
      </div>
    </div> -->
  </section>
  <section class="screen2"></section>
  <!-- <section class="screen3"></section> -->
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  setup(props, context) {
    let topNav = reactive([
      { ch: "首页", en: "Home", url: "/" },
      { ch: "作品集锦", en: "Portfolio", url: "/portfolio" },
      { ch: "软件领域", en: "Software", url: "/software" },
      { ch: "硬件领域", en: "Hardware", url: "/hardware" },
      { ch: "娱乐天地", en: "Game", url: "/game" },
      { ch: "关于", en: "About", url: "/about" },
    ]);
    return { topNav };
  },
  data() {
    return {
      LaTexsArr: [
        "$$\\color{fuchsia}{text}x^2+3x-2=0$$",
        "$$\\color{aqua}{text}A_{u}= -g_{m}R_{D}^{`}$$",
        "$$\\color{red}{text}\\Gamma(z) = \\int_0^\\infty t{z-1}e{-t}dt,. $$",
        "$$\\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}dt\\,.$$",
        "$$\\sqrt[4]{\\frac xy}$$",
        `$$\\color{yellow}{text}
        f(n)
        \\begin{cases}
        \\cfrac n2, &if\ n\ is\ even\\\\
        3n + 1, &if\  n\ is\ odd
        \\end{cases}
        $$`,
        `$$
        \\begin{pmatrix}
        1&a_1&a_1^2&\\cdots&a_1^n\\\\
        1&a_2&a_2^2&\cdots&a_2^n\\\\
        \\vdots&\\vdots&\\vdots&\\ddots&\\vdots\\\\
        1&a_m&a_m^2&\\cdots&a_m^n\\\\
        \\end{pmatrix}$$
        `,
        "$\\vec{F}=m\\vec{a}$",
        "$e=mc^2$",
        "$\\vec{F}=m\\frac{d\\vec{v}}{dt}+\\vec{v}\\frac{dm}{dt}$",
        "$$\\lim_{x \\to infty} x^2_{22} - \\int_{1}^{5}x\\mathrm{d}x + \\sum_{n=1}^{20} n^{2} = \\prod_{j=1}^{3} y_{j}  + \\lim_{x \\to -2} \\frac{x-2}{x}$$",
        "$$ a_{ij}^{2} + b^3_{2}=x^{t} + y' + x''_{12} $$",
        "$$\\vec{a} + \\overrightarrow{AB} + \\overleftarrow{DE}$$",
        "$$\\alpha^{2} +\\beta =\\Theta$$",
        "$f(x) = a+b$",
        "$$ f(x) = a+b $$",
        "$$ a_{ij}^{2} + b^3_{2}=x^{t} + y' + x''_{12} $$",
        "$$\\sqrt{x} + sqrt{x^{2}+\\sqrt{y}} = \\sqrt[3]{k_{i}} - \\frac{x}{m}$$",
      ],
      runformulaAnimate: false,
      scrollY: null,
      style1:
        "-webkit-mask :linear-gradient(200deg, transparent 40%,rgb(0, 0, 0));",
      style2:
        "-webkit-mask :linear-gradient(40deg, transparent 40%,rgb(0, 0, 0));",
    };
  },
  methods: {
    scrollNext(n) {
      if (n) scrollTo(n * innerHeight);
      else scrollTo(0, innerHeight);
    },
    formulaAnimate(el, xyz) {
      let zBegin = -100,
        zEnd = 100; //z轴变换数值
      let dz = zBegin;
      if (xyz[2]) dz = xyz[2]; //元素初始z值
      const step = () => {
        if (!this.runformulaAnimate) return;
        else if (dz < zEnd) {
          dz++;
          //el.style.transform=`translate3D(0,${40-40*Math.cos(dz/100*Math.PI)}px,${dz}px)`
          el.style.transform = `translate3D(0,0,${dz}px)`; //y轴没有初始配置时会抖动
          el.style.filter = `blur(${1 - Math.cos((dz / 100) * Math.PI)}px)`;
          requestAnimationFrame(step);
        } else {
          let w = innerWidth,
            h = innerHeight;
          el.style.transform = `translate3D(0,0px,${zBegin}px)`;
          el.style.marginLeft = `${Math.random() * w}px`;
          el.style.marginTop = `${Math.random() * h}px`;
          el.style.filter = `blur(${1}px)`;
          this.formulaAnimate(el, zBegin);
        }
      };
      requestAnimationFrame(step);
    },
    suspendAnimation() {
      if (this.runformulaAnimate) {
        this.runformulaAnimate = false;
      }
    },
    restartAnimation() {
      if (!this.runformulaAnimate) {
        this.runformulaAnimate = true;
        let znow = "";
        let mathdiv = document.getElementById("mathdiv");
        let formulas = mathdiv.getElementsByClassName("formula");
        for (let formula of formulas) {
          znow = formula.style.transform;
          znow = znow.slice(znow.indexOf("(") + 1, znow.lastIndexOf(")"));
          znow = znow.split(",");
          znow.forEach((d, i) => {
            znow[i] = parseFloat(d);
          });
          this.formulaAnimate(formula, znow);
        }
      }
    },
  },
  mounted() {
    let w = innerWidth,
      h = innerHeight,
      zStart = 0;
    let mathdiv = document.getElementById("mathdiv");
    let formulas = mathdiv.getElementsByClassName("formula");
    for (let formula of formulas) {
      zStart = Math.random() * 200 - 100;
      formula.style.marginLeft = `${Math.random() * w}px`;
      formula.style.marginTop = `${Math.random() * h}px`;
      formula.style.transform = `translate3D(0,0px,${zStart}px)`;
      this.formulaAnimate(formula, [0, 0, zStart]);
    }
    window.addEventListener("scroll", () => {
      this.scrollY =
        document.documentElement.scrollTop || document.body.scrollTop;
      //console.log(document.documentElement.scrollTop || document.body.scrollTop)
    });
  },
  watch: {
    scrollY(scroll) {
      let w = innerWidth,
        h = innerHeight;
      if (scroll > 0 && scroll < h) {
        this.style1 = `-webkit-mask :linear-gradient(${
          200 + 200 * (scroll / h)
        }deg, transparent 40%,rgb(0, 0, 0));`;
        this.style2 = `-webkit-mask :linear-gradient(${
          40 - 40 * (scroll / h)
        }deg, transparent 40%,rgb(0, 0, 0));`;
      }
    },
  },
});
</script>

<style lang="less">
html,
body {
  scroll-behavior: smooth;
}
body {
  font-family: "Microsoft YaHei";
  margin: 0;
  padding: 0;
}
a {
  &:link {
    color: #fff;
    text-decoration: none;
  }
  &:visited {
    color: #fff;
    text-decoration: none;
  }
  &:hover {
    color: #fff;
    text-decoration: none;
  }
  &:active {
    color: #fff;
    text-decoration: none;
  }
}

.header {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 8vh;
  padding: 0 1rem;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: #0000002f;
  border-bottom: 1px solid #5f84b1a6;
}
.logo {
  display: block;
  width: calc(548px / 3);
  height: calc(103px / 3);
}
.topNav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  a {
    display: block;
    box-sizing: border-box;
    width: 120px;
    line-height: 8vh;
    text-align: center;
    font-size: 14px;
    transition: all 0.4s;
    &:hover {
      color: rgb(231, 248, 255);
      background-color: rgb(58, 216, 255);
      //box-shadow: 0 4px 4px rgb(180, 234, 255);
    }
  }
}

.screen0 {
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  color: #fff;
  perspective: 400px;
  perspective-origin: top;
  //background-color: #000;
  //   height: 100vh;
  background-image: url("public/images/fj.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  .slogan {
    height: 92vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
    h1 {
      margin: 0;
      font-size: 6rem;
      text-align: center;
      text-shadow: 0 0 20px #08ddff;
    }
    p {
      margin: 4rem;
      font-size: 1.6rem;
      font-family: cursive;
    }
    .letsgo {
      padding: 1rem 1.5rem;
      border: 1px solid rgb(175, 232, 255);
      background: #74f1f121;
      cursor: pointer;
      transition: all 0.4s;
      &:hover {
        background: #74f1f193;
      }
    }
  }
  // .elec1 {
  //   z-index: -2;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width:100%;
  //   height: 100vh;
  //   //border: 2px solid rgb(95, 243, 248);
  //   //transform: rotateX(45deg);
  //   background-image: url("public/images/bk12.jpg");
  //   background-size: cover;
  //   background-repeat: no-repeat;
  //   background-position: center;
  //   background-attachment: fixed;
  //   // mask: url('public/images/mask1.png');
  //   // filter: blur(1px);
  //    -webkit-mask :linear-gradient(200deg, transparent 40%,rgb(0, 0, 0));
  //    -webkit-mask-size: cover;
  //   opacity: 0.4;
  // }
  // .elec2 {
  //   z-index: -2;
  //   position: absolute;
  //   top: 0;
  //   left:00vw;
  //   width:100%;
  //   height: 100vh;
  //   //border: 2px solid rgb(95, 243, 248);
  //   //transform: rotateX(45deg);
  //   background-image: url("public/images/c.png");
  //   background-size: cover;
  //   background-repeat: no-repeat;
  //   background-position: center;
  //   background-attachment: fixed;
  //   //mask: radial-gradient(rgba(0,0,0,1) 15vw, rgba(0,0,0,0) 25vw);
  //   -webkit-mask : linear-gradient(40deg, transparent 40%,rgb(0, 0, 0));
  //   -webkit-mask-size: cover;
  //   opacity: 0.4;
  // }
}

.screen1 {
  // position: absolute;
  // z-index: 0;
  // top: 0;
  // left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: url("public/images/wl1.jpg");
  perspective: 100px;

  background-color: #000;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  #mathdiv {
    width: 100%;
    height: 100vh;
  }
}

.formula {
  z-index: -1;
  position: absolute;
}

.screen2 {
  background-color: #000;
  box-sizing: border-box;
  height: 100vh;
  //background-image: url("public/images/bk5.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}
.screen3 {
  box-sizing: border-box;
  height: 100vh;
  //background-image: url("public/images/bk1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
