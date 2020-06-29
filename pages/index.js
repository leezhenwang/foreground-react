import Head from 'next/head'
import './index.css'
import './index.scss'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="home">首页</div>
    </>
  )
}
