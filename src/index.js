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
import { add } from './math.js';
add(1, 2);
