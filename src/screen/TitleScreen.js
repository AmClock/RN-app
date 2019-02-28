import React , {Component} from 'react';
import {StyleSheet , View , Text , Button , SafeAreaView , Image} from'react-native';
import { Dimensions } from 'react-native';
import {box} from "../style/StyleSheet";
import CustomBtn from "../component/CustomBtn";


let {width, height} = Dimensions.get('window');
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
                    onPress={()=>this.props.navigation.navigate("Login")}
                />
                <Button title={"this is button"}
                onPress={()=>this.props.navigation.navigate("Login")}/>
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