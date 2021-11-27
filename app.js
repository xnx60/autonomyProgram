//app.js
App({
    onShareTimeline(res) {
        return {
            title: '心"零"奇旅'
        }
    },
    "enablePullDownRefresh": true,
    //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
    onLaunch: function(options) {
        // wx.cloud.init({
        //     env:'colloge-6gg62a34f9d19c18'
        // })
    },
    onShow: function(options) {

    },
    onHide: function() {

    },
    onError: function(msg) {

    },
    //options(path,query,isEntryPage)
    onPageNotFound: function(options) {

    }
});
  