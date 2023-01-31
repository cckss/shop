// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  // 存放详情数据
  allProduct:{
    //产品信息
    description:"",
    //原来的价格
    ot_price:"",
    //打折后的价格
    price:"",
    //标题
    store_info:"",
    //轮播图数据
    slider_image:"",
    // 一个变量控制，购物车的勾选情况
    checked:true,
    // 变量控制值
    num:1,
    // id用来判断商品标识
    id:''
  },
  // 购物车数量
  carNum:0
  },

  //数据请求
  getDetail(id){
  var that = this;
  wx.request({
    url: `http://47.115.51.185/api/product/detail/${id}`,
    header:{
      'content-type':'multipart/form-data'
    },
    success(res){
      console.log(res.data)
      //对应的数据赋值
      that.setData({
         //产品信息
    "allProduct.description":res.data.data.storeInfo.description,
    //原来的价格
    "allProduct.ot_price":res.data.data.storeInfo.ot_price,
    //打折后的价格
    "allProduct.price":res.data.data.storeInfo.price,
    //标题
    "allProduct.store_info":res.data.data.storeInfo.store_name,
    //轮播图数据
    "allProduct.slider_image":res.data.data.storeInfo.slider_image
      })
    }
  })
  },
  // 加入购物车
  addCar(){
  // wx.showToast({
  // title:'加入购物车成功',
  // })
  // 提示加入购物车已存在
  // wx.showToast({
  //   title: '商品已存在',
  //   // 控制显示图标（不写就显示默认）
  //   icon:"error",
  //   // 控制显示时间
  //   duration:1000
  // })

  // 存放到本地存储的代码
  //data是要存的数据
  // wx.setStorageSync('carlis', data)
  // 当前商品数据
  let nowCar = this.data.allProduct;
  // 取出本地存储的数据
  let car = wx.getStorageSync('carList');

    console.log(car);
    // if到购物车数据存在的时候
    if(car){
    console.log("购物车存在时输出");

    // 定义一个下表 判断该产品是否已经存在购物车里面
    let index = car.findIndex((item)=>{
      // 把给商品的id和购物车数据里面id进行匹配，判断是否存在
      return  nowCar.id == item.id
    })

    // 如果index是—1的时候存在，大于-1不存在
    if(index>-1){
      // 表示购物车存在该商品
      car[index].num +=1;
      // 同时提示用户，商品已经存在
      wx.showToast({
        title: '商品已存在',
        icon:"error"
      })
    }else{
      //不存在
      //把现在的商品数据放入购物车数组里面
      car.push(nowCar)
      wx.showToast({
        title: '加入购物车成功'
      })
    }
    // 把处理好数据重新存放到本地数组里面
    wx.setStorageSync('carList', car)
      // else到购物车数据不存在的时候
    }else{
    console.log("购物车不存在时输出");
    wx.setStorageSync('carList', [nowCar])
    wx.showToast({
    title:'加入购物车成功',
    })
    }
    
    this.setData({
      carNum:wx.getStorageSync('carList').length
    })
  },
  toCar(){
    // wx.navigateTo({
    //   url: '../car/car',
    // })
    wx.switchTab({
      url: '../car/car'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("options",options);
    this.getDetail(options.id);
    // 设置商品数的id
    this.setData({
      "allProduct.id":options.id
    })
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
    // 获取本地数据
    this.setData({
      carNum:wx.getStorageSync('carList').length
    })
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