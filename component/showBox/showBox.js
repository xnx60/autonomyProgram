// component/showBox/showBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
jump(){
wx.navigateTo({
  url: '../../pages/aidadetail/aidadetail?type=0',
})
},
jump1(){
  wx.navigateTo({
    url: '../../pages/aidadetail/aidadetail?type=1',
  })
},
jump2(){
  wx.navigateTo({
    url: '../../pages/aidadetail/aidadetail?type=2',
  })
},
jump3(){
  wx.navigateTo({
    url: '../../pages/aidadetail/aidadetail?type=3',
  })
}
  }
})
