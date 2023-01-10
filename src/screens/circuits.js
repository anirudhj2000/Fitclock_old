import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, FlatList, ImageBackground,TouchableOpacity,Dimensions} from 'react-native';
import CircuitCardHome from '../components/circuitCardHome';
import Images from '../../Images/Images';


const sh = Dimensions.get('window').height;
const sw = Dimensions.get('window').width;

const Circuits = (props) => {
  return (
    <View style={{height:'100%',width:'100%'}}>
        <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{fontSize:32}}>Circuits</Text>
                </View>
                <View style={styles.homeCircuits} >
                <FlatList
                    data={[1,2,3,4,5,69,9,91,92,93,94,96,77,8,]}
                    renderItem={({ item }) => (
                    <CircuitCardHome title={`Circuit ${item}`}/>
                    )}
                    //Setting the number of column
                    style={{flexGrow:1}}
                    windowSize={6}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    keyExtractor={(item, index) => index}
                />
                </View>
                
        </View>
        <TouchableOpacity style={{position:'absolute',right:0,bottom:0,marginBottom:'10%',zIndex:2}} onPress={() => {props.navigation.navigate('CreateCircuits')}}>
            <ImageBackground style={{height:sh*0.075,width:sh*0.075,marginHorizontal:'3%',elevation:4}} source={Images.plus} />
        </TouchableOpacity>
   </View>
  )
}

export default Circuits

const styles = new StyleSheet.create({
    container : {
        height:'auto',
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
        marginTop:'2.5%',
        display:'flex',
        flexDirection:'column',
    },
})