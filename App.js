import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import Counter from './src/demonstartion/Counter'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'
import { useGetweather } from './src/hooks/useGetweather'
import Erroritem from './src/components/Erroritem'

const App = () => {
  const [loading, error, weather] = useGetweather()

  // console.log(loading, error, weather)

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  if (loading) {
    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size={'large'} color={'blue'} />
        ) : (
          <Erroritem />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App
