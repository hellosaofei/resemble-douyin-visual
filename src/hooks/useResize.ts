export default function () {
  const handleScreenResize = (selector) => {
    const designDraftWidth = 1920; //设计稿的宽度
    const designDraftHeight = 960; //设计稿的高度
    // 需要缩放的宽度
    const scaleX = innerWidth / designDraftWidth;
    // 需要缩放的高度
    const scaleY = innerHeight / designDraftHeight;
    // 最终缩放
    const scale = Math.min(scaleX, scaleY);

    // 拿到元素
    const el = document.querySelector(selector);
    // el?.style.transformOrigin = "top left";
    // el?.style.transition = "transform 1s";
    const left = (innerWidth - designDraftWidth * scale) / 2;
    const top = (innerHeight - designDraftHeight * scale) / 2;
    el.style.transform = `translate(${left}px,${top}px) scale(${scale},${scale})`;
  };

  const debounce = (fn: Function, delay: number) => {
    let timer: any;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, arguments);
      }, delay);
    };
  };
  return { handleScreenResize, debounce };
}
