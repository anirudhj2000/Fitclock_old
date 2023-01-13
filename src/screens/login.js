import React ,{useState,useEffect}from 'react'
import { View, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native'

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    console.log("email ",email);
    console.log("password ",password);
    if(email == "anirudhjoshi985@gmail.com"){
      if(password == "1234"){
        props.navigation.navigate('App')
      }
    }
  }


  return (
    <View style={styles.container}>
        <Text style={styles.title}>Fitclock</Text>
        <View style={styles.login}>
          <Text style={{fontSize:20}}>Enter details to Sign in</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput value={email} onChangeText={(text) => {setEmail(text)}} placeholder='Email' styles={[styles.input]} />
        </View>
        <View style={styles.inputView}>
          <TextInput value={password} onChangeText={(text) => {setPassword(text)}} secureTextEntry={true} placeholder='Password' styles={[styles.input]} />
        </View>
        <TouchableOpacity onPress={() => {handleLoginClick()}}>
            <View style={styles.loginButton}>
              <Text>Login</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Login;

const styles = new StyleSheet.create({
    container : {
        height:'100%',
        width:'100%',
        display:'flex',
        flexDirection:'column'
    },

    login : {
      marginHorizontal:'5%',
      marginTop:'10%'
    },

    title : {
      fontSize:32,
      alignSelf:'center',
      marginVertical:'5%'
    },

    input : {
      backgroundColor:'#c7c7c7',
      width:'100%',
    },

    loginButton : {
      width:'90%',
      alignSelf:'center',
      justifyContent:'center',
      alignItems:'center',
      marginVertical:'5%',
      backgroundColor:'#4f94e3',
      padding:8,
      borderRadius:4,
    },

    inputView : {
      width:'90%',
      alignSelf:'center',
      marginVertical:'5%',
      backgroundColor:'#c7c7c7',
      borderRadius:4
    }
})