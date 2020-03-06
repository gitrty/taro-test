import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class Jar extends Component {

    state = {
        timer: 0
    }


    componentDidMount() {
        let num = this.props.timer
        this.setState({
            timer: num
        })

        let tim = setInterval(() => {
            num--
            num <= 0 && clearInterval(tim)
            this.setState({
                timer: num
            })
        }, 1000)
    }

    render() {
        const list = ['apple', 'pear', 'bananana']

        return (
            <View>
                <Text>1、JSX中进行map遍历：</Text>
                <View>
                    {
                        list.map((item, index) => {
                            return (<Text key={index}>{index}-{item}  </Text>)
                        })
                    }
                </View>
                <View>{this.props.name}</View>
                <View style={{ color: 'red' }}>定时器：{this.state.timer}</View>
            </View>


        )
    }
}


export default Jar