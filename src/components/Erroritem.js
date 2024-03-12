import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const Erroritem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMSG}>Sorry Something Went Wrong</Text>
      <Feather name={'frown'} size={100} color={'white'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorMSG: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginHorizontal:10
  }
})

export default Erroritem
