// pages/layout/launch/index.js
Page({
// 页面的生命周期函数
  // onLoad(){
  //   console.log("onLoad,page页面被加载!")
  // },
  // onShow(){
  //   console.log("onShow,page页面显示")
  // },
  // onReady(){
  //   console.log("onShow,page页面初次渲染")
  // },
  // onHide() {
  //   // 页面通过navigateTo,跳转时触发
  //   console.log("onHide,page页面隐藏")
  // },
  // onUnload(){
  //   // 页面通过重定向redirectTo,跳转时触发
  //   console.log("onHide,page页面卸载")
  // },

  //  绑定事件
  handleTap() {
    wx.navigateTo({
      url: '/pages/layout/main/index'
    })
  }
})