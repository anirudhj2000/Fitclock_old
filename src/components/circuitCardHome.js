import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet,Dimensions,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Images/Images';

const sh = Dimensions.get('window').height;
const sw = Dimensions.get('window').width;

const CircuitCardHome = props => {
  return (
    <TouchableOpacity>
        
        <View style={styles.cardContainer}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{height:'100%',width:'100%',borderRadius:4,padding:12}} colors={['#616161', '#9bc5c3']}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.time}>
                <Image style={{height:12,width:12,tintColor:'#c7c7c7'}} source={Images.clock}/>
                <Text style={{color:'#fff',fontSize:12}}>28 min</Text>
            </View>
            <View style={styles.circuitInfo}>
                <View style={{display:'flex',flexDirection:'row',alignItems:'baseline'}}>
                    <Image source={Images.exercises_1} style={{height:24,width:24,tintColor:'#c7c7c7'}}/>
                    <Text style={{color:'#fff'}}>x{9}</Text>
                </View>
                <View style={{display:'flex',flexDirection:'row',alignItems:'baseline',bottom:0,height:'100%'}}>
                    <Image source={Images.rest} style={{height:20,width:20,tintColor:'#c7c7c7'}}/>
                    <Text style={{color:'#fff'}}> x{4}</Text>
                </View>
            </View>
        </LinearGradient>
        </View>
        
    </TouchableOpacity>
  )
}


export default CircuitCardHome;

const styles = new StyleSheet.create({
    cardContainer : {
        width:sw*0.42,
        height:sh*0.2,
        borderRadius:4,
        marginRight:'5%',
        marginVertical:'2.5%'
    },

    title : {
        fontSize:24,
        color:'#fff'
    },

    time : {
        width:'50%',
        borderRadius:4,
        marginVertical:8,
        marginHorizontal:4,
        flexDirection:'row',
        display:'flex',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.3)',
        padding:4,
        justifyContent:'space-around'
    },

    circuitInfo:{
        width:'100%',
        height:36,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding:4,
        alignSelf:'baseline',
        marginTop:'20%',
        borderRadius:4,
        justifyContent:'space-around',
        alignItems:'baseline',
        display:'flex',
        flexDirection:'row'
    }
})