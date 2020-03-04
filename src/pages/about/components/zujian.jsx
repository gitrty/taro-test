import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import "./zujian.less"

class Zujian extends Component {
    render() {
        return (
            <View className='zujian'>
                <View><Text>about - 子组件</Text></View>
            </View>
        )
    }
}

export default Zujian
