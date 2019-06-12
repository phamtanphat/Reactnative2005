import React, { PureComponent } from 'react'
import { Text, View , TouchableOpacity} from 'react-native'

export default class Child extends PureComponent {
    render() {
        const {onIncrease , onDescrease , onReset} = this.props
        return (
            <View style={{alignSelf :'center'}}>
                <View style={{flexDirection : 'row' }}>
                    <TouchableOpacity
                        style={{backgroundColor : 'green' , padding : 10 , borderRadius : 5}}
                        onPress={onIncrease}
                    >
                        <Text style={{color : 'white' , fontSize : 20}}>Increase</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{backgroundColor : 'red' , padding : 10 , borderRadius : 5}}
                        onPress={onDescrease}
                    >
                        <Text style={{color : 'white' , fontSize : 20}}>Descrease</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{backgroundColor : 'indigo' , padding : 10 , borderRadius : 5}}
                        onPress={onReset}
                    >
                        <Text style={{color : 'white' , fontSize : 20}}>Reset</Text>
                    </TouchableOpacity>
                
                </View>
            </View>
        )
    }
}
