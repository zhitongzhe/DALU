//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../img/1.png',
      '../../img/1.png',
      '../../img/1.png',      
    ],
    indicatorDots: true,
    autoplay: true,
    circular:true,
    interval: 3000,
    duration: 500,
    itemlist: [
      { url: '../../img/3.png', text: 1 },
      { url: '../../img/3.png', text: 2 },
      { url: '../../img/3.png', text: 3 },
      { url: '../../img/3.png', text: 4 },
    ]
  },
})
