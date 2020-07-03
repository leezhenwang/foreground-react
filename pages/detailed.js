import React,{useState, Fragment} from 'react';
import Head from 'next/head'
import Header from '../component/header/header'
import Author from '../component/author/author'
import Footer from './../component/footer/footer';
import './detailed.scss'
import { Breadcrumb } from 'antd';
import { CalendarOutlined,FireOutlined,FolderOutlined } from '@ant-design/icons';
import marked from 'marked';
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css';

const Detailed = (props)=>{
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
  // let html = marked(props.article_content) //使用后台接口
  let markdown='# P01:课程介绍和环境搭建\n' + //暂时前端写死
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'
  let html = marked(markdown)
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
          <div className="detailed-content" dangerouslySetInnerHTML={{__html: html}}>
            {/* 详细内容，下次编写 */}
          </div>
        </div>
        <div className="blog-right"></div>
      </div>
    </Fragment>
  )
}
export default Detailed;