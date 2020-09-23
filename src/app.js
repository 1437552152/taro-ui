import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index/index'

import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/basic/index',
      'pages/view/index',
      'pages/view/article/index',
      'pages/feedback/index',
      'pages/data-entry/index',
      'pages/layout/index',
      'pages/navigation/index',
      'pages/navigation/indexes/index',
      'pages/advanced/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#000',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [{
        pagePath: "pages/index/index",
        iconPath: "/assets/images/curtain.png",
        selectedIconPath: "/assets/images/curtain.png",
        text: "首页"
      }, {
        pagePath: "pages/basic/index",
        iconPath:"/assets/images/curtain.png",
        selectedIconPath:"/assets/images/curtain.png",
        text: "分类"
      }, {
        pagePath: "pages/view/article/index",
        iconPath: "/assets/images/curtain.png",
        selectedIconPath:"/assets/images/curtain.png",
        text: "购物车"
      }, {
        pagePath: "pages/advanced/index",
        iconPath:"/assets/images/curtain.png",
        selectedIconPath: "/assets/images/curtain.png",
        text: "个人"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'));