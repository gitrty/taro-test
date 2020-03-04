import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class About extends Component {
    state = {
        msg: "message"
    }
    config = {
        navigationBarTitleText: 'about页'
    }

    render() {
        return (
            <View className="about">
                <View><Text>about页面2222222</Text></View>
            </View>
        )
    }
}

export default About