import React from 'react'
import './header.scss'
import { HomeOutlined, FundProjectionScreenOutlined } from '@ant-design/icons';
const Header = () => (
  <div className="header-contianer">
    <div className="header-box">
      <div className="header-left">xxx工作室<span className="studio-descr">专注前端开发</span></div>
      <div className="hearder-icon"><HomeOutlined />&nbsp;<span className="icon-text">博客首页</span></div>
      <div className="hearder-icon"><FundProjectionScreenOutlined />&nbsp;<span className="icon-text">记录生活</span></div>
    </div>
  </div>
)

export default Header