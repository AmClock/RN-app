import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text, TextInput} from 'react-native';
import {Dimensions} from 'react-native';
import {fz} from "../style/StyleSheet";

let {width, height} = Dimensions.get("window");

/*
*  2019. 03. 02
 */
export default class CustomInput extends Component {
    static  defaultProps={
        label : "Not_Label"
    }



    constructor(props) {
        super(props);

        this.state = {

        }
    }

    _test() {
        console.log("height ==> " + height);
        console.log("height * 0.9 ==> " + height *0.02);
    }

    render() {
        return (

            <View style={styles.inputWrap}>
                <View style={styles.labelWrap}>
                    <Text style={[fz.e, {color: '#f00', fontWeight: 'bold'}]}>
                       {this.props.label}
                    </Text>
                </View>
                <View style={styles.inputBox}>
                       <TextInput
                        style={[fz.g,styles.inputSt]}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create({

    inputWrap: {
        width: width * 0.85,
        height: height / 12,
        position: 'relative',
        borderRadius: height,
        borderWidth: 2,
        borderColor: "#f00",
    },

    labelWrap: {
        position: 'absolute',
        top: -(height * 0.02),
        left: width * 0.02,
        backgroundColor: '#fff',
    },

    inputBox: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    },

    inputSt: {
        width: '80%' ,
        height: '70%' ,
        backgroundColor: '#0ff',
        alignItems: 'center',
    },

});