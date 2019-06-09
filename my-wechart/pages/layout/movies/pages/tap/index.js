// pages/layout/movies/tap/index.js
// 得到App.js中的数据   基础url常量
const app = getApp()
const util = require('../../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (query) {
    // 用来接收其他页面传递过来的数据
    const type = query.type;
    wx.setNavigationBarTitle({
      // 设置当前页面导航标题
      title: type
    })
    // 根据判断点击的是哪个分类的详情  发送不同的请求   并展示不同的数据到页面上
    let typeUrl = '';
    switch(type){
      case "正在热映":
        typeUrl = `${app.globalData.baseUrl}/in_theaters`;
        break;
      case "即将上映":
        typeUrl = `${app.globalData.baseUrl}/coming_soon`;
        break;
      case "豆瓣top250":
        typeUrl = `${app.globalData.baseUrl}/top250`;
        break;
    }
    // 发送请求获取数据
    util.getMovieDatas(typeUrl, this.arrangeData)
  },

  
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  // 获取到的电影数据进行提取
  arrangeData(subjects) {
    const arrangeArr = subjects.map((item) => {
      return {
        title: item.title,
        postImgUrl: item.images.large,
        score: item.rating.average,
        // stars: item.rating.average
        stars: util.getStarsArrByAverage(item.rating.average, 5)
      }
    })
    // debugger
    this.setData({
      //在原数组后面要添加数据  函数里面使用data里面的数据xxx,都要用this.data.xxx
      movies: arrangeArr
    })
  },


})