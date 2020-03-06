import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import Jar from './components/Jar'
import Setstate from './components/Setstate'
import Click from './components/click'

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
    b: 'bbb',
    id: 666,
    name: 'toyo'
  }

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps(nextProps) {
    // console.log(this.props, nextProps)
  }

  // 组件挂载前 - 对应uni中的onload - 对应原生小程序onLaunch - 可在此处获取路由参数
  componentWillMount() {
    this.props.counter.userid = 99
    // console.info(this.props.counter.userid)
    // console.info(this.$router.params)
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
  onTabItemTap(obj) {
    // console.info(obj)
  }

  // navigateTo跳转 - 路由传参
  jump() {
    Taro.navigateTo({ url: `/pages/details/details?id=${this.state.id}&name=${this.state.name}` })
  }

  jump2() {
    Taro.redirectTo({ url: '/pages/details/details' })
  }

  render() {

    const showJar = true;

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
        {/* Taro.pxTransform(40) - 在js中px不会转化为rpx，需要使用该方法进行转换 (也可以直接写成rpx) */}
        <View onClick={this.jump} style={{ fontSize: Taro.pxTransform(40) }}>navigateTo跳转</View>
        <View onClick={this.jump} style={{ fontSize: '20px' }}>navigateTo跳转</View>
        <View onClick={this.jump2}>redirectTo跳转</View>
        <View>------------------------</View>

        {showJar && <Jar name={'toyo'} timer={10} />}

        <Setstate />

        <Click />
      </View>
    )
  }
}

export default Index
