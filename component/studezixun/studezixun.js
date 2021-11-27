// component/studezixun/studezixun.js
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
    studyinf:[{
      title: '转计院？寒假应该怎么准备',
      writer: '本人当初填报志愿时被调剂到环材生化专业，经过一年努力终于转到计算机学院。如今正逢转专业时期，撰写此文，希望对想转专业，尤其是转CS（computer science）的同学有所帮助',
      ren:'12',
      time:'2020-11-06',
      studyimg: ' https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=290732496,3415342260&fm=26&gp=0.jpg'
    },{
      title: '大学生『创新创业』赛事经验及心得分享',
      ren:'52',
      time:'2021-01-06',
      writer: '《大学生创新创业赛事经验及心得分享》内容来自“我爱竞赛网”的讲座 主要内容针对我们国内大学里面含金量最高的 三个高校创新创业类比赛“互联网+、创青春、挑战杯”围绕 “创业赛事的准备到答辩整个环节” 给大家做一下比较系统的分享~',
      studyimg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181108%2Fcdfdf22aeba6450581387ab3d5afa5f4.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616848975&t=63aeb0738ec6523e9f7488aa2035e623'
    },{
      title: '建筑er考研|调剂流程专场',
      ren:'5',
      time:'2021-08-26',
            writer: '或许，上帝为我们关上了一扇门，也打开了一扇窗。只要你想要上进，哪里都是学习的圣地。为了更好地帮助大家，',
      studyimg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile.23kaoyan.com%2Fkaoshijingyan%2F2017-04-12%2Faa80087efef92334f0efe88eb34d7c08.png&refer=http%3A%2F%2Ffile.23kaoyan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616849447&t=d2666feddacb363e38a2e25f12294c09'
    },
    {
      title: '想出国留学？你需要知道的政策',
      ren:'15',
      time:'2020-10-21',
      writer: '申请出国留学需要哪些条件?很多家长都希望将自己的孩子送出国深造，但是具体不知道申请出国需要满足哪些条件。',
      studyimg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1939590187,375604911&fm=26&gp=0.jpg'
    }],

    cominf:[{
      title: '第七届“i创杯”互联网创新创业大赛',
      writer: '江苏省工业和信息化厅',
      time:'2021.06.30',
      time2:'待定',
      studyimg: 'http://www.iiec.org.cn/upload/202104/51cb0dc20b8d8511.jpg'
    },{
      title: '【重磅赛事】第七届中国国际“互联网+”大学生创新创业大赛',
      time:'2021.08.15',
      time2:'2021.06~2021.08',
      writer: '教育部 中央统战部 中央网络安全信息化委员会办公室 国家发展改革委 工业和信息化部 人力资源社会保障部 农业农村部 中国科学院',
      studyimg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwotu.busionline.com%2FUploads%2Fwotu%2Fnew%2F20181105%2F5be00b6c66bde.png&refer=http%3A%2F%2Fwotu.busionline.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623423947&t=d20ce1d0c9d0a1a2ca137e2f0e92ce52'
    },{
      title: '第七届两岸新锐设计竞赛·华灿奖',
      ren:'5',
      time:'2021.08.15',
      time2:'2021.06~2021.08',
            writer: '中国高等教育学会 中华中山文化交流协会 北京歌华文化发展集团',
      studyimg: 'http://cdn1.52jingsai.com/portal/202104/26/172747xcoejexjcnvxnpwz.jpg'
    },
    {
      title: '第九届大学生新媒体创意大赛',
      time:' 2021.06.15',
      time2:'2021.10-10',
      writer: '中国编辑学会 韬奋基金会 中国报业协会',
      studyimg: 'http://cdn1.52jingsai.com/portal/202103/12/165336t4i6wizxkk4x543c.png'
    },
    {
      title: '2021全球开放数据应用创新大赛',
      time:' 2021.06.30',
      time2:'2021.07-15',
      writer: '广东省政务服务数据管理局 深圳市人民政府',
      studyimg: '//files.sodic.com.cn/uploads/fb037004-a437-40df-aaed-b742ae1b7eac.jpg'
    }],
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
