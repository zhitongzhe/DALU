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
      { 
        url: '../../img/img.jpg', text: '美甲', 
      item: [{ name: '美甲1', price: 120, free: 160,img:'../../img/img.jpg' },
       { name: '美甲2', price: 120, free: 160,img:'../../img/img.jpg' },
       { name: '美甲3', price: 120, free: 160,img:'../../img/img.jpg' },
       { name: '美甲4', price: 120, free: 160,img:'../../img/img.jpg' }] },
      {
        url: '../../img/img.jpg', text: '美睫',
        item: [{ name: '美甲1', price: 120, free: 160, img: '../../img/img.jpg' },
        { name: '美甲2', price: 120, free: 160, img: '../../img/img.jpg' },
        { name: '美甲3', price: 120, free: 160, img: '../../img/img.jpg' },
        { name: '美甲4', price: 120, free: 160, img: '../../img/img.jpg' }]
         },
      { url: '../../img/img.jpg', text: '美发',
      item: [{ name: '美甲1', price: 120, free: 160, img: '../../img/img.jpg' },
        { name: '美甲2', price: 120, free: 160, img: '../../img/img.jpg' },
        { name: '美甲3', price: 120, free: 160, img: '../../img/img.jpg' },
        { name: '美甲4', price: 120, free: 160, img: '../../img/img.jpg' }] },
      { url: '../../img/img.jpg', text: '美容',
        item: [{ name: '美甲1', price: 120, free: 160, img: '../../img/img.jpg' },
        { name: '美甲2', price: 120, free: 160, img: '../../img/img.jpg' },
        { name: '美甲3', price: 120, free: 160, img: '../../img/img.jpg' },
        { name: '美甲4', price: 120, free: 160, img: '../../img/img.jpg' }]},
    ]
  },
})
