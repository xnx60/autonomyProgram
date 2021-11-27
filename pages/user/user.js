// pages/user/user.js
var userInfo = {}
Page({
  onShareAppMessage: function (res) {
    return {
      title:'个人中心'
    }
  },
  // 番茄时钟记录
  census(){
  wx.navigateTo({
    url: '../tomatoresult/tomatoresult',
  })
  },
  
  onShareTimeline(res){
    return{
      title:'心"零"奇旅'
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途
      success: (res) => {
        userInfo=res.userInfo,
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
        wx.setStorageSync("userinfo", userInfo);
        console.log(userInfo);
        // const {userInfo} =   userInfo;
        // wx.setStorageSync("userinfo", userInfo);
      }
    })
  },
  
  no_login(){
    if(this.data.hasUserInfo){
wx.showModal({
  title:'您确定要退出吗',
  success:(res) => {
    if(res.confirm){
 this.setData({
  hasUserInfo: false,
 }),
//  wx.setStorageSync("userinfo", null);
wx.removeStorage({
  key: 'userinfo',
  success (res) {
    console.log(res)
  }
})
}
    }
})
    }
    else{
      wx.showToast({
        title: '您还没登陆',
        icon: 'none',
        duration: 1000
      })
    }
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const userinfo=wx.getStorageSync("userinfo");
    const collect=wx.getStorageSync("collect")||[];   
    this.setData({userinfo,collectNums:collect.length});
    let user =  wx.getStorageSync('userinfo');
    if(user){
    this.setData({
      userInfo: user,
      hasUserInfo: true
    });
    }
    console.log(user);

    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }


  },


})