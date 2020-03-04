import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add() {
    dispatch(add())
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

  state = {
    a: 'aaa',
    b: 'bbb'
  }

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps(nextProps) {
    // console.log(this.props, nextProps)
  }

  // 组件挂载前 - 对应uni中的onload - 对应原生小程序onLaunch - 可在此处获取路由参数
  componentWillMount(path) {
    this.props.counter.userid = 99
    // console.info(this.props.counter.userid)
    console.info(this.$router.params)
  }

  // 组件挂载后
  componentDidMount() {

  }


  // 对应小程序中的onShow
  componentDidShow() {
    this.setState({
      a: 'a:在DidShow周期中进行修改'
    })
  }

  // 对应小程序中的onHide
  componentDidHide() {

  }

  // 页面卸载时触发 - 如 redirectTo 或 navigateBack 到其他页面时
  componentWillUnmount() {

  }

  // 下拉刷新时触发
  onPullDownRefresh() {
    console.info('刷新页面')
  }

  // 上拉触底 - 需要页面足够高，有滚动条
  onReachBottom() {
    console.info('上拉触底')
  }

  // 点击当前tabBar时触发，不能作用于全局app.jsx中
  onTabItemTap(obj){
    // console.info(obj)
  }

  render() {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World 666</Text></View>
        <View><Text>{this.a} </Text></View>
        {/* {console.info(this.props)} */}
        <View><Text>redux-userid:{this.props.counter.userid} </Text></View>
      </View>
    )
  }
}

export default Index
