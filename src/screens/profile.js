import React , {useState, useContext, useEffect,PureComponent} from 'react';
import {View, Text, Image, SafeAreaView, ScrollView, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, Linking} from 'react-native';
import Images from '../../Images/Images';
import profileItems from '../utils/profileItems';
import LinearGradient from 'react-native-linear-gradient';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ProfilePage = (props) => {
    const [name, setName] = useState("Anirudh Joshi");
    const [email, setEmail] = useState("anirudhjoshi985@gmail.com")
    const [sessions, setSessions] = useState(25)
    const [streak, setStreak] = useState(9)


    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize:32}}>Profile</Text>
            </View>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 2}} style={[styles.profileCard,{elevation:2}]} colors={['#8e9eab', '#eef2f3']}>
            <View style={[styles.profileCard,{width:'100%'}]}>
                <View style={{height:windowHeight*0.1,width:windowHeight*0.1,borderRadius:windowHeight*0.05,backgroundColor:'#fff',marginHorizontal:'5%',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:48,color:'#000',opacity:0.7,marginBottom:5}}>{name[0]}</Text>
                </View>
                <View style={{height:'100%',width:windowWidth*0.7,flexDirection:'column',justifyContent:'center'}}>
                    <View style={{display:'flex',flexDirection:'row',alignItems:'baseline'}}>  
                        <Text style={{fontSize:20,marginHorizontal:'2.5%',opacity:0.8}}>{name}</Text>
                        <TouchableOpacity onPress={() => {props.navigation.navigate('EditProfile')}}>
                            <Text style={{color:'#30a8f2',textDecorationLine:'underline'}}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <Text style={{fontSize:16,marginHorizontal:'2.5%',opacity:0.4}}>{email}</Text>
                    <View style={{width:'100%',marginVertical:10,flexDirection:'row'}}>
                        <Text style={{marginHorizontal:'2.5%'}}>⌛ {sessions} Sessions</Text>
                        <View style={{width:1,borderWidth:0.5,opacity:0.5}}/>
                        <Text style={{marginHorizontal:'2.5%'}}>⭐ {streak} Day Streak</Text>
                    </View>
                </View>
            
            </View>
            </LinearGradient>

            <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} style={[styles.profileOptions,{elevation:2}]} colors={['#00467F', '#A5CC82']}>
            <View style={[styles.profileOptions,{width:'100%'}]}>
                {
                    profileItems.map((item,key) => {
                        return(
                            <>
                                    {key!=0 ?
                                    <View style={{borderWidth:1,marginHorizontal:'5%',opacity:0.1}} />
                                    :null}
                                    <TouchableOpacity>
                                        <View style={styles.profileItemCard}>
                                            <View style={{justifyContent:'center'}}>
                                                <Image style={{height:25,width:25,marginHorizontal:'2.5%'}} source={item.icon} />
                                            </View>
                                            <View style={{marginHorizontal:'2.5%',justifyContent:'center'}}>
                                                <Text style={{fontSize:20,opacity:0.7,color:'#fff'}}>{item.name}</Text>
                                                <Text style={{fontSize:12,marginTop:2.5,color:'#fff'}}>{item.description}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                            </>
                        )
                    })
                }
            </View>
            </LinearGradient>

            <View style={styles.footer}>
                <Text style={{fontSize:14,opacity:0.5}}>Crafted with </Text>
                <Text style={{fontSize:14 }}>❤️</Text>
            </View>

            <View style={styles.footer }>
                <TouchableOpacity style={{marginHorizontal:'2.5%'}} onPress={() => {Linking.openURL('www.google.com')}}>
                    <Text style={{fontSize:16,color:'#0281f7'}}>About</Text>
                </TouchableOpacity>
                <View style={{borderRightWidth:1,backgroundColor:'#c7c7c7',opacity:0.2}}/>
                <TouchableOpacity style={{marginHorizontal:'2.5%'}} onPress={() => {Linking.openURL('www.google.com')}}>
                    <Text style={{fontSize:16,color:'#0281f7'}}>Terms and Conditions</Text>
                </TouchableOpacity>
                <View style={{borderRightWidth:1,backgroundColor:'#c7c7c7',opacity:0.2}}/>
                <TouchableOpacity style={{marginHorizontal:'2.5%'}} onPress={() => {Linking.openURL('www.google.com')}}>
                    <Text style={{fontSize:16,color:'#0281f7'}}>Privacy policy</Text>
                </TouchableOpacity>
            </View>
        </View>
        <ImageBackground source={Images.background_bottom} resizeMode="stretch" style={{height:windowHeight*0.1,width:'100%',
        marginBottom:'15%'}}/>
        </ScrollView>
    )
}

export default ProfilePage;

const styles = StyleSheet.create({
    container : {
        height:'100%',
        backgroundColor:'#fff',
        flex:1,
        alignContent:'center'
    },

    header:{
        height:windowHeight*0.05,
        width:'90%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        marginTop:'5%',
    },

    profileCard : {
        width:'90%',
        height:windowHeight*0.15,
        flexDirection:'row',
        alignSelf:'center',
        borderRadius:8,
        marginVertical:'5%',
        alignItems:'center'
    },

    profileOptions : {
        width:'90%',
        height:windowHeight*0.5,
        alignSelf:'center',
        borderRadius:8,
        justifyContent:'center',
        marginVertical:'2.5%'
    },

    footer:{
        alignSelf:'center',
        flexDirection:'row',
        marginVertical:'2.5%',
        justifyContent:'center',
        zIndex:2,
    },

    profileItemCard : {
        width:'85%',
        alignSelf:'center',
        height:windowHeight*0.05,
        marginVertical:windowHeight*0.035,
        flexDirection:'row',
    }

    
})