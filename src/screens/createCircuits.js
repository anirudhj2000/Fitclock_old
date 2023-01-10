import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity,Image,Dimensions} from 'react-native';
import Images from '../../Images/Images';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const CreateCircuits = (props) => {

 const HandleBackPress = () => {
    props.navigation.pop();
 }

  return (
    <View style={styles.container}>
       <View style={styles.header}>
            <TouchableOpacity onPress={() => {HandleBackPress()}}>
                <Image source={Images.back} style={{height:20, width:20,opacity:0.5}} />
            </TouchableOpacity>
            <Text style={{fontSize:24,color:'#000',marginHorizontal:'2.5%'}}>CreateCircuits</Text>
        </View>
    </View>
  )
}

export default CreateCircuits;

const styles = new StyleSheet.create({

    container : {
        height : '100%',
        width:'100%',
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#fff',
    },

    header:{
        height:windowHeight*0.05,
        width:'90%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        marginTop:'5%',
        display:'flex',
        alignItems:'center'
    },

})