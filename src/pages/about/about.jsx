import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

import Zujian from "./components/zujian.jsx"

import "./about.less"

class About extends Component {
    state = {
        msg: "message2222"
    }
    config = {
        navigationBarTitleText: 'about页'
    }

    componentWillMount() {
        // console.info('about:' + this.$componentType)
    }

    renderHeader() {
        return <View><Text>about页面</Text></View>
    }

    render() {
        return (
            <View className="about">
                <View className="title"><Text>about页面</Text></View>
                <Button> {this.msg} </Button>
                {/* 传值给子组件，子组件通过 this.props.message 接收，如果不进行传参，则默认传 true */}
                <Zujian message={this.state.msg} flag />
                <View>{this.renderHeader()}</View>
            </View>
        )
    }
}

export default About