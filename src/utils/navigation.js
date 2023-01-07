import React from 'react';
import {Text,Button,Dimensions,View, Image} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import Circuits from '../screens/circuits';
import Profile from '../screens/profile';
import Calculators from '../screens/calculators';
import Images from '../../Images/Images';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const HomeStackNavigator = createStackNavigator();
const HomeNavigator = () => {
    return(
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
            <HomeStackNavigator.Screen name="calculators" component={Calculators} options={{headerShown:false}} />
        </HomeStackNavigator.Navigator>
    )
}

const ScreenStackNavigator = createBottomTabNavigator();
const ScreenNavigator = () => {
    return(
        <ScreenStackNavigator.Navigator
            screenOptions={{
                tabBarShowLabel : false,
                tabBarStyle: {
                    height:windowHeight*0.08,
                    position:'absolute',
                    elevation:16,
                    paddingHorizontal:10,
                    backgroundColor:'#fff',
                }
            }}>
            <ScreenStackNavigator.Screen name="Home" component={HomeNavigator}  options={{
                headerShown:false,
                tabBarIcon:({focused}) =>(
                    <View style={{display:'flex',justifyContent:'center', alignItems:'center',width:'100%',marginHorizontal:10}}>
                        <View style={{height:25,width:25,display:'flex',justifyContent:'center', alignItems:'center',backgroundColor:focused?'#aaaaaa':'#fff',borderRadius:20}}>
                            <Image
                                style={{height:15,width:15,alignSelf:'center'}}
                                resizeMode='contain'
                                source={!focused?Images.home:Images.home_alt}/>
                        </View>
                        <Text style={{marginVertical:2.5,color:focused?'#36629c':'#000',fontWeight:focused?'bold':null}}>Home</Text>
                    </View>
                ),
            }} />
            <ScreenStackNavigator.Screen name="Circuits" component={Circuits} options={{
                headerShown:false,
                tabBarIcon:({focused}) =>(
                    <View style={{display:'flex',justifyContent:'center', alignItems:'center',width:'100%',marginHorizontal:10}}>
                        <View style={{height:25,width:25,display:'flex',justifyContent:'center', alignItems:'center',backgroundColor:focused?'#aaaaaa':'#fff',borderRadius:20}}>
                            <Image
                                style={{height:15,width:15,alignSelf:'center'}}
                                resizeMode='contain'
                                source={!focused?Images.routine:Images.routine_alt}/>
                        </View>
                        <Text style={{marginVertical:2.5,color:focused?'#36629c':'#000',fontWeight:focused?'bold':null}}>Circuits</Text>
                    </View>
                ),
            }}/>
            <ScreenStackNavigator.Screen name="Profile" component={Profile} options={{
                headerShown:false,
                tabBarIcon:({focused}) =>(
                    <View style={{display:'flex',justifyContent:'center', alignItems:'center',width:'100%',marginHorizontal:10}}>
                        <View style={{height:25,width:25,display:'flex',justifyContent:'center', alignItems:'center',backgroundColor:focused?'#aaaaaa':'#fff',borderRadius:20}}>
                            <Image
                                style={{height:15,width:15,alignSelf:'center'}}
                                resizeMode='contain'
                                source={focused?Images.profile:Images.profile_alt}/>
                        </View>
                        <Text style={{marginVertical:2.5,color:focused?'#36629c':'#000',fontWeight:focused?'bold':null}}>Profile</Text>
                    </View>
                ),
            }}/>
        </ScreenStackNavigator.Navigator>
    );
}


export default ScreenNavigator;