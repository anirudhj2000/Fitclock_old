import React , {useState, useEffect}from 'react'
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const sh = Dimensions.get('window').height;
const sw = Dimensions.get('window').width;

const Profile = () => {
  const [name, setName] = useState("Anirudh Joshi");
  const [email, setEmail] = useState("anirudhjoshi985@gmail.com");
  
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.profileCard}>
            <View>
                <Text style={{fontSize}}>{name[0]}</Text>
            </View>
            <View>
                <Text></Text>
                <Text></Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Profile;

const styles = new StyleSheet.create({

    container : {
        height : sh,
        width : sw,
        display:'flex',
        flexDirection:'column',
    },

    title : {
        fontSize:24,
        color:'#c7c7c7',
        marginHorizontal:'5%',
        marginTop:'5%',
    },

    profileCard : {
        height : sh*0.2,
        backgroundColor : '#6fdeb0',
        marginHorizontal:'5%',
        marginTop:'5%',
    }
})
