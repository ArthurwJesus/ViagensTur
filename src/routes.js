import React from "react";
import {createBottomTabNavigator,Button} from '@react-navigation/bottom-tabs';
import {Entypo,Fontisto,AntDesign} from '@expo/vector-icons'
import ButtonPerf from "./Componentes/ButtonPerf";

//paginas
import Dashboard from './paginas/Dashboard/index';
import Perfil from './paginas/Perfil/perfil';
import Hotel from './paginas/Hotel/hotel';
import Viagens from './paginas/Viagens/viagem';
import Combos from './paginas/Combo/combos';

const Tab = createBottomTabNavigator();

function Routes(){
    return(
        <Tab.Navigator
        tabBarOptions={{
            tabStyle:{
               paddingBottom:5,
               paddingTop:5,
               backgroundColor:'#FF8A00',
               color:"black",
               borderTopColor: "transparent"
            },
            activeTintColor:'white',
            inactiveTintColor:'black' //
        }}
        >
            <Tab.Screen
            name="Dashboard" component={Dashboard}
            options={{
                headerStyle:{
                    backgroundColor:'#FF8A00',
                },headerTitleStyle:{
                    color: '#FF8A00'
                },
                tabBarIcon:({size,color})=>
            (<Entypo name="home" size={size} color={color} />)}}
            />

            <Tab.Screen name="Hotel" component={Hotel}
            options={{
                headerStyle:{
                    backgroundColor:'#FF8A00',
                },headerTitleStyle:{
                    color: '#FF8A00'
                },
                tabBarIcon:({size,color})=>
            (<Entypo name="suitcase" size={size} color={color} />)}}
            />

            <Tab.Screen name="Perfil" component={Perfil}
            options={{
                headerStyle:{
                    backgroundColor:'#FF8A00',
                },headerTitleStyle:{
                    color: '#FF8A00'
                },
                tabBarLabel:'',
                tabBarIcon:({size,color})=>(<ButtonPerf size={size} color={color}/>)}}
            />

            <Tab.Screen name="Viagens" component={Viagens}
            options={{
                headerStyle:{
                    backgroundColor:'#FF8A00',
                },headerTitleStyle:{
                    color: '#FF8A00'
                },
                tabBarIcon:({size,color})=>
            (<Entypo name="aircraft" size={size} color={color} />)}}
            />
            
            <Tab.Screen name="Combos" component={Combos}
            options={{
                headerStyle:{
                    backgroundColor:'#FF8A00',
                },headerTitleStyle:{
                    color: '#FF8A00'
                },tabBarIcon:({size,color})=>
            (<Entypo name="ticket" size={size} color={color} />)}}
            /> 
        </Tab.Navigator>
    )
}

export default Routes
