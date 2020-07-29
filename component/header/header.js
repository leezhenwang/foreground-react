import React from 'react'
import './header.scss'
import { HomeOutlined, FundProjectionScreenOutlined } from '@ant-design/icons';
import {useState,useEffect,useContext,useReducer,Fragment} from 'react'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import  servicePath  from '../../config/apiUrl'
import { Context } from '../../pages/_app'
// import initialState from '../../reducer/initialState'
// import { reducer } from '../../reducer/reducer'//预留惰性初始化
const Header = () => {
  const store = useContext(Context);//获取存储的值
  const { dispatch } = store
  console.log(store)
  // const [navArray, setNavArray] = useState([]);
  let navArray = store.state.navArray
  useEffect(()=>{
    const fetchData = async()=>{
      const result = await axios(servicePath.getTypeInfo).then((res)=>{
        console.log(res)
        return res.data.data
      })
      // setNavArray(result)
      dispatch({
        type: 'setNavArray',
        payload: result
      })
    }
    if(store.state.navArray.length === 0){//未请求时
      fetchData()
    }
  },[])
  const handleHeaderClick= (key)=>{
    if(key == 0){
      Router.push('/index')
    }else{
      Router.push(`/articleList?id=${key}`)
    }
  }
  return (
  <div className="header-contianer">
    <div className="header-box">
      <div className="header-left">xxx工作室<span className="studio-descr">专注前端开发</span></div>
      <div>
        <div className="hearder-icon"  onClick={()=>handleHeaderClick(0)}><HomeOutlined />&nbsp;<span className="icon-text">博客首页</span></div>
        {navArray && navArray.map((item,index)=>{
          return <div className="hearder-icon" key={index} onClick={()=>handleHeaderClick(index+1)}><FundProjectionScreenOutlined />&nbsp;<span className="icon-text">{item.typeName}</span></div>
        })}
      </div>
    </div>
  </div>
)}

export default Header