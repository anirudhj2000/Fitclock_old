import React from 'react'
import { View, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native'

const Login = (props) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={{}} onPress={() => {props.navigation.navigate('App')}}>
            <Text style={{color:'#000'}}>Login</Text>
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
    }
})