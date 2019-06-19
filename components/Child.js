import React, { PureComponent } from 'react'
import { Text, View , TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

class Child extends PureComponent {
    render() {

        return (
            <View style={{alignSelf :'center'}}>
                <View style={{flexDirection : 'row' }}>
                    <TouchableOpacity
                        style={{backgroundColor : 'green' , padding : 10 , borderRadius : 5}}
                        onPress={() => this.props.dispatch({type : "INCREASE"})}
                    >
                        <Text style={{color : 'white' , fontSize : 20}}>Increase</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{backgroundColor : 'red' , padding : 10 , borderRadius : 5}}

                    >
                        <Text style={{color : 'white' , fontSize : 20}}>Descrease</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{backgroundColor : 'indigo' , padding : 10 , borderRadius : 5}}

                    >
                        <Text style={{color : 'white' , fontSize : 20}}>Reset</Text>
                    </TouchableOpacity>
                
                </View>
            </View>
        )
    }
}
export default connect()(Child)