const statusMap = new Map();

// 创建Promise类
class Promise {

  // 进行中
  static PENDING = 'pending';
  // 完成
  static FULFILLED = 'fulfilled';
  // 失败
  static REJECTED = 'rejected';

  /**
   * 
   * @param {Function} executor 执行函数
   */
  constructor(executor) {
    // Promise的状态
    this.status = Promise.PENDING;
    // 成功回调函数
    this.resolvedCallback = [];
    // 失败回调函数
    this.rejectedCallback = [];
    // promise传递到下面的值，用于链式操作
    this.data = undefined;
    try {
      executor(this.handleResolve.bind(this), this.handleReject.bind(this));
    } catch(e) {
      // 捕获执行函数错误
      this.reject(e);
    }
  }

  handleResolve(value) {
    if (this.status === Promise.PENDING) {
      this.status = Promise.FULFILLED;
      this.data = value;
      console.log(this.resolvedCallback)
      for (const cb of this.resolvedCallback) {
        setTimeout(() => {
          cb(value)
        })
      }
    }
  }

  handleReject(value) {
    if (this.status === Promise.PENDING) {
      this.status = Promise.REJECTED;
      this.data = value;
      for (const cb of this.rejectedCallback) {
        cb(value)
      }
    }
  }

  then(fulfilled, rejected) {
    return new Promise((resolve, reject) => {
      console.log(1)
      switch(this.status) {
        case [Promise.PENDING]:
          this.resolvedCallback.push(fulfilled);
          this.rejectedCallback.push(rejected);
          break;
        case [Promise.FULFILLED]: 
          break;
        case [Promise.REJECTED]: 
        break;
      }
    })
  }
}

const p = new Promise((resolve, reject) => {
  resolve(1);
}).then(res => {
  console.log(res)
})