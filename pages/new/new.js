
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
var util_2 = require("../../utils/util");
Page({
    data: {
        id: '',
        time: '',
        title: '',
        content: '',
        memoListData: [],
        isEdit: false
    },
    onLoad: function () {
        this.setData({
            time: util_1.formatTime(new Date(), "-")
        });
        try {
            var memoListData = wx.getStorageSync('memoListData');
            if (memoListData) {
                this.setData({
                    memoListData: memoListData
                });
            }
        }
        catch (e) { }
    },
    onPullDownRefresh: function () {
        wx.stopPullDownRefresh({
            success: function () {
            }
        });
    },
    onShow: function () {
      console.log(this.data.isEdit);
        try {
            var isEdit = wx.getStorageSync('isEdit');
            var memoListData = wx.getStorageSync('memoListData');
            if (isEdit) {
                wx.setNavigationBarTitle({
                    title: '备忘录 - 编辑'
                });
                if (memoListData) {
                    var id = wx.getStorageSync('id');
                    for (var i = 0; i < memoListData.length; i++) {
                        if (memoListData[i].id == id) {
                            this.setData({
                                id: id,
                                time: util_1.formatTime(new Date(), "-"),
                                title: memoListData[i].title,
                                content: memoListData[i].content,
                                memoListData: memoListData,
                                isEdit: true
                            });
                            break;
                        }
                    }
                }
                ;
                // wx.setTabBarItem({
                //     index: 1,
                //     text: '编辑',
                //     iconPath: 'assets/imgs/tabBarEdit.png',
                //     selectedIconPath: 'assets/imgs/tabBarEditSelected.png'
                // });
            }
            else {
                wx.setNavigationBarTitle({
                    title: '备忘录 - 新建'
                });
                this.setData({
                    id: '',
                    time: util_1.formatTime(new Date(), "-"),
                    title: '',
                    content: '',
                    memoListData: memoListData ? memoListData : [],
                    isEdit: false
                });
                // wx.setTabBarItem({
                //     index: 1,
                //     text: '新建',
                //     iconPath: 'assets/imgs/tabBarNew.png',
                //     selectedIconPath: 'assets/imgs/tabBarNewSelected.png'
                // });
            }
        }
        catch (e) { }
    },
    // onHide: function () {
    //     try {
    //         wx.setTabBarItem({
    //             index: 1,
    //             text: '新建',
    //             iconPath: 'assets/imgs/tabBarNew.png',
    //             selectedIconPath: 'assets/imgs/tabBarNewSelected.png'
    //         });
    //     }
    //     catch (e) { }
    // },
    memoTitle: function (e) {
        this.setData({
            title: e.detail.value
        });
    },
    memoContent: function (e) {
        this.setData({
            content: e.detail.value
        });
    },
    cancel: function () {
        try {
            this.setData({
                id: '',
                time: '',
                title: '',
                content: '',
                memoListData: []
            });
            wx.setStorageSync('isEdit', false);
            this.data.isEdit = false;
    
       
            wx.navigateBack({
                delta: 1,
              });
        }
        catch (e) { }
    },
    deleteModal: function () {
        var that = this;
        wx.showModal({
            title: '删除提示',
            content: '是否确定删除该备忘录！',
            success: function (res) {
                if (res.confirm) {
                    that.delete();
                }
                else if (res.cancel) {
                }
            }
        });
    },
    delete: function () {
        var _this = this;
        if (this.data.id != "") {
            try {
                if (this.data.memoListData != null) {
                    var index = this.data.memoListData.findIndex(function (item) { return item.id == _this.data.id; });
                    this.data.memoListData.splice(index, 1);
                    wx.setStorageSync('memoListData', this.data.memoListData);
                    if (this.data.memoListData.length == 0) {
                        wx.clearStorageSync();
                    }
                    wx.showToast({
                        title: '删除成功',
                        icon: 'success',
                        duration: 1000
                    });
                    setTimeout(function () {                    
                        wx.navigateBack({
                            delta: 1,
                          })
                    }, 800);
                }
            }
            catch (e) { }
        }
    },
    save: function () {
        var id = this.data.id ? this.data.id : util_2.randomNumber();
        var time = this.data.time;
        var title = this.data.title;
        var content = this.data.content;
        if (title == '') {
            wx.showToast({
                title: '请输入标题',
                icon: 'none',
                duration: 1000
            });
        }
        else {
            if (this.data.id != '') {
                for (var i = 0; i < this.data.memoListData.length; i++) {
                    if (this.data.memoListData[i].id == id) {
                        this.data.memoListData[i].id = id;
                        this.data.memoListData[i].time = time;
                        this.data.memoListData[i].title = title;
                        this.data.memoListData[i].content = content;
                        break;
                    }
                }
            }
            else {
                this.data.memoListData.unshift({
                    'id': id,
                    "time": time,
                    "title": title,
                    "content": content
                });
            }
            try {
                wx.setStorageSync('memoListData', this.data.memoListData);
                wx.showToast({
                    title: '保存成功',
                    icon: 'success',
                    duration: 1000
                });
                setTimeout(function () {
                    wx.navigateBack({
                        delta: 1,
                      })
                }, 800);
       

            }
            catch (e) {
                wx.showToast({
                    title: "保存失败，请稍后再试！",
                    icon: 'none',
                    duration: 2000
                });
            }
        }
    }
});