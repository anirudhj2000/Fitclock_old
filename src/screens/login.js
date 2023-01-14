import React ,{useState,useEffect}from 'react'
import { View, TextInput, Text, TouchableOpacity, StyleSheet,Image} from 'react-native'

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
        <Image source={Images.logo} resizeMode='contain' style={{width:'80%',height:'10%',display:'flex',alignSelf:'center',marginVertical:'10%'}}/>
        <View style={styles.login}>
          <Text style={{fontSize:20,color:'#000'}}>Enter details to sign in</Text>
        </View>
        <View style={styles.inputUI}>
            <Text style={{color:'#fff'}}>Email</Text>
            <View style={styles.inputView}>
              <TextInput value={email} onChangeText={(text) => {setEmail(text)}} placeholder='Email' styles={[styles.input]} />
            </View>
            <Text style={{color:'#fff',marginTop:'5%'}}>Password</Text>
            <View style={styles.inputView}>
              <TextInput value={password} onChangeText={(text) => {setPassword(text)}} secureTextEntry={true} placeholder='Password' styles={[styles.input]} />
            </View>
            <TouchableOpacity style={{marginTop:8}} onPress={() => {}}>
              <Text style={{textDecorationLine:'underline',color:'#fff'}}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => {handleLoginClick()}}>
            <View style={styles.loginButton}>
              <Text style={{color:'#fff',fontSize:16}}>Login</Text>
            </View>
        </TouchableOpacity>
        <View style={{marginHorizontal:'5%',flexDirection:'row'}}>
            <Text>Don't have a account?</Text>
            <TouchableOpacity  onPress={() => {}}>
                <Text style={{textDecorationLine:'underline',color:'#3366CC',marginHorizontal:4}}>Sign up</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Login;

const styles = new StyleSheet.create({
    container : {
        height:'100%',
        width:'100%',
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#fff'
    },

    login : {
      marginHorizontal:'5%',
      marginTop:'10%'
    },

    title : {
      fontSize:32,
      alignSelf:'center',
      marginVertical:'10%',
      color:'#000'
    },

    inputUI : {
      marginHorizontal:'5%',
      padding:16,
      backgroundColor:'#0d2852',
      marginVertical:'5%',
      borderRadius:4,
    },  

    input : {
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
      width:'100%',
      alignSelf:'center',
      marginVertical:'2.5%',
      backgroundColor:'#fff',
      borderRadius:4
    }
})