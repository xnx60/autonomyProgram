// component/newspy/newspy.js
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
  items:[
    {
      // 导航名称
      text: '大一',
      // 该导航下所有的可选项
   
    },
    {
      // 导航名称
      text: '大二',
      // 该导航下所有的可选项
   
    },
    {
      // 导航名称
      text: '大三',
      // 该导航下所有的可选项
   
    },
    {
      // 导航名称
      text: '大四',
      // 该导航下所有的可选项
   
    },
  ],
  currentIndex:0
  },
 

  /**
   * 组件的方法列表
   */
  methods: {
    onClickNav(e) {
     console.log(e.detail.index);
     this.setData({
      currentIndex:e.detail.index
     })
    },
//     texttwo(){
// wx.navigateTo({
//   url: '../../pages/bind/bind',
// })
//     },
    textone(e){
    
      wx.navigateTo({
        url: '../../pages/articleheart/articleheart',
      })
      }
  }
})
