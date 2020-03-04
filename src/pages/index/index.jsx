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

  // 组件挂载前
  componentWillMount() {
    console.info(this.props.counter.userid = 30)
    // console.info(this.props.counter.userid)
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

  componentWillUnmount() {

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
