import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
import {fz} from "../style/StyleSheet";

let {width, height} = Dimensions.get('window');
/*
*  2019. 03. 02
 */
export default class CustomBtn extends Component {


    static defaultProps = {
        title: "notTitle",
        color: '#000',
        onPress: () => null
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity style={[styles.btnWrap, {borderColor: this.props.color}]} onPress={this.props.onPress}
                              activeOpacity={0.8}
            >
                <Text style={[fz.d, {color: this.props.color , fontWeight: 'bold'}]}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    btnWrap: {
        width: width / 2,
        height: height / 11 / 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:height/30/1.5,
        borderWidth:height/200/1.5,
    },
});