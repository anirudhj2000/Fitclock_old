import React , {useEffect,useState} from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet,ImageBackground,Dimensions, ScrollView, FlatList} from 'react-native';
import Images from '../../Images/Images';
import Weekly from '../components/weekly';
import CircuitCardHome from '../components/circuitCardHome';
import HomeCard from '../components/HomeCard';
import { menuItems } from '../utils/constants';

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
          {menuItems.map((item) => {
              return(
                <HomeCard source={item.image} title={item.title} />
              )
          })}
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
          {/* <Text style={{fontSize:16,marginHorizontal:'2.5%',marginVertical:8}}>Streak 🔥</Text> */}
          <Weekly style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}/>
        </View>
        <View style={styles.homeCircuits} >
          <Text style={{fontSize:25}}>Recent Circuits</Text>
          <FlatList
            data={[1,2,3,4,5,6]}
            renderItem={({ item }) => (
              <CircuitCardHome/>
            )}
            //Setting the number of column
            numColumns={2}
            keyExtractor={(item, index) => index}
          />
        </View>
        <ImageBackground source={Images.background_bottom} resizeMode="stretch" style={{height:sh*0.1,width:'100%',
        marginBottom:'15%',marginTop:'-20%'}}/>
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
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
    },

    streakView : {
      width:'90%',
      height:sh*0.05,
      backgroundColor:'#f0f0f0',
      alignSelf:'center',
      elevation:2,
      borderRadius:4,
      marginTop:'5%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center'
    },

    homeCircuits : {
        width:'90%',
        alignSelf:'center',
        marginTop:'5%',
        display:'flex',
        flexDirection:'column',
        zIndex:2,
        marginBottom:'20%'
    }
})
