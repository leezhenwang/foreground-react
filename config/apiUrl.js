let isOnline = false
let ipUrl = isOnline? 'http://129.204.206.80:7001' : 'http://127.0.0.1:7001' //本地
// let ipUrl = 'http://129.204.206.80:7001' //线上
let url = isOnline ? 'http://129.204.206.80:7001' : 'http://127.0.0.1:7001'
let servicePath = {
  getArticleList: ipUrl + '/default/getArticleList' ,  //  首页文章列表接口
  getArticleById: url + '/default/getArticleById',  // 文章详细页内容接口 ,需要接收参数
  getTypeInfo: url + '/default/getTypeInfo',// 类别名称和编号
  getListById: url + '/default/getListById',
}
export default servicePath;