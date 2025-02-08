import Head from 'next/head'
import './index.css'
import './index.scss'
import {message, Affix } from 'antd'
import Header from '../component/header/header'
import { Fragment } from 'react'
import React,{useState} from 'react'
import Link from "next/link";
import axios from 'axios'
import Author from '../component/author/author'
import { Spin, Space} from 'antd';
import ArticleList from '../component/articleList/articleList'
import Footer from '../component/footer/footer'
import { RightOutlined } from '@ant-design/icons';
import  servicePath  from '../config/apiUrl'//引入servicePath
import { useRouter } from 'next/router';

const Home = (list) => {
  const router = useRouter();
  const [ mylist , setMylist ] = useState(//括号里面时mylist的默认值
    // [
    // ]
    list.data
  )
  // console.log(list)
  const [learnList,setLearnList] = useState([
    {title: "React学习路线",descr: "基础到实践", id: 22},
    {title: "Vue2.x学习路线",descr: "基础到实践", id: 23},
    // {title: "Flutter学习路线",descr: "基础到实践"},
  ])
  const [top,setTop] = useState(45);
  const [isShowSpin,setIsShowSpin] = useState(false)
  const handleSpin = (isShow)=>{
    setIsShowSpin(isShow)
  }
  const showMessage = (item) => {
    console.log('Item:', item); // 输出完整的 item 对象
    if (item && item.id) {
      router.push(`/detailed?id=${item.id}`);
    } else {
      message.info('敬请期待');
      console.error('Item id is undefined');
    }
  }

  return (
    <Fragment>
      <Head>
        <title>博客首页</title>
      </Head>
      <Header />
      {/* <div className="home">首页</div>
      <Button>这是首页button</Button> */}
      <div className="blog-container">
        <div className="blog-left">
          <p className="blog-title">最新日志</p>
          <ArticleList mylist={mylist} handleSpin={handleSpin}/>
        </div>
        <div className="blog-right">
          <Author/>
          <Affix offsetTop={top}>
            <div className="learn-container">
              <p className="learn-title">学习路线</p>
              {learnList.map((item,index)=>
                <div key={index} className="learn-item" onClick={()=>showMessage(item)}>
                  <span className="learn-item-title">{item.title}</span>
                  <span className="learn-item-descr">{item.descr}</span>
                  <span className="learn-item-arrow"><RightOutlined /></span>
                </div>
              )}
            </div>
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
Home.getInitialProps = async ()=>{
  const promise = new Promise((resolve,reject)=>{
    axios.get(servicePath.getArticleList).then(res=>{
      resolve(res.data)
    }).catch(err=>{
      // console.log(err)
    })
  })
  return await promise
}
export default Home;