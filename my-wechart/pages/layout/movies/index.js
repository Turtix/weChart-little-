// pages/layout/movies/index.js
const util = require('../../../utils/util.js') ;
const app = getApp()
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
  onLoad: function (options) {
    // 使用App.js中定义的全局常量
    const baseUrl = app.globalData.baseUrl;
    util.getMovieDatas(`${baseUrl}/in_theaters?start=0&count=3`, this.arrangeData,"正在热映");
    util.getMovieDatas(`${baseUrl}/coming_soon?start=0&count=3`,this.arrangeData, "即将上映");
    util.getMovieDatas(`${baseUrl}/top250?start=0&count=3`,this.arrangeData, "豆瓣top250");
  },
  // getMovieDatas(url,type) {
  //   const that = this;
  //   wx.request({
  //     url,
  //     header: {
  //       'content-type': 'application/json' // 默认值
  //     },
  //     success(res) {
  //       // console.log(res.data)
  //       that.arrangeData(res.data.subjects,type)
        
  //     }
  //   })
  // },
  arrangeData(subjects, type){
    const arrangeArr = subjects.map((item)=>{
      return {
        title: item.title,
        postImgUrl: item.images.large,
        score: item.rating.average,
        // stars: item.rating.average
        stars: util.getStarsArrByAverage(item.rating.average, 5)
      }
    })
    const data = {
      type:type,
      arrangeArr
    }
    // debugger
    this.setData({
      // 在原数组后面要添加数据  函数里面使用data里面的数据xxx,都要用this.data.xxx
      movies: [...this.data.movies, data]
    })
  },
  // onReady(){
  //   console.log(this.data.movies)
  // }
  // 点击跳转到tap页面
  toTypeMore(event){
    // console.log(event)   用来wxml中的数据传给js.
    const type = event.currentTarget.dataset.type;
    wx.navigateTo({
      // 点击跳转到指定页面   用来将js中的数据通过路由传给其他页面.
      url: `/pages/layout/movies/pages/tap/index?type=${type}`
    })
  }
})