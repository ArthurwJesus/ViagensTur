import React from "react";
import {Text,View,StyleSheet,ScrollView} from "react-native"
import Usuario from "../../Componentes/user";

function Perfil(){
    return(
        <ScrollView>
            <Usuario/>
            <View style={style.body}>
            <Text style={style.titulo}>Sobre Mim</Text>
            <Text style={style.txt}> Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </Text>            
            </View>
            <View style={style.body}>

            </View>
        </ScrollView>
    )
}

export default Perfil

const style=StyleSheet.create({
    body:{
        backgroundColor:'#FF8A00',
        borderRadius:20,
        marginTop:10,
        height:90,
        width:320,
        alignSelf:'center'
    },txt:{
        fontSize:12,
        textAlign:'center',
    },titulo:{
        textAlign:'center',
        marginBottom:10
    }
})