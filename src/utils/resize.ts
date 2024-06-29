// (function init(screenRatioByDesign = 16 / 9) {
//   // 获取html根元素
//   let docEle = document.documentElement;
//   function setHtmlFontSize() {
//     // 获取屏幕的 宽/高 比值
//     var screenRatio = docEle.clientWidth / docEle.clientHeight;
//     // 如果真实宽高比 大于 16/9
//     var fontSize =
//       ((screenRatio > screenRatioByDesign
//         ? screenRatioByDesign / screenRatio
//         : 1) *
//         docEle.clientWidth) /
//       10;
//     //
//     docEle.style.fontSize = fontSize.toFixed(3) + "px";
//     console.log(docEle.style.fontSize);
//   }
//   setHtmlFontSize();
//   window.addEventListener("resize", setHtmlFontSize);
// })();
(function () {
  function adjustFontSize() {
    const htmlEle = document.documentElement;
    const currWidth = htmlEle.clientWidth;
    // const currHeight = htmlEle.clientHeight;

    var minFontSize = 10;
    var middleFontSize = 16;
    var maxFontSize = 24;
    var minWidth = 720;
    const middleWidth = 1280;
    var maxWidth = 1920;
    var fontSize;
    // 映射窗口宽度到字体大小
    // 假设当窗口宽度为600px时，字体大小为12px
    // 当窗口宽度为1200px时，字体大小为24px
    if (currWidth <= minWidth) {
      htmlEle.style.fontSize = minFontSize + "px";
    } else if (currWidth >= maxWidth) {
      htmlEle.style.fontSize = maxFontSize + "px";
    } else if (middleWidth < currWidth && currWidth < maxWidth) {
      // 在1280和1920之间
      var scale = (currWidth - middleWidth) / (maxWidth - middleWidth);
      fontSize = middleFontSize + (maxFontSize - middleFontSize) * scale;
      htmlEle.style.fontSize = fontSize.toFixed(2) + "px";
    } else {
      // 在1280和720之间
      var scale = (currWidth - minWidth) / (middleWidth - minWidth);
      fontSize = minFontSize + (middleFontSize - minFontSize) * scale;
      htmlEle.style.fontSize = fontSize.toFixed(2) + "px";
    }
    console.log("即将改变大屏布局", fontSize);
  }

  // 初始调用以及窗口大小变化时调用
  adjustFontSize();
  window.addEventListener("resize", adjustFontSize);
})();
