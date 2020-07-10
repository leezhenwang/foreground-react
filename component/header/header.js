import React from 'react'
import './header.scss'
import { HomeOutlined, FundProjectionScreenOutlined } from '@ant-design/icons';
import {useState,useEffect,Fragment} from 'react'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import  servicePath  from '../../config/apiUrl'
const Header = () => {
  const [navArray, setNavArray] = useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
      const result = await axios(servicePath.getTypeInfo).then((res)=>{
        setNavArray(res.data.data)
        return res.data.data
      })
      setNavArray(result)
    }
    fetchData()
  },[])
  const handleHeaderClick= (e)=>{
    alert(e.key)
    if(e.key=0){
      Router.push('/index')
    }else{
      Router.push(`/articleList?id=${e.key}`)
    }
  }
  return (
  <div className="header-contianer">
    <div className="header-box">
      <div className="header-left">xxx工作室<span className="studio-descr">专注前端开发</span></div>
      <div onClick={handleHeaderClick}>
        <div className="hearder-icon" key={0}><HomeOutlined />&nbsp;<span className="icon-text">博客首页</span></div>
        {navArray.map((item,index)=>{
          return <div className="hearder-icon" key={index+1}><FundProjectionScreenOutlined />&nbsp;<span className="icon-text">{item.typeName}</span></div>
        })}
      </div>
    </div>
  </div>
)}

export default Header