import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import "./zujian.less"

class Zujian extends Component {

    componentWillMount() {
        // console.info('zujian:' + this.$componentType)
        console.info(this.props)
    }

    render() {
        return (
            <View className='zujian'>
                <View><Text>about - 子组件 - {this.props.message} - {this.props.flag}</Text></View>
            </View>
        )
    }
}

export default Zujian
