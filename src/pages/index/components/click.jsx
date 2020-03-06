import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

class Click extends Component {

    state = {
        count: 0,
        name: 'toyo'
    }

    change1(name, ev) {
        // 带参数 prev 的setState
        this.setState(prev => ({
            count: ++prev.count
        }))

        console.info(name)
        console.info(ev)
    }

    // 柯里化函数
    change2 = index => e => {
        console.info(index)
    }

    render() {

        return (
            <View>

                <Button onClick={this.change1.bind(this, this.state.name)}>Taro事件 - {this.state.count}</Button>
                {/* 柯里化函数 */}
                <Button onClick={this.change2(100)}>Taro事件函数柯里化</Button>
            </View>
        )
    }
}


export default Click