import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, FlatList, ImageBackground,TouchableOpacity} from 'react-native';
import CircuitCardHome from '../components/circuitCardHome';
import Images from '../../Images/Images';

const Circuits = () => {
  return (
   <View style={styles.container}>
        <View style={styles.title}>
            <Text style={{fontSize:32}}>Circuits</Text>
        </View>
        <View style={styles.homeCircuits} >
          <FlatList
            data={[1,2,3,4,5,6]}
            renderItem={({ item }) => (
              <CircuitCardHome/>
            )}
            //Setting the number of column
            style={{flexGrow:0}}
            numColumns={2}
            keyExtractor={(item, index) => index}
          />
        </View>
        <TouchableOpacity >
            <ImageBackground style={{height:64,width:64,position:'absolute',bottom:0,right:0,marginTop:'-10%',marginHorizontal:'2%',elevation:4}} source={Images.plus} />
        </TouchableOpacity>
   </View>
  )
}

export default Circuits

const styles = new StyleSheet.create({
    container : {
        height:'100%',
        width:'100%',
        display:'flex',
        flexDirection:'column',
    },

    title : {
        marginHorizontal:'5%',
        marginTop:'5%'
    },

    homeCircuits : {
        width:'90%',
        alignSelf:'center',
        marginTop:'5%',
        display:'flex',
        flexDirection:'column',
        zIndex:2,
        marginBottom:'20%'
    },
})