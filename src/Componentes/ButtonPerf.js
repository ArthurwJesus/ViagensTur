import React from "react";
import {View,Text,StyleSheet} from 'react-native'
import {Entypo} from "@expo/vector-icons" 

function ButtonPerf({color,size}){
    return(
        <View style={style.container}>
            <Entypo
            name="user"
            color={color}
            size={size}
            />
        </View>
    )
}

export default ButtonPerf


const style = StyleSheet.create({
    container:{
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor: "#F1A244",
        alignItems: "center",
        justifyContent:"center",
        marginBottom:20,
    }
})