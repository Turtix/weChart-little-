// pages/layout/main+/index.js
const data = require("./data/data.js")
Page({
  data: {
    damu: "原来的值"
  },
  onLoad(){
    this.setData({
      // 相当于在上面的配置对象data中添加了一个属性data.不需要预先在data配置中定义.
      data,
      damu:"修改后的值"
    })
  },
  // 绑定事件
  handleTap(event){
    // 拿到传递过来的数据
    const listId = event.currentTarget.dataset.listId;
    wx.navigateTo({
      // 跳转到详情页面
      url: `/pages/layout/main/detail/index?id=${listId}`
    })
  }
  
})