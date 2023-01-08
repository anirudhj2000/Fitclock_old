import React from 'react'
import { View } from 'react-native'
import Weekdays from '../utils/constants';
import WeekdayIcon from './weekdayIcon';

const Weekly = (props) => {
  
  let activeDayColor = "#4acf6e";
  let inactiveDayColor = "#d90f3b";
  let defaultColor = "#c7c7c7"
  return (
    <View style={props.style}>
        {Weekdays.map((item) => {
            return(
                <WeekdayIcon weekday={item} statusColor={defaultColor}/>
            )
        })}
    </View>
  )
}

export default Weekly;