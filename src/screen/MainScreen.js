import React, {Component} from 'react';
import {StyleSheet, Text, View , SafeAreaView} from 'react-native';
import CustomHead from "../component/CustomHead";
import {box} from "../style/StyleSheet";

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