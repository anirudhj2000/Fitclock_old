import React , {useEffect,useState} from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet,ImageBackground,Dimensions, ScrollView} from 'react-native';
import Images from '../../Images/Images';

const sh = Dimensions.get('window').height;
const sw = Dimensions.get('window').width;

const HomeScreen = () => {
  const [name, setName] = useState("Anirudh Joshi");

  return (
    <ScrollView contentContainerStyle={{flexGrow:1}} style={styles.container}>
      <Text style={{alignSelf:'center',marginVertical:'5%',fontSize:24}}>Fitclock</Text>
      <ImageBackground source={Images.background_img} resizeMode="contain" imageStyle={{opacity:0.6,marginLeft:'40%'}} style={styles.image}>
        <View style={styles.titleView}>
          <Text style={{fontSize:20}}>Hi,</Text>
          <Text style={{fontSize:24}}>{name}</Text>
        </View>
      </ImageBackground>
      <View style={styles.menuView}>
          
      </View>
      <View style={{height:sh*0.1,width:'90%',marginHorizontal:'5%',marginTop:'7%',flexDirection:'row'}}>
                <View style={{width:'80%',marginRight:'2.5%',height:'100%',borderWidth:1,borderRadius:4,backgroundColor:'#fff',borderColor:'#aaaaaa',elevation:4,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{marginHorizontal:'5%',fontSize:16,opacity:0.6,color:'#000'}}>Try the Freehand Rest timer, for the free workouts with no time bound.</Text>
                </View>
                <TouchableOpacity onPress={() => {setToggle(true)}}>
                    <View style={{height:sh*0.085,width:sh*0.085,backgroundColor:'#fa0025',borderRadius:sh*0.15,marginVertical:sh*0.005,elevation:4}}>
                        <View style={{height:sh*0.08,width:sh*0.08,backgroundColor:'#fa0025',borderRadius:sh*0.15,borderWidth:1,borderColor:'#fff',margin:sh*0.0025,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:16,color:'#fff'}}>Rest</Text>
                        </View>
                    </View>
                </TouchableOpacity>
        </View>
        <View style={styles.streakView}>
          
        </View>
    </ScrollView>
  )
}

export default HomeScreen;

const styles = new StyleSheet.create({
    container : {
      height : '100%',
      width:'100%',
      display:'flex',
      flexDirection:'column',
      backgroundColor:'#fff',
    },

    titleView : {
      marginTop:'10%',
      width:'100%',
      marginHorizontal:'5%'
    },

    image : {
      height:sh*0.225,
      width:sw,
    },

    menuView : {
      width:'90%',
      height:sw*0.3,
      backgroundColor:'#f0f0f0',
      alignSelf:'center',
      marginTop:'-15%',
      elevation:2,
      borderRadius:8,
    },

    streakView : {
      width:'90%',
      height:sw*0.15,
      backgroundColor:'#f0f0f0',
      alignSelf:'center',
      elevation:2,
      borderRadius:4,
      marginTop:'5%'
    }
})
