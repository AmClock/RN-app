import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
import {fz} from "../style/StyleSheet";

let {width, height} = Dimensions.get('window');

export default class CustomBtn extends Component {


    static defaultProps = {
        title: "notTitle",
        bg: '#000',
        fc: '#424242',
        onPress: () => null
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity style={[styles.btnWrap, {borderColor: this.props.bg}]}
                goTo={this.props.goTo}
                onPress={this.props.onPress}
            >
                <Text style={[fz.d, {color: this.props.fc}]}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    btnWrap: {
        width: width / 2,
        height: height / 10 / 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:height/30/1.5,
        borderWidth:height/200/1.5,
    },
});