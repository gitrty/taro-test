import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

// 获取redux数据
// console.info(store.getState())

class App extends Component {

  config = {

    pages: [
      'pages/index/index',
      'pages/about/about'
    ],

    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },

    // 底部tabBar全局配置
    tabBar: {
      color: "#C7C7C9",
      selectedColor: "#F18300",
      backgroundColor: "#ffffff",
      borderStyle: "black",
      list: [{
        pagePath: "pages/index/index",
        text: "发现好课",
        iconPath: "./static/img/ta1.png",
        selectedIconPath: "./static/img/ta1-sel.png"
      }, {
        pagePath: "pages/about/about",
        text: "学习中心",
        iconPath: "./static/img/ta2.png",
        selectedIconPath: "./static/img/ta2-sel.png"
      }]
    }

  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
