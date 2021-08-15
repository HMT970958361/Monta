
MathJax = {
        showProcessingMessages: false, //关闭js加载过程信息
        messageStyle: "none", //不显示信息
        jax: ["input/TeX", "output/HTML-CSS"],
        tex: {
            inlineMath: [["$", "$"], ["\\(", "\\)"]], //行内公式选择符
            displayMath: [["$$", "$$"], ["\\[", "\\]"]], //段内公式选择符
            skipTags: ["script", "noscript", "style", "textarea", "pre", "code", "a"] //避开某些标签
        },
        "HTML-CSS": {
            availableFonts: ["STIX", "TeX"], //可选字体
            showMathMenu: true //关闭右击菜单显示
        }
};
(function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    script.async = true;
    document.head.appendChild(script);
  })();