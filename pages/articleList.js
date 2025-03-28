import Head from 'next/head'
import Header from '../component/header/header'
import React,{useState,useEffect, Fragment} from 'react'
import Link from "next/link";
import axios from 'axios'
import Author from '../component/author/author'
import ArticleList from '../component/articleList/articleList'
import Footer from '../component/footer/footer'
import { Breadcrumb, Affix, Space, Spin } from 'antd'
import  servicePath  from '../config/apiUrl'//引入servicePath
const Home = (props) => {
  const [ mylist , setMylist ] = useState(//括号里面时mylist的默认值
    // [
    //   {title:'React Hooks 免费视频教程(共11集)',introduce:'掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。'},
    // ]
    // props.data
    []
  )
  useEffect(()=>{
    // alert(props.data)
    setMylist(props.data)
  },[props.id])//仅仅当路由上的参数变化再更新页面
  const [top,setTop] = useState(60);
  const [isShowSpin,setIsShowSpin] = useState(false)
  const handleSpin = (isShow)=>{
    setIsShowSpin(isShow)
  }
  return (
    <Fragment>
      <Head>
        <title>文章列表页</title>
      </Head>
      <Header />
      {/* <div className="home">首页</div>
      <Button>这是首页button</Button> */}
      <div className="blog-container">
        <div className="blog-left">
          <div className="breadcrumb-container">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>文章列表</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <p className="blog-title">最新日志</p>
          <ArticleList mylist={mylist} noImage={true} handleSpin={handleSpin}/>
        </div>
        <div className="blog-right">
          <Affix offsetTop={top}>
            <Author/>
          </Affix>
        </div>
      </div>
      <Footer/>
      {isShowSpin && <Space size="middle">
        <Spin size="large" tip="加载中..."/>
      </Space>}
    </Fragment>
  )
}
Home.getInitialProps = async (context)=>{
  const promise = new Promise((resolve,reject)=>{
    let id = context.query.id//获取路由上的id
    axios(`${servicePath.getListById}?id=${id}`).then(res=>{
      resolve({...res.data,id})
    }).catch(err=>{
      // console.log(err)
    })
  })
  return await promise
}
export default Home;