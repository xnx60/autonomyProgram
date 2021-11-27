// component/studydetail/studydetail.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
num:{
    type:String,
    value:' '
}
    },

    /**
     * 组件的初始数据
     */
    data: {
        material: [{
            title: '同济版高等数学（第七版上）习题详解',
            writer: '同济大学数学系',
            out: '高等教育出版社',
            studyimg: ' https://bkimg.cdn.bcebos.com/pic/a50f4bfbfbedab643d90d10efa36afc378311e19?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto'
        }, {
            title: '有机化学（第五版）习题答案',
            writer: '天津大学有机化学教研室',
            out: '高等教育出版社',
            studyimg: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4191724192,1670134742&fm=26&gp=0.jpg'
        }, {
            title: 'C语言程序设计（第四版）',
            writer: '谭浩强',
            out: '清华大学出版社',
            studyimg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg10.360buyimg.com%2Fimgzone%2Fjfs%2Ft16324%2F201%2F1285122274%2F431001%2F98f6f05e%2F5a506e3aNf992f34e.jpg&refer=http%3A%2F%2Fimg10.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616685149&t=9a8c027652d6b746ebeb6235d3bf7cac'
        }, {
            title: '电工学·电工技术（第七版）上',
            writer: '秦曾煌',
            out: '高等教育出版社',
            studyimg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2425701821,887074334&fm=26&gp=0.jpg'
        },
        {
            title: '考研|工程数学 线性代数（第六版）复习题',
            writer: '同济大学数学系',
            out: '高等教育出版社',
            studyimg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3m1.ddimg.cn%2F65%2F36%2F1057437281-1_u_2.jpg&refer=http%3A%2F%2Fimg3m1.ddimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616686137&t=fdb06d2851d4d6aad064937fb72d7f6f'
        }],

        qandanswer: [{
            question: 'How can I map an array of properties to a Bar with that properties in recharts?',
            num: '164',
            huida: '27',
            time: '5小时前'
        }, {
            question: '请问数字逻辑实验的步骤是什么？',
            num: '416',
            huida: '39',
            time: '8小时前'
        }, {
                question: '请问有没有兄弟姐妹们知道建筑快题的正确打开方式？',
            num: '223',
            huida: '5',
            time: '1天前'
        },
        {
            question: '跪求大佬分享一下怎样学好大学英语？',
            num: '824',
            huida: '65',
            time: '1天前'
        }]
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
