// component/anim.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
icon1:{
  type:String,
  value:''
},
icon2:{
  type:String,
  value:''
}
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false, //是否已经弹出
    animMain: {}, //旋转动画
    anim1: {},
    anim2: {},
    imgs: {
    icon3:'../../iconimage/add1.png'
    }, //图片
    },
    // 在组件实例进入页面节点树时执行
    attached: function() {
    //在进入页面的弹出动画
    this.takeback();
    this.setData({
    isShow: false
    })
    },
    /**
    * 组件的方法列表
    */
    methods: {
    //点击弹出或者收起
    showOrHide: function() {
    if (this.data.isShow) {
    //缩回动画
    this.takeback();
    this.setData({
    isShow: false
    })
    } else {
    //弹出动画
    this.popp();
    this.setData({
    isShow: true
    })
    }
    },
    
    icon1: function() {
      this.triggerEvent("icon1Event")
      this.showOrHide()
      },
      icon2: function() {
      this.triggerEvent("icon2Event")
      this.showOrHide()
      },
      
      //弹出动画
      popp: function() {
      //main按钮顺时针旋转
      var animationMain = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
      })
      var animationDelLots = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
      })
      var animationAdd = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
      })
      // 位置
      animationMain.rotateZ(-45).step();
      animationDelLots.translate(-45, -30).rotate(-0).opacity(1).step(); //item位移, 透明度
      animationAdd.translate(-40, 40).rotate(0).opacity(1).step();//item位移, 透明度
      this.setData({
      animMain: animationMain.export(),
      anim1: animationDelLots.export(),
      anim2: animationAdd.export(),
      })
      },
      //收回动画
      takeback: function() {
      //main按钮逆时针旋转
      var animationMain = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
      })
      var animationDelLots = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
      })
      var animationAdd = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
      })
      animationMain.rotateZ(90).step();
      animationDelLots.translate(0, 0).rotateZ(0).opacity(0).step();
      animationAdd.translate(0, 0).rotateZ(0).opacity(0).step();
      this.setData({
      animMain: animationMain.export(),
      anim1: animationDelLots.export(),
      anim2: animationAdd.export(),
      })
      }
      },
      //解决滚动穿透问题
      myCatchTouch: function() {
      return
      }
})
