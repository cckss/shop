// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 控制购物车是否显示为空
    show:false,
    // 存放购物车数据
    carList:[],
    allPrice:0
  },

  // 计算价格
  computed(){
    let price = 0
    for (let index = 0; index < this.data.carList.length; index++) {

      if(this.data.carList[index].checked){
        price += Number(this.data.carList[index].price) * this.data.carList[index].num
      }
    }
    console.log("price",price);
    // 赋值
    this.setData({
      allPrice:price
    })
  },

  changeCk(e){
    console.log(e.currentTarget.dataset.index);
    let index = e.currentTarget.dataset.index
    // 修改data里面的carList
    this.data.carList[index].checked = !this.data.carList[index].checked
    this.setData({
      carList:this.data.carList
    })
    wx.setStorageSync('carList', this.data.carList)
    //修改抽选后我们需要的重新修改价格
    this.computed()
  },

  // 修改数量
  add(e){
    let index = e.currentTarget.dataset.index

    this.data.carList[index].num += 1
    // 微信小程序修改值一定要用this.setData
    this.setData({
      carList:this.data.carList
    })

    wx.setStorageSync('carList', this.data.carList)
    // 修改值后重新计算价格
    this.computed();
  },
  jian(e){
    let index = e.currentTarget.dataset.index

    if(this.data.carList[index].num==1){
      wx.showToast({
        title: '客官不能再少了',
        icon:"error"
      })
      return
    }
    this.data.carList[index].num -= 1;
    // 微信小程序修改值一定要用this.setData
    this.setData({
      carList:this.data.carList
    })     
    // 修改值后重新计算价格

    wx.setStorageSync('carList', this.data.carList)
    this.computed();
  },
// 删除购物车数据
  delete(e){
    let index = e.currentTarget.dataset.index
    console.log(12345);
    this.data.carList.splice(index,1)
    console.log(this.data.carList);
    this.setData({
      carList:this.data.carList
    })
    wx.setStorageSync('carList', this.data.carList)
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
 // 这里面获取购物车的数据
  let car  = wx.getStorageSync('carList');
  console.log(car);

  // 判断购物车存不存在
  if(car){
    // 存在时执行
    this.setData({
      show:true,
      carList:car
      
    })
  }else{
    // 不存在时执行
    this.setData({
      show:false
    })
  }
  this.computed()
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