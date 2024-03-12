import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utility/weatherType'

const Currentweather = ({ weatherData }) => {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData

  const weatherCondition = weather[0]?.main
  return (
    <SafeAreaView
      style={[
        (styles.wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor })
      ]}
    >
      <View style={styles.container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={styles.tempStyles}>{temp}</Text>
        <Text style={styles.feels}>{`Feels like ${feels_like}`}</Text>
        <RowText
          Msgone={`High : ${temp_max}`}
          Msgtwo={`Low : ${temp_min}`}
          containerStyles={styles.highlowwrapper}
          Msgonestyle={styles.highlow}
          Msgtwostyle={styles.highlow}
        />
      </View>
      <RowText
        Msgone={weather[0]?.description}
        Msgtwo={weatherType[weatherCondition]?.message}
        containerStyles={styles.bodywrapper}
        Msgonestyle={styles.description}
        Msgtwostyle={styles.message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    backgroundColor: 'pink',
    flex: 1
  },
  tempStyles: {
    fontSize: 48,
    color: 'black'
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highlow: {
    color: 'black',
    fontSize: 20
  },
  highlowwrapper: {
    flexDirection: 'row'
  },
  bodywrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: { fontSize: 48 },
  message: { fontSize: 30 }
})
export default Currentweather
