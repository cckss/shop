// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[],
    menus:[],
    productList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  this.getIndex()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("我的页面渲染完成了")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
//当页面进来的时候
console.log("我又进来了");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("我又出去了，来打我啊");
  },

getIndex(){
  //请求数据代码
  var that=this;
  console.log("外面面的this",this);
  wx.request({
     //接口地址
    url: 'http://47.115.51.185/api/index', //仅为示例，并非真实的接口地址
    //data是传递参数
    // data: {
    //   x: '',
    //   y: ''
    // },
    header: {
      'content-type': 'application/json' // 默认值
    },
    //请求成功的时候执行的代码
    success (res) {
      console.log("里面的this",this);
      console.log(res.data)
      that.setData({
        banner:res.data.data.banner,
        menus:res.data.data.menus,
        productList:res.data.data.info.firstList
      })
      console.log(that.data.productList);
    }
  })
},
  /**
   * 生命周期函数--监听页面卸载
   */
  toDetail(e){
    console.log("e",e.detail);
    //跳转页面
    wx.navigateTo({
      //url跳转的路径
      url: '../detail/detail?id='+e.detail
    })
  },

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