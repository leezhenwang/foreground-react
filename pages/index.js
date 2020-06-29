import Head from 'next/head'
import './index.css'
import './index.scss'
import {Button} from 'antd'
import Header from '../component/header/header'
import { Fragment } from 'react'
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
        <div className="blog-left"></div>
        <div className="blog-right"></div>
      </div>
    </Fragment>
  )
}
