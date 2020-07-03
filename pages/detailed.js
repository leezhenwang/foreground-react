import React,{useState, Fragment} from 'react';
import Head from 'next/head'
import Header from '../component/header/header'
import Author from '../component/author/author'
import Footer from './../component/footer/footer';
import './detailed.scss'
import { Breadcrumb } from 'antd';
import { CalendarOutlined,FireOutlined,FolderOutlined } from '@ant-design/icons';

const Detailed = ()=>{
  return (
    <Fragment>
      <Head>
        <title>博客详情页</title>
      </Head>
      <Header/>
      <div className="blog-container">
        <div className="blog-left">
          <div className="breadcrumb-container">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>视频教程</Breadcrumb.Item>
              <Breadcrumb.Item>Vue.js3.x最新基础免费视频教程-无收费有辅导</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <p className="detail-title">Vue.js3.x最新基础免费视频教程-无收费有辅导</p>
          <div className="detail-show">
            <div className="show-item"><CalendarOutlined />2020-04-22</div>
            <div className="show-item"><FolderOutlined />视频教程</div>
            <div className="show-item"><FireOutlined />13788</div>
          </div>
          <img src={require('../static/img/index/next_blog.jpg')} alt="文章图片" className="article-img"/>
          <p className="article-introduce">
            尤大在2020年4月17日凌晨4点更新了Vue3.0 Beta 版。
            技术胖一直在等待和关注这个版本，现在终于等来了，所以决定第一时间跟大家分享学习过程和感受。
            希望小伙伴们喜欢。这也算是Vue3.x版本比较早的教程了，最关键的是这一切都是免费的。
          </p>
          <div className="detailed-content">
            详细内容，下次编写
          </div>
        </div>
        <div className="blog-right"></div>
      </div>
    </Fragment>
  )
}
export default Detailed;