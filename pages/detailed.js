import React,{useState, useEffect, Fragment} from 'react';
import Head from 'next/head'
import Header from '../component/header/header'
import './detailed.scss'
import 'highlight.js/styles/monokai-sublime.css';
import Author from '../component/author/author'
import Footer from './../component/footer/footer';
import { Breadcrumb} from 'antd';
import { CalendarOutlined,FireOutlined,FolderOutlined } from '@ant-design/icons';
import marked from 'marked';
import hljs from 'highlight.js'
import {Anchor}  from 'antd';
import axios from 'axios'
import  servicePath  from '../config/apiUrl'//引入servicePath
const { Link } = Anchor;

const Detailed = (props)=>{
  const [top,setTop] = useState(45);
  const renderer = new marked.Renderer();
  let navArr = [];
  let index = 0;
  renderer.heading = function(text, level, raw) {//设置文章内的导航
    const anchorId = `toc${level}${++index}`;
    if(level === 1){//只筛选一级标题
      navArr = navArr.concat({
        title: text,
        anchorId,
      })
    } 
    return `<a id="${anchorId}" href="#${anchorId}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
  // console.log(navArr)
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
  // let markdown='# P01:课程介绍和环境搭建\n' + //暂时前端写死
  // '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  // '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
  //  '**这是加粗的文字**\n\n' +
  // '*这是倾斜的文字*`\n\n' +
  // '***这是斜体加粗的文字***\n\n' +
  // '~~这是加删除线的文字~~ \n\n'+
  // '\`console.log(111)\` \n\n'+
  // '# p02:来个Hello World 初始Vue3.0\n' +
  // '> aaaaaaaaa\n' +
  // '>> bbbbbbbbb\n' +
  // '>>> cccccccccc\n'+
  // '***\n\n\n' +
  // '# p03:Vue3.0基础知识讲解\n' +
  // '> aaaaaaaaa\n' +
  // '>> bbbbbbbbb\n' +
  // '>>> cccccccccc\n\n'+
  // '# p04:Vue3.0基础知识讲解\n' +
  // '> aaaaaaaaa\n' +
  // '>> bbbbbbbbb\n' +
  // '>>> cccccccccc\n\n'+
  // '# p05:Vue3.0基础知识讲解\n' +
  // '> aaaaaaaaa\n' +
  // '>> bbbbbbbbb\n' +
  // '>>> cccccccccc\n\n'+
  // '# p06:Vue3.0基础知识讲解\n' +
  // '> aaaaaaaaa\n' +
  // '>> bbbbbbbbb\n' +
  // '>>> cccccccccc\n\n'+
  // '# p07:Vue3.0基础知识讲解\n' +
  // '## p071:Vue3.0基础知识讲解\n' +
  // '## p072:Vue3.0基础知识讲解\n' +
  // '#### p07:Vue3.0基础知识讲解\n' +
  // '> aaaaaaaaa\n' +
  // '>> bbbbbbbbb\n' +
  // '>>> cccccccccc\n\n'+
  // '``` var a=11; ```'
  // markdown = markdown + markdown + markdown + markdown + markdown //测试超过高度范围
  // let html = marked(markdown)
  let html = marked(props.article_content)
  let introduce = marked(props.introduce)
  console.log('props',props)
  const [targetOffset, setTargetOffset] = useState(undefined);
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);
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
              <Breadcrumb.Item>{props.typeName}</Breadcrumb.Item>
              <Breadcrumb.Item>{props.title}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <p className="detail-title">{props.title}</p>
          <div className="detail-show">
            <div className="show-item"><CalendarOutlined />{props.addTime}</div>
            <div className="show-item"><FolderOutlined />{props.typeName}</div>
            <div className="show-item"><FireOutlined />{props.view_count}</div>
          </div>
          <img src={require('../static/img/index/next_blog.jpg')} alt="文章图片" className="article-img"/>
          <div className="article-introduce" dangerouslySetInnerHTML={{__html: introduce}}>
          </div>
          <div className="detailed-content" dangerouslySetInnerHTML={{__html: html}}>
            {/* 详细内容，下次编写 */}
          </div>
        </div>
        <div className="blog-right">
          <Author/>
          <Anchor targetOffset={targetOffset} className="catalogue-list" offsetTop={28}>
            {navArr.length > 0 && navArr.map((item,index)=>{
              return <Fragment key={index}>
                <Link href={`#${item.anchorId}`} title={item.title} />
              </Fragment>
            })}
          </Anchor>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  )
}
Detailed.getInitialProps = async(context) =>{
  console.log(context.query.id)
  let id = context.query.id//获取路由上的id
  const promise = new Promise((resolve)=>{
    axios(`${servicePath.getArticleById}?id=${id}`).then(
      (res)=>{
        console.log(res.data.data[0])
        resolve(res.data.data[0])
      }
    ).catch(err=>{
      console.log(err)
    })
  })
  return await promise
}
export default Detailed;