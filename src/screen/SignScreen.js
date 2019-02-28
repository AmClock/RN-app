import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text, TextInput} from 'react-native';
import {Dimensions} from 'react-native';
import {box} from "../style/StyleSheet";
import LogoBox from "../component/LogoBox";
import CustomInput from "../component/CustomInput";

let {width, height} = Dimensions.get("window");


export default class SignScreen extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <SafeAreaView style={ box.fullBox }>
                <LogoBox/>
                <View style={{
                    width: width,
                    height: height,
                    alignItems : 'center',
                }}>
                    <CustomInput/>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({});
