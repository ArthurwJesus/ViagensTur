import React from "react";
import { View,Dimensions,FlatList,Image,StyleSheet,Text,ScrollView,TouchableOpacity,Button,Alert,TextInput} from "react-native";
import Usuario from "../../Componentes/user";
import Carousel from "react-native-snap-carousel";
import {useNavigation} from '@react-navigation/native'


import quarto from '../../imgs/quarto.jpg'
import paris from '../../imgs/paris.jpeg'
import hotel from '../../imgs/hotelvia.jpg'
import viagem from '../../imgs/viagem.jpeg'

function Dashboard(){


const DATA = {
    viagemItem:[{
        nome:"Quarto italia",
        imagem:quarto,
        valor:"R$:00,00"
    },{
        nome:"Quarto em Paris",
        imagem:paris,
        valor:"R$:00,00"
    },{
        nome:"Suite no caribe",
        imagem:hotel,
        valor:"R$:00,00"
    },{
        nome:"Viagem para a Grecia",
        imagem:viagem,
        valor:"R$:00,00"
    }
    ]
}
      
const [number, onChangeNumber] = React.useState(null);
const navigation = useNavigation();

    const handleClick=() =>{
         navigation.navigate('Combos')
    }

    const handleClick2=() =>{
        navigation.navigate('Viagens')
   }

   const handleClick3=() =>{
    navigation.navigate('Hotel')
}

const renderItem = ({ item:{nome,imagem,valor}}) => (
    <TouchableOpacity>
    <View style={style.row}>
        <Image source={imagem} style={style.miniImg}/>
        <View style={style.col}>
        <Text key={nome} style={style.txt}>{nome}</Text>
        <Text key={valor} style={style.value}>{valor}</Text>
        </View>
    </View>
    </TouchableOpacity>
  );

    return(
        <ScrollView style={style.bodyMain}>
        <Usuario/>
        <View>
        <View style={style.minimenu}>
            <View>
                <TouchableOpacity onPress={handleClick}>
                    <Image source={{uri:'https://all.accor.com/magazine/imagerie/ferias-na-praia-o-que-fazer-das-f163.jpg'}} style={style.img}/>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={handleClick2}>
                    <Image source={{uri:'https://www.vidadeturista.com/wp-content/uploads/2009/12/planejamento-viagem-internacional.jpg'}} style={style.img}/>
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity onPress={handleClick3}>
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktgwJKJ_tTd4pNkCkGopPjpzxViR9brQLs1uqfXnpBv1yXHhpS9ErHL2SQ6AaNiafdJM&usqp=CAU'}} style={style.img}/>
            </TouchableOpacity>
            </View>
        </View>
            <TextInput
                style={style.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="digite para onde deseja ir"
                keyboardType="default"
            />
            <View>
            <FlatList
                data={DATA.viagemItem}
                renderItem={renderItem}
                keyExtractor={({nome})=>nome}
            />
            </View>
            </View>
        </ScrollView>
    )
}

export default Dashboard

const style=StyleSheet.create({
    img:{
        width:90,
        height:90,
        marginTop:20,
        marginLeft:10,
        margin:26,
        borderRadius:60
    },
    minimenu:{
        flexDirection:'row',
    },col:{
        flexDirection:'column',
    },
    row:{
        marginTop:10,
        paddingVertical:12,
        flexDirection:"row",
        borderWidth: 2,
        borderColor:"#ECECEC",
        borderRadius:10,
        alignItems:"center"
    },
    card:{
        width:120,
        height:120,
        marginBottom:20,
        marginTop:10,
        marginLeft:10,
        borderRadius:30
    },titulo:{
        textAlign:'center',
        margin:3,
        fontWeight:'bold',
        fontSize:20
    },teste:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom:10,
        marginRight:10
    },bodyMain:{
        backgroundColor:'white'
    },cardDas:{
        width:300,
        height:200,
        marginBottom:20,
        marginLeft:30,
        borderRadius:20,
    },valor:{
        textAlign:'center',
        margin:3,
        color:'red',
        fontSize:20
    },txtbody:{
        textAlign:'center',
        margin:3,
        fontSize:15,
    },cardbody:{
        marginBottom:20
    },input: {
        height: 40,
        margin: 12,
        borderWidth:1,
        padding: 10,
        borderRadius:30
      },txt:{
          marginLeft:50,
          marginBottom:50,
          fontSize:20,
      }, item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },miniImg:{
        width:90,
        height:90,
        borderRadius:20,
        marginLeft:10,
      },value:{
          fontSize:15,
          marginLeft:80
      }
})