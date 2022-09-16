---
sidebarDepth: 3
---

# Promise的特点

`Promise` 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。

(1) `Promise`有三种状态：`pending`（进行中）、`fulfilled`（已成功）和`rejected`（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。

(2) 一旦状态改变，就不会再变，任何时候都可以得到这个结果。`Promise`对象的状态改变，只有两种可能：从`pending`变为`fulfilled`和从`pending`变为`rejected`。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 `resolved`（已定型）。

Promise构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。

```JavaScript
new Promise((resolve, reject) => {
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
})
```

## then方法

promise 的 then 方法接受两个参数, 分别指定`resolved`状态和`rejected`状态的回调函数，

```
promise.then(onFulfilled, onRejected)
```

`then`方法返回的是一个新的Promise实例。

## catch方法

`catch`是`.then(null, rejection)`或`.then(undefined, rejection)`的别名，用于指定发生错误时的回调函数。

```JavaScript
promise.catch(function(error) {
  console.log(error);
});
```

::: tip
Promise 在resolve语句后面，再抛出错误，不会被捕获，等于没有抛出。因为 Promise 的状态一旦改变，就永久保持该状态，不会再变了。
```JavaScript
const promise = new Promise(function(resolve, reject) {
  resolve('ok');
  throw new Error('test');
});
promise
  .then(function(value) { console.log(value) })
  .catch(function(error) { console.log(error) });
// ok
```
:::

## finally方法

`finally()`方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。

```JavaScript
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```
上面代码中，不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数。

## Promise.all()

`Promise.all()`方法用于将多个Promise实例，包装成一个新的Promise实例，主要用于需要依赖多个异步操作结果的场景。

```JavaScript
const p1 = new Promise();
const p2 = new Promise();
const p3 = new Promise();
const p = Promise.all([p1, p2, p3]);
```

（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

## Promise.race()

Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。

```JavaScript
const p1 = new Promise((resolve, reject) => {
  resolve()
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('err2')), 1000)
});
const p = Promise.race([p1, p2]);
```
和all()方法不同，race()方法返回的状态是和第一个变化的promise状态相同。

## Promise.allSettled()

`Promise.allSettled()`方法接受一个数组作为参数，数组的每个成员都是一个 Promise 对象，并返回一个新的 Promise 对象。只有等到参数数组的所有 Promise 对象都发生状态变更（不管是fulfilled还是rejected），返回的 Promise 对象才会发生状态变更。

`Promise.allSettled()`方法的状态总是`fulfilled`。

## Promise.any()
ES2021 引入了`Promise.any()`方法。该方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例返回。
只要参数实例有一个变成`fulfilled`状态，包装实例就会变成`fulfilled`状态；如果所有参数实例都变成`rejected`状态，包装实例就会变成`rejected`状态。

## Promise.resolve()

将现有对象转换为Promise对象, 状态是`fulfilled`。

```JavaScript
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))
```

## Promise.reject()
将现有对象转换为Promise对象, 状态是`rejected`。

## Promise.try()

实际开发中，经常遇到一种情况：不知道或者不想区分，函数f是同步函数还是异步操作，但是想用 Promise 来处理它。因为这样就可以不管f是否包含异步操作，都用then方法指定下一步流程，用catch方法处理f抛出的错误。一般就会采用下面的写法。

```JavaScript
Promise.resolve().then(f)
```

上面的写法有一个缺点，就是如果f是同步函数，那么它会在本轮事件循环的末尾执行。

为了让同步函数同步执行，异步函数异步执行，所以提供了`Promise.try()`。

# 手动实现一个Promise

```JavaScript

// 创建构造函数


```

#### 参考链接

[阮一峰的Promise](https://es6.ruanyifeng.com/#docs/promise)    