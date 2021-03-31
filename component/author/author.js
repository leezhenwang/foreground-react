import './author.scss'
import { GithubOutlined } from '@ant-design/icons';
import { Tooltip, Avatar } from 'antd'
import Link from "next/link";
import {useEffect,useContext} from 'react'
import { Context } from '../../pages/_app'
import axios from 'axios'
import  servicePath  from '../../config/apiUrl'
const Author = ()=>{
  const store = useContext(Context);//获取存储的值
  const { dispatch } = store
  // const [navArray, setNavArray] = useState([]);
  let visit_num = store.state.visit_num
  useEffect(()=>{
    const fetchData = async()=>{
      const result = await axios(servicePath.addVisitNum).then((res)=>{
        // console.log(res)
        return res.data.data
      })
      dispatch({
        type: 'setVisit_num',
        payload: result
      })
    }
    if(!store.state.visit_num){//未请求时
      fetchData()
    }
  },[])
  const linkClick = ()=>{
    window.open('https://github.com/leezhenwang');
  }
  return (
  <div className="personal-container">
    <div className="img-box">
      <div className="blog-avatar" style={{backgroundImage: `url('${require('../../static/img/index/dinosaur.jpg')}')`}}></div>
    </div>
    <p className="blog-nickname">小恐龙</p>
    <p className="blog-focus-text">专注于WEB和移动前端开发</p>
    <div className="blog-tags">
      <span className="tag-icon blue">2-3年经验</span>
      <span className="tag-icon green">业余讲师</span>
      <span className="tag-icon geekblue">被访问{visit_num}次</span>
      <span className="tag-icon blue">基金爱好者</span>
    </div>
    <div className="socialAccount"><span className="socialAccount-text">社交帐号</span></div>
    <div className="socialAccount-icons">
      <Tooltip title="https://github.com/leezhenwang">
        {/* <GithubOutlined onClick={linkClick}/> */}
        <Avatar size="large" icon={<GithubOutlined />} onClick={linkClick} />
      </Tooltip>
    </div>
  </div>
  )
}
export default Author;