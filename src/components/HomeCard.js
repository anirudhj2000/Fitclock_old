import React from 'react'
import { View, Text, StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native';
import Images from '../../Images/Images';

const sh = Dimensions.get('window').height;
const sw = Dimensions.get('window').width;

const HomeCard = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
    <View style={styles.cardBody}>
      <View style={styles.image}>
        <Image source={props.source} style={{height:sh*0.07,width:sh*0.07}}/>
      </View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default HomeCard;

const styles = new StyleSheet.create({
    cardBody : {
      height:sh*0.125,
      width:sw*0.2,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },

    image : {
      height:sh*0.070,
      width: sh*0.070,
      backgroundColor:'#9bc5c3',
      borderRadius:sh*0.07,
      justifyContent:'center',
      alignItems:'center',
      overflow:'hidden'
    },

    title : {
      fontSize:14,
      marginTop:4,
    }
})