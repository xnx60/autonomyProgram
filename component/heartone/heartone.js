// component/heartone/heartone.js
Component({
    pageLifetimes: {
        show: function () {
            // 页面被展示
            // console.log(this.indexmy);
        }
    },
    /**,
     * 组件的属性列表
     */
    properties: {
        indexmy: {
            type: String,
            vaule: ""
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        currentIndex: 0,
        qandanswer:[{
            question:'请问今年有签华为或腾讯前端开发的师兄师姐吗，师弟想问问这样的大公司对笔试的要求是什么？',
            num:'216',
            huida:'46',
            time:'15分钟前'
        },{
            question:'请问面试官提问如果回答不上来怎么办？',
            num:'716',
            huida:'75',
                time:'1小时前'
        },{
            question:'请问师兄师姐面试试题的构成形式大体如何？',
            num:'623',
            huida:'45',
            time:'2小时前'
        }]
    },
    /**
     * 组件的方法列表
     */
    methods: {
        job() {
            wx.navigateTo({
                url: '../../pages/jobdetail/jobdetail?photo=0',
            })
        }, job1() {
            wx.navigateTo({
                url: '../../pages/jobdetail/jobdetail?photo=1',
            })
        },
        job2() {
            wx.navigateTo({
                url: '../../pages/jobdetail/jobdetail?photo=2',
            })
        },
        answerzdetail(e){
            console.log(e);
        }
    }
})
