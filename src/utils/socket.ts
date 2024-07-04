export default class SocketService {
  // webSocket实例对象
  private wss: any;
  // 后端socket 服务地址
  private socketUrl: string;
  // 存储回调函数
  private callbackFnMap: { [type: string]: Function };
  // 消息队列
  private sendQueue;
  // 是否正在尝试连接
  private isConnecting;
  // 重试间隔，单位毫秒
  private retryDelay;
  // 重试次数
  private retryCount;
  // 最大重试次数
  private maxRetryCount;
  /**
   * 单例设计模式
   */
  static instance: any;
  static get Instance() {
    if (!this.instance) {
      this.instance = new SocketService();
    }
    return this.instance;
  }
  private constructor() {
    this.wss = null;
    this.socketUrl = "ws://localhost:3002";
    this.callbackFnMap = {};
    this.sendQueue = []; // 消息队列
    this.isConnecting = false; // 是否正在尝试连接
    this.retryDelay = 3000; // 重试间隔，单位毫秒
    this.retryCount = 0; // 重试次数
    this.maxRetryCount = 5; // 最大重试次数
  }
  /**
   * 连接服务器
   */
  connect() {
    if (!window.WebSocket) {
      console.log("浏览器不支持Socket");
      return;
    }
    this.wss = new WebSocket(this.socketUrl);
    this.wss.onopen = () => {
      console.log("连接服务端成功");
      // 连接成功立即清空队列
      this.flushQueue();
    };
    this.wss.onclose = () => {
      console.log("与服务端断开连接");
    };
    this.wss.onmessage = (msg: any) => {
      const resData = JSON.parse(msg.data);
      const { dataType } = resData;
      this.callbackFnMap[dataType].call(this, resData.data);
    };
  }
  /**
   * 注册Callback
   */
  registerCallback(dataType: string, callback: Function) {
    this.callbackFnMap[dataType] = callback;
  }
  /**
   * 清除注册的Callback
   */
  unRegisterCallback(dataType: string) {
    this.callbackFnMap[dataType] = null;
  }
  /**
   * 发送数据
   */
  send(data: any) {
    if (this.wss && this.wss.readyState === WebSocket.OPEN) {
      this.wss.send(JSON.stringify(data));
    } else {
      // 未成功发送的数据进入队列中
      this.enqueueMessage(data);
    }
  }
  /**
   *暂存未成功发送的数据
   */
  enqueueMessage(message: any) {
    this.sendQueue.push(message);
  }
  /**
   * 清空消息队列
   */
  flushQueue() {
    while (this.sendQueue.length > 0) {
      const message = this.sendQueue.shift(); // 移除并返回队列中的第一个元素
      this.send(message);
    }
  }
}
