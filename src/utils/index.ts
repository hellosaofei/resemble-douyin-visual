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

/**
 * 生成指定区间内的一个随机整数
 */
export function generateRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max < min) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 生成指定区间内的一个随机整数数组，可任意指定长度
 */
export function generateRandomIntArray(
  length: number,
  min: number = 300,
  max: number = 600
) {
  if (length <= 0 || !Number.isInteger(length)) {
    throw new Error("参数length的长度不能为0，且必须为整数");
  }
  const array = [];
  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    array.push(randomNum);
  }
  return array;
}
