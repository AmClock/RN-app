import React , {Component} from 'react';
import {StyleSheet , View , Text , Button , SafeAreaView , Image} from'react-native';
import { Dimensions } from 'react-native';
import {box} from "../style/StyleSheet";
import CustomBtn from "../component/CustomBtn";


let {width, height} = Dimensions.get('window');
/*
*  2019. 03. 02
 */
export default class TitleScreen extends Component{

    render() {
        return (
            <SafeAreaView style={[box.fullBox,styles.titleWrap]}>
                <View style={[box.halfBox , styles.logoBox]}>
                    <Image
                        source={require('../image/logo.png')}
                    />
                </View>
                  <CustomBtn
                    title={"Login"}
                    color={'#f00'}
                    onPress={()=>this.props.navigation.navigate("Login")}
                />

                <CustomBtn
                    title={"Sign Up"}
                    color={'#f0f'}
                    onPress={()=>this.props.navigation.navigate("Sign")}
                />

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    titleWrap:{
        alignItems: "center",
    },
    logoBox:{
        alignItems:'center',
        justifyContent:'center',
    }
});