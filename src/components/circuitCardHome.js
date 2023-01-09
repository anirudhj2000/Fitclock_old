import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet,Dimensions} from 'react-native';

const sh = Dimensions.get('window').height;
const sw = Dimensions.get('window').width;

const CircuitCardHome = props => {
  return (
    <View style={styles.cardContainer}>

    </View>
  )
}


export default CircuitCardHome;

const styles = new StyleSheet.create({
    cardContainer : {
        width:sw*0.42,
        height:sh*0.2,
        backgroundColor:'#c7c7c7',
        borderRadius:4,
        marginRight:'5%',
        marginVertical:'2.5%'
    }
})