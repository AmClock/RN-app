import React , {Component} from 'react';
import {View , Image} from 'react-native';
import {Dimensions} from 'react-native';


let {width, height} = Dimensions.get('window');

export default class LogoBox extends Component{

    render(){
        return(
        <View style={{
            width : width ,
            height : height / 5 ,
            alignItems : 'center' ,
            justifyContent : 'center'
        }}>
            <Image
                source={require('../image/logo.png')}
            />
        </View>
        );
    }
}

