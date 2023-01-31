// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"靓仔",
    condition:false,
    arr:[
      {name:"小红",age:18},
      {name:"小明",age:18},
      {name:"小黄",age:18},
      {name:"小黑",age:18},
    ]
  },
// 方法名字（）小括号是传递参数{}大括号作用是放被点击时候触发的代码
showName(e){
  console.log(e);
  console.log("我被点击了");
  //给data里面修改或赋值
  this.setData({
    //!取反 ！true=false
    condition:!this.data.condition
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})