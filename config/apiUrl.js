let isOnline = true
// let ipUrl = isOnline? 'http://leezhenwang.website' : 'http://127.0.0.1:7001' //本地 线上ip：http://129.204.206.80:7001
// let ipUrl = 'http://129.204.206.80:7001' //线上
let devUrl = isOnline ? 'http://leezhenwang.website' : 'http://127.0.0.1:7001'
console.log(process.env.NODE_ENV)
let url = process.env.NODE_ENV === 'production' ? 'http://leezhenwang.website' : devUrl // 线上ip：http://129.204.206.80:7001
let servicePath = {
  getArticleList: url + '/default/getArticleList' ,  //  首页文章列表接口
  getArticleById: url + '/default/getArticleById',  // 文章详细页内容接口 ,需要接收参数
  getTypeInfo: url + '/default/getTypeInfo',// 类别名称和编号
  getListById: url + '/default/getListById',
  addVisitNum: url + '/default/addVisitNum',
  addArticleReadTime: url + '/default/addArticleReadTime',
}
export default servicePath;