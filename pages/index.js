import Head from 'next/head'
import './index.css'
import './index.scss'
import {Button} from 'antd'
import Header from '../component/header/header'
import { Fragment } from 'react'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils'
export default function Home() {
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
            <li className="latestLog-list-item">
              <p className="item-title">
                <a>Vue.js3.x最新基础免费视频教程-无收费有辅导</a>
              </p>
              <div className="show-list">
                <div className="show-item">2020-04-22</div>
                <div className="show-item">视频教程</div>
                <div className="show-item show-item-hot">13225&nbsp;人</div>
              </div>
              {/* <div className="img-contianer" style={{background: `url('${require('../static/img/index/next_blog.jpg')}')`,width: 100, height: 100}}></div> */}
              <img src={require('../static/img/index/next_blog.jpg')}/>
              <p className="item-detail">
                Next.js 是一个轻量级的 React 服务端渲染应用框架。
                有了它我们可以简单轻松的实现React的服务端渲染，从而加快首屏打开速度，也可以作SEO（收索引擎优化了）。
                在没有Next.js的时候，用React开发需要配置很多繁琐的参数，如Webpack配置，Router配置和服务器端配置等....。
                如果需要作SEO，要考虑的事情就更多了，怎么样服务端渲染和客户端渲染保持一致就是一件非常麻烦的事情，需要引入很多第三方库。
                但有了Next.js，这些问题都解决了，使开发人员可以将精力放在业务逻辑上，从繁琐的配置中解放出来。
              </p>
              <div className="item-more"><a>查看更多</a></div>
            </li>
          </ul>
        </div>
        <div className="blog-right"></div>
      </div>
    </Fragment>
  )
}
