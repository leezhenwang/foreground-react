import './author.scss'
import { GithubOutlined } from '@ant-design/icons';
import { Tooltip, Avatar } from 'antd'
import Link from "next/link";
const Author = ()=>{
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
      <span className="tag-icon blue">2年经验</span>
      <span className="tag-icon green">业余讲师</span>
      <span className="tag-icon geekblue">被访问1111次</span>
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