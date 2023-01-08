import React from 'react';
import { View, Text} from 'react-native';

const WeekdayIcon = (props) => {
  return (
    <View style={{height:24,width:24,borderRadius:24,backgroundColor:props.statusColor,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:12}}>{props.weekday}</Text>
    </View>
  )
}

export default WeekdayIcon