import React , {useState, useContext, useEffect,PureComponent} from 'react';
import {View, Text, Image, SafeAreaView, ScrollView, TextInput, StyleSheet, TouchableOpacity, TouchableHighlight, Dimensions, FlatList, Modal} from 'react-native';
import Images from '../../Images/Images';
import { calculators } from '../utils/constants';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Calculator = (props) => {

    const [toggle, setToggle] = useState(false);
    const [calcItem, setItem] = useState({});
    const [age, setAge] = useState(0);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [gender, setGender] = useState('Female')

    const HandleBackPress = () => {
        props.navigation.pop();
    }

    const handleCalculatorPress = (item) => {
        setToggle(!toggle);
        setItem(item);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {HandleBackPress()}}>
                    <Image source={Images.back} style={{height:20, width:20,opacity:0.5}} />
                </TouchableOpacity>
                <Text style={{fontSize:24,color:'#000',marginHorizontal:'2.5%'}}>Calculators</Text>
            </View>
            <View style={styles.alertBackground}>
                <Image source={Images.alert} style={{height:30,width:30}}/>
                <Text numberOfLines={4} style={{fontSize:10,width:'80%',marginLeft:'2.5%'}}>Please Note that these calculators are for information purpose only, please take consulation from professionals before starting any diets or routines.</Text>
            </View>
            <View style={styles.body}>
                <ScrollView style={{width:'100%'}}>
                    {
                        calculators.map((item,key) => {
                            return(
                                <TouchableOpacity onPress={() => {handleCalculatorPress(item)}}>
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
                            <Text style={{marginHorizontal:'5%',fontSize:24}}>{calcItem.name}</Text>
                            <View style={[styles.menuView,{marginTop:'7.5%'}]}>
                                <Text style={styles.titleItem}>Age: </Text>
                                <View style={{marginHorizontal:'5%',height:'100%',width:'30%',borderRadius:4,borderWidth:1,borderColor:'#c7c7c7'}}>
                                    <TextInput keyboardType='number-pad' value={age} placeholder={'age 2-110'} style={{paddingHorizontal:8}} onChangeText={(val) => setAge(val)} />
                                </View>
                            </View>
                            <View style={[styles.menuView]}>
                                <Text style={styles.titleItem}>Gender: </Text>
                            </View>
                            <View style={[styles.menuView]}>
                                <Text style={styles.titleItem}>Height: </Text>
                                <View style={{marginHorizontal:'5%',height:'100%',width:'50%',borderRadius:4,borderWidth:1,borderColor:'#c7c7c7'}}>
                                    <TextInput keyboardType='decimal-pad' value={height} placeholder={'range 2-110'} style={{paddingHorizontal:8}} onChangeText={(val) => setHeight(val)} />
                                </View>
                                <Text>CM</Text>
                            </View>
                            <View style={[styles.menuView]}>
                                <Text style={styles.titleItem}>Weight: </Text>
                                <View style={{marginHorizontal:'5%',height:'100%',width:'30%',borderRadius:4,borderWidth:1,borderColor:'#c7c7c7'}}>
                                    <TextInput keyboardType='decimal-pad' value={weight} placeholder={'range 2-1'} style={{paddingHorizontal:8}} onChangeText={(val) => setWeight(val)} />
                                </View>
                                <Text>KG</Text>
                            </View>
                            <View style={{display:'flex',flexDirection:'row',marginHorizontal:'5%',marginTop:'5%'}}>
                                <View style={{borderWidth:1,borderColor:'#3d91ff',width:'20%',justifyContent:'center',alignItems:'center',padding:8,borderRadius:2,marginRight:'5%'}}>
                                    <Text style={{color:'#3d91ff'}}>Reset</Text>
                                </View>
                                <View style={{backgroundColor:'#3d91ff',width:'20%',justifyContent:'center',alignItems:'center',padding:8,borderRadius:2}}>
                                    <Text style={{color:'#fff'}}>Submit</Text>
                                </View>
                            </View>
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
    },

    alertBackground : {
        marginTop:'5%',
        width:'90%',
        height:'10%',
        backgroundColor:'#fcd87c',
        alignSelf:'center',
        borderRadius:8,
        borderWidth:1,
        borderColor:'#fab914',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },

    menuView : {
        marginHorizontal:'5%',
        marginTop:'5%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        height:40,
    },

    titleItem : {
        fontSize:14,
        width:'15%',
        textAlign:'right'
    }

});