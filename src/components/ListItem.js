import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utility/weatherType'
import moment from 'moment'

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props
  const { item, temp, date, dateTextwrapper } = styles
  return (
    <View style={item}>
      <Feather name={weatherType[condition]} size={50} color={'white'} />
      <View style={dateTextwrapper}>
        <Text style={date}>{(moment(dt_txt).format('dddd'))}</Text>
        <Text style={date}>{(moment(dt_txt).format('h:mm:ss a'))}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'royalblue'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  dateTextwrapper: {
    flexDirection: 'column'
  }
})

export default ListItem
