export function debounce(fn: Function, delay: number) {
  let timer = null;
  return function () {
    if (timer != null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.call(this); //call改变了调用fn函数的对象，不使用call，由window对象调用，使用call则由DOM元素调用该函数，this指向也就是DOM元素
    }, delay);
  };
}
