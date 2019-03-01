import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text, TextInput} from 'react-native';
import {Dimensions} from 'react-native';
import {fz} from "../style/StyleSheet";

let {width, height} = Dimensions.get("window");


export default class CustomInput extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    _test(){
        console.log(" width ==> "+ width * 0.02);
    }

    render() {
        return (

            <View style={styles.inputWrap}>
                <View style={styles.labelWrap}>
                    <Text style={[fz.e , {color:'#f00' , fontWeight: 'bold' }]}>ID</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.inputSt}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                </View>
            </View>

        );
    }
}


const styles = StyleSheet . create({

    inputWrap:{
        width: width * 0.85,
        height: height / 12,
        position : 'relative' ,
        borderRadius: height ,
        borderWidth : 2 ,
        borderColor: "#f00" ,
    },

    labelWrap : {
        position : 'absolute' ,
        top: - (height * 0.02 ) ,
        left: width * 0.02 ,
        backgroundColor: '#fff',
    },

    inputBox:{
        position:"absolute",
        top: 100,
    },

    inputSt : {
        height: height * 0.05 , backgroundColor: '#f0f' ,
    },


});