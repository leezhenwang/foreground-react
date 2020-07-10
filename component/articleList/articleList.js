import './articleList.scss'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons';
import Link from "next/link";
const Author = (props)=>{
  const {mylist, noImage } = props
  return (
    <ul className="latestLog-list">
      {mylist && mylist.map((item,index)=>
        <li className="latestLog-list-item" key={index}>
          <p className="item-title">
            <Link href={{pathname:'/detailed',query:{id:item.articlId}}}>
              <a>{item.title}</a>
            </Link>
          </p>
          <div className="show-list">
            <div className="show-item"><CalendarOutlined/>{item.addTime}</div>
            <div className="show-item"><FolderOutlined/>{item.typeName}</div>
            <div className="show-item show-item-hot"><FireOutlined/>{item.view_count}&nbsp;人</div>
          </div>
          {/* <div className="img-contianer" style={{background: `url('${require('../static/img/index/next_blog.jpg')}')`,width: 100, height: 100}}></div> */}
          {!noImage &&<img src={require('../../static/img/index/next_blog.jpg')} alt="文章图片" className="article-img"/>}
          <p className="item-detail">
            {item.introduce}
          </p>
          <div className="item-more"><a>查看更多</a></div>
        </li>
      )}
    </ul>
  )
}
export default Author;