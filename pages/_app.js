import App, {Container} from 'next/app'
import 'antd/dist/antd.css'//重写app时引入antd
import '../static/style/common.scss'
import * as React from 'react';
import initialState from '../redux/initialState'
import { reducer } from './../redux/reducer';

export const Context = React.createContext({
  state: initialState
});
const ProviderContainer = ({children})=>{//创建provider容器
  const [state, dispatch] = React.useReducer(reducer, {...initialState}); // 创建reducer
  // 关键点在于使用value 把state和dispatch 传递下去子组件
  return <Context.Provider value={{state,dispatch}}>{children}</Context.Provider>
}
export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {// 每当页面切换的时候，这个方法都会被执行
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }
  render () {
    const {Component, pageProps} = this.props
    //传递state和dispatch到所有子组件
    return <Container>
      <ProviderContainer>
        <Component {...pageProps} />
      </ProviderContainer>
    </Container>
  }
}
// Component的prop是当前活动的page，所以当切换路由时，Component会切换为新的page。因此，发送给Component的props都会被page接收。

// pageProps是一个包含预加载页面props的对象，如果页面不使用getInitialProps，它就是一个空对象