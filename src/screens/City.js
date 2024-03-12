import {
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View
} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import IconText from '../components/IconText'
import moment from 'moment'

const City = ({ weatherData }) => {
  const {
    container,
    cityname,
    citytext,
    countryname,
    populationtext,
    populationwrapper,
    risesettext,
    risesetwrapper,
    rowlayout,
    imagelayout
  } = styles

  const { name, country, population, sunrise, sunset } = weatherData
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/cityBG.jpg')}
        style={imagelayout}
      >
        <Text style={[cityname, citytext]}>{name}</Text>
        <Text style={[countryname, citytext]}>{country}</Text>
        <View style={[populationwrapper, rowlayout]}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={`Population : ${population}`}
            bodyTextStyles={populationtext}
          />
        </View>
        <View style={[risesetwrapper, rowlayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyles={risesettext}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyles={risesettext}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imagelayout: {
    flex: 1
  },
  cityname: {
    fontSize: 40
  },
  countryname: {
    fontSize: 30
  },
  citytext: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  populationwrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationtext: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red'
  },
  risesetwrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  risesettext: {
    fontSize: 20,
    color: 'white'
  },
  rowlayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
export default City
