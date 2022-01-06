import React from "react";
import {View,Text,StyleSheet,Image,SafeAreaView} from 'react-native'
import user from '../imgs/user.jpeg'

function Usuario(){
    return(
        <SafeAreaView>
        <View style={style.linha}>
            <View style={style.row}>
            <Image source={user} style={style.user}/>
            <Text style={style.nome}>UsuarioTeste#123</Text>
            </View> 
        </View>
        </SafeAreaView>
    )
}

export default Usuario

const style=StyleSheet.create({
    linha:{
        backgroundColor:'#FF8A00',
        borderBottomStartRadius:60
        
    },texto:{
        color:'white'
    },user:{
        marginTop:30,
        width:100,
        height:100,
        borderRadius:70,
        marginLeft:20,
    },nome:{
        marginLeft:10,
        marginTop:70,
        color:'white'
    },row:{
        flexDirection:'row',
        marginBottom:20
    }
})