import './articleList.scss'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons';
import Link from "next/link";
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import { Fragment } from 'react';
const Author = (props)=>{
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,//必传
    gfm: true,//启动github样式的markdown
    pedantic: false,// 是否修正markdown的错误
    sanitize: false,//是否原始输出，忽略html文件
    tables: true,//是否支持github形式的表格
    breaks: false,//是否支持github换行符
    smartLists: true,// 是否优化列表输出
    smartypants: false,
    highlight: function (code) {//设置显示高亮
      return hljs.highlightAuto(code).value;
    }
  });
  const {mylist, noImage, handleSpin } = props
  return (
    <Fragment>
      {mylist && mylist.length > 0 ?
        <ul className="latestLog-list">
          {mylist.map((item,index)=><li className="latestLog-list-item" key={index}>
            <p className="item-title">
              <Link href={{pathname:'/detailed',query:{id:item.articleId}}}>
                <a onClick={()=>handleSpin(true)}>{item.title}</a>
              </Link>
            </p>
            <div className="show-list">
              <div className="show-item"><CalendarOutlined/>{item.addTime}</div>
              <div className="show-item"><FolderOutlined/>{item.typeName}</div>
              <div className="show-item show-item-hot"><FireOutlined/>{item.view_count}&nbsp;人</div>
            </div>
            {/* <div className="img-contianer" style={{background: `url('${require('../static/img/index/next_blog.jpg')}')`,width: 100, height: 100}}></div> */}
            {/* {!noImage &&<img src={require('../../static/img/index/next_blog.jpg')} alt="文章图片" className="article-img"/>} */}
            <div className="item-detail" 
              dangerouslySetInnerHTML={{__html:marked(item.introduce)}}
            >
              {/* {item.introduce} */}
            </div>
            <div className="item-more">
              <Link href={{pathname:'/detailed',query:{id:item.articleId}}}>
                <a onClick={()=>handleSpin(true)}>查看更多</a>
              </Link>
            </div>
          </li>
        )}
      </ul>
      : 
      <Fragment>
        <img className="nodata" src={require('../../static/img/articleList/nodata.png')} alt=""/>
        <p className="tip-word">博主正在编写...</p>
      </Fragment>}
    </Fragment>
  )
}
export default Author;