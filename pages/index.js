import Head from 'next/head'
import './index.css'
import './index.scss'
import {Button} from 'antd'
import Header from '../component/header/header'
import { Fragment } from 'react'
import React,{useState} from 'react'
export default function Home() {
  const [ mylist , setMylist ] = useState(//括号里面时mylist的默认值
    [
      {title:'50元加入小密圈 胖哥带你学一年',context:'50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。'},
      {title:'React实战视频教程-技术胖Blog开发(更新04集)',context:'50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。'},
      {title:'React服务端渲染框架Next.js入门(共12集)',context:'50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。'},
      {title:'React Hooks 免费视频教程(共11集)',context:'50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。'},
    ]
  )
  const [learnList,setLearnList] = useState([
    {title: "React学习路线",descr: "基础到实践"},
    {title: "Vue2.x学习路线",descr: "基础到实践"},
    {title: "Flutter学习路线",descr: "基础到实践"},
  ])
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      {/* <div className="home">首页</div>
      <Button>这是首页button</Button> */}
      <div className="blog-container">
        <div className="blog-left">
          <p className="blog-title">最新日志</p>
          <ul className="latestLog-list">
            {mylist.map((item,index)=>
              <li className="latestLog-list-item" key={index}>
                <p className="item-title">
                  <a>{item.title}</a>
                </p>
                <div className="show-list">
                  <div className="show-item">2020-04-22</div>
                  <div className="show-item">视频教程</div>
                  <div className="show-item show-item-hot">13225&nbsp;人</div>
                </div>
                {/* <div className="img-contianer" style={{background: `url('${require('../static/img/index/next_blog.jpg')}')`,width: 100, height: 100}}></div> */}
                <img src={require('../static/img/index/next_blog.jpg')} alt="文章图片" className="article-img"/>
                <p className="item-detail">
                  {item.context}
                </p>
                <div className="item-more"><a>查看更多</a></div>
              </li>
            )}
          </ul>
        </div>
        <div className="blog-right">
          <div className="personal-container">
            <div className="img-box">
              <div className="blog-avatar" style={{backgroundImage: `url('${require('../static/img/index/dinosaur.jpg')}')`}}></div>
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
              <div style={{width: 100, height: 100}}></div>
            </div>
          </div>
          <div className="learn-container">
            <p className="learn-title">学习路线</p>
            {learnList.map((item,index)=>
              <div key={index} className="learn-item">
                <span className="learn-item-title">{item.title}</span>
                <span className="learn-item-descr">{item.descr}</span>
                <span className="learn-item-arrow"></span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="footer-div">
        <div>系统由 React+Node+Ant Desgin驱动 </div>
        <div>JSPang.com</div>
      </div>
    </Fragment>
  )
}
