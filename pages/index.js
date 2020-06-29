import Head from 'next/head'
import './index.css'
import './index.scss'
import {Button} from 'antd'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="home">首页</div>
      <Button>这是首页button</Button>
    </>
  )
}
