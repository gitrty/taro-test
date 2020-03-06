import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class Setstate extends Component {

    state = {
        date: new Date(),
        num: 0
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)


        this.setState({
            num: 1
        }, () => {
            // 只有在 setState 的 callback 中可以拿到修改后的值
            console.info(this.state.num)     // 1
        })
        console.info(this.state.num)   // 0 

    }

    render() {


        return (
            <View>现在的时间是：{this.state.date.toLocaleTimeString()}</View>
        )
    }
}

export default Setstate