// components/product/product.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    product:{
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toHome(e){
      console.log(e);
      console.log("我被点击了");
      this.triggerEvent('myevent', e.currentTarget.dataset.id)
    }
  }
})
