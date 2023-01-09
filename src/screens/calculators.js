import React , {useState, useContext, useEffect,PureComponent} from 'react';
import {View, Text, Image, SafeAreaView, ScrollView, TextInput, StyleSheet, TouchableOpacity, TouchableHighlight, Dimensions, FlatList, Modal} from 'react-native';
import Images from '../../Images/Images';
import { calculators } from '../utils/constants';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Calculator = (props) => {

    const [toggle, setToggle] = useState(false);

    const HandleBackPress = () => {
        props.navigation.pop();
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {HandleBackPress()}}>
                    <Image source={Images.back} style={{height:20, width:20,opacity:0.5}} />
                </TouchableOpacity>
                <Text style={{fontSize:24,color:'#000',marginHorizontal:'2.5%'}}>Calculators</Text>
            </View>
            <View style={styles.body}>
                <ScrollView style={{width:'100%'}}>
                    {
                        calculators.map((item,key) => {
                            return(
                                <TouchableOpacity onPress={() => {setToggle(true)}}>
                                    <View style={styles.card}>
                                        <View style={{width:'70%',height:'100%',marginHorizontal:'5%',marginVertical:'5%',flexDirection:'column'}}>
                                            <Text style={{fontSize:24,color:'#fff'}}>{item.name}</Text>
                                            <Text style={{fontSize:14,color:'#fff',marginTop:5}}>{item.description}</Text>
                                        </View>
                                        <View style={{height:'60%',borderWidth:1,borderColor:'#c7c7c7',alignSelf:'center', opacity:0.6}}/>
                                        <View style={{height:'100%',width:'20%',justifyContent:'center',alignItems:'center'}}>
                                            <Image source={Images.right_arrow} style={{height:40,width:40,opacity:0.3}} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>

            <Modal 
          transparent={true}
          visible={toggle} 
          animationType={'fade'} >
                <View style={styles.restModal}>
                    <View style={{height:windowHeight*0.8,marginTop:windowHeight*0.2,backgroundColor:'#fff',borderTopLeftRadius:16,borderTopRightRadius:16,borderWidth:1,borderColor:'#c7c7c7',elevation:8}}>
                        <TouchableOpacity style={{alignSelf:'flex-end',marginHorizontal:'5%',marginTop:'5%'}} onPress={() => {setToggle(false) }}>
                            <Image source={Images.cross} style={{width:20,height:20}}/>
                        </TouchableOpacity>
                       
                    </View>
                </View>
        </Modal>

        </View>
    )
}

export default Calculator;

const styles = StyleSheet.create({
    container : {
        height:'100%',
        backgroundColor:'#fcfcfc',
        flex:1,
        alignContent:'center',
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

    body : {
        width:'100%',
        height : '100%',
        flexDirection:'column',
        marginTop:'2.5%'
    },

    card : {
        width:windowWidth*0.90,
        height:windowHeight*0.15,
        flexDirection:'row',
        marginVertical:'2.5%',
        marginHorizontal:'5%',
        borderRadius:12,
        backgroundColor:'#abc112',
        elevation:4,
    },

    restModal : {
        height:'100%',
        width:'100%',
        alignSelf:'flex-end',
        backgroundColor:'rgba(0, 0, 0, 0.5)' ,
    }

});