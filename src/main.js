
import { banner } from './banner.js'
import { banner2 } from './banner2.js'
import App from './app.vue' // 根vue文件
import Vue from 'vue' // 引入vue.js对象
new Vue({ 
    render: h => h(App) // 渲染函数, 渲染App组件里的标签
  }).$mount('#app') // 把vue文件的标签结构 -> 挂载到id为app的标签里
banner()
banner2()

import '../src/styles/index.css'
import '../src/styles/index.less'

import './styles/index.css'
import './styles/index.less'

// 以原生js的方式创建并将图片插入到DOM中

// 1. 引入图片
//  - 引入的是图片的src属性值
import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'

// 2. 创建img节点
const gif = document.createElement('img')
const png = document.createElement('img')

// 3. 设置src属性
gif.src = gifSrc
png.src = pngSrc

// 4. 插入dom
document.body.appendChild(gif)
document.body.appendChild(png)


import "./assets/fonts/iconfont.css"


const test = () => console.log('hello')
console.log(test) // 这里一定打印函数

