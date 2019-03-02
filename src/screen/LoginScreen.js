import React , {Component} from'react';
import  {StyleSheet , SafeAreaView , View , Text}from'react-native';
import { Dimensions } from 'react-native';
import {box} from "../style/StyleSheet";


let {width, height} = Dimensions.get('window');
/*
*  2019. 03. 02
 */
export default  class LoginScreen  extends  Component{
    render(){
        return(
            <SafeAreaView style={[box.fullBox ,{backgroundColor:"#f00"}]}>
            </SafeAreaView>
        );
    }
}
