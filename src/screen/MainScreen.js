import React, {Component} from 'react';
import {StyleSheet, Text, View , SafeAreaView} from 'react-native';
import CustomHead from "../component/CustomHead";
import {box} from "../style/StyleSheet";
/*
*  2019. 03. 02
 */
export default class MainScreen extends Component {
    render() {
        return (
            <SafeAreaView style={box.fullBox}>
                <CustomHead/>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

});