const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 后台可以少存一个数据  而且 可以不做average --> stars的转换
const getStarsArrByAverage = (average,length)=>{
    // (7.5-7.9   8-8.4 ) 4*
    // (8.5-8.9   9-9.4)  4.5*
   
    const result = [];
    const score = Math.floor(average*2)/4;  // 9.6有bug
    //score   1  1.5  2
    const ONMuns = Math.floor(score)
    const hasDian = (score%1 !== 0)
    
    for (let i = 0; i < ONMuns;i++){
      result.push("/pages/layout/movies/img/stars/star24_on@2x.png");
    }
    if (hasDian){
      result.push("/pages/layout/movies/img/stars/star24_half@2x.png");
    }
    const size = result.length; // 凝固变量!!
    for(let i=0;i<(length-size);i++){
      result.push("/pages/layout/movies/img/stars/star24_off@2x.png");
    }
   
    return result;
}

// 后台必须要做 average --> stars的转换
const getStarsArrByStars = (score, length)=>{
  const result=[]
  score = score/10;
  const ONMuns = Math.floor(score) 
  const hasDian = (score % 1 !== 0)  


  for (let i = 0; i < ONMuns; i++) {
    result.push("/pages/layout/movies/img/stars/star24_on@2x.png");
  }
  if (hasDian) {
    result.push("/pages/layout/movies/img/stars/star24_half@2x.png");
  }
  
  while (result.length < length){
    result.push("/pages/layout/movies/img/stars/star24_off@2x.png");
  }
  // const size = result.length; // 凝固变量!!
  // for (let i = 0; i < (length - size); i++) {
  //   result.push("off");
  // }
  return result;
}

// 获取电影信息数据
const getMovieDatas = (url,acllBack, type) =>{
    const that = this;
    wx.request({
      url,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(res.data)
        acllBack(res.data.subjects,type)
      }
    })
}

module.exports = {
  formatTime: formatTime,
  getStarsArrByAverage,
  getStarsArrByStars,
  getMovieDatas
}
