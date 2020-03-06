import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'

import "./details.less"

// 可以通过import来引入图片，可在Image 组件的 src属性中直接使用
import ta1Sel from "../../static/img/ta1-sel.png"

class Details extends Component {

    state = {
        id: -1,
        name: '无'
    }

    componentWillMount() {
        console.info(this.$router.params)
        this.setState({
            id: this.$router.params.id,
            name: this.$router.params.name
        })
    }

    render() {

        let txt = <Text>变量接收的标签</Text>

        // 可在此处进行 if / for 操作

        return (
            <View>
                <View> <Text>详情页详情页详情页</Text></View>
                <View> <Text>路由接收id:{this.state.id}</Text></View>
                <View> <Text>路由接收id:{this.$router.params.id}</Text></View>
                <View> <Text>路由接收name:{this.state.name}</Text></View>
                <View> <Image src={ta1Sel} className='importImg' /></View>
                <View> {txt}</View>
            </View>
        )
    }
}

export default Details