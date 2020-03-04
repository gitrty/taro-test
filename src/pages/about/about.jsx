import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

import Zujian from "./components/zujian.jsx"

import "./about.less"

class About extends Component {
    state = {
        msg: "message2"
    }
    config = {
        navigationBarTitleText: 'about页'
    }

    renderHeader() {
        return <View><Text>about页面</Text></View>
    }

    render() {
        return (
            <View className="about">
                <View className="title"><Text>about页面</Text></View>
                <Button> {this.msg} </Button>
                <Zujian />
                <View>{this.renderHeader()}</View>
            </View>
        )
    }
}

export default About