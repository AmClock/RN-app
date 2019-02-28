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

    render() {
        return (
            <View style={{width: width * 0.85, height: height / 10, backgroundColor: '#f00' ,
                position : 'relative'}}>
                <View style={{position : 'absolute' }}>
                    <Text style={fz.e}>ID</Text>
                </View>
                <View>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet . create({




});