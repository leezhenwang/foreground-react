import Head from 'next/head'
import './index.css'
import './index.scss'
import {Button} from 'antd'
import Header from '../component/header/header'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      {/* <div className="home">首页</div>
      <Button>这是首页button</Button> */}

    </>
  )
}
