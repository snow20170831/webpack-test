// import Header from './header';
// import Sidebar from './sidebar';
// import Content from './content';
// var Header = require('./header');
// var Sidebar = require('./sidebar');
// var Content = require('./Content');
// var avatar = require('./avatar.jpg');
// var css = require('./index.css');



// var btn = document.createElement('button');
// btn.innerHTML = '点击';
// document.body.appendChild(btn);
// btn.onclick = function () {
//   console.log('click');
//   var item = document.createElement('div');
//   item.innerHTML = 'item';
//   item.setAttribute('class', 'item');
//   document.body.appendChild(item);
// }




// var img = new Image();
// img.src = avatar;
// var dom = document.getElementById('wrapper');
// dom.appendChild(img);
// var div = document.createElement('div');
// div.innerHTML = "<div class='iconfont icon-shengdanmao'></div>";
// dom.appendChild(div);

// new Header();
// new Sidebar();
// new Content();



// var counter = require('./counter');
// var number = require('./number');
// import number from './number';

// counter();
// number();

// if (module.hot) {
//   module.hot.accept('./number', () => {
//     console.log(module.hot);
//     document.body.removeChild(document.getElementById('number'));
//     number('hot');
//   });
// }



// import "@babel/polyfill";

// const arr = [
//   new Promise(() => {}),
//   new Promise(() => {})
// ];

// arr.map((item) => {
//   console.log(item);
// });



// Tree Shaking
// import { add } from './math.js';
// add(1, 2);




// Code Splitting
/**
 * 第一种方式
 * 首次访问页面时，加载main.js (2mb)
 * 当页面业务逻辑发生变化时，又要加载2mb的内容
 *  */

 /**
 * 第二种方式
 * main.js被拆分成 lodash.js(1mb), main.js(1mb)
 * 当业务逻辑发生变化时，只要加载main.js即可 (1mb)
 * */

// // 同步加载
// import _ from 'lodash';

// // 业务逻辑1mb
// console.log(_.join(['a', 'b', 'c'], '***'));
// console.log(_.join(['a', 'b', 'd'], '***'));


 // 异步加载
 function getComponent() {
     return import('lodash').then(() => {
         var element = document.createElement('div');
         element.innerHTML = _.join(['code', 'splitting'], '-');
         return element;
     })
 }

 getComponent().then(element => {
     document.body.appendChild(element);
 })

 // 代码分割，和webpack无关
 // webpack中实现代码分割，两种方式
 // 1. 同步代码：只需要在webpack.common.js中做optimization的配置即可
 // 2. 异步代码（import）：异步代码，无需做任何配置，会自动进行代码分割，放置到新的文件中