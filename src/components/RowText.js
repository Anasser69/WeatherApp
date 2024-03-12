import { View, Text} from 'react-native'
import React from 'react'

const RowText = (props) => {
  const { containerStyles, Msgonestyle, Msgtwostyle, Msgone, Msgtwo } = props
  
  return (
    <View style={containerStyles}>
      <Text style={Msgonestyle}>{Msgone}</Text>
      <Text style={Msgtwostyle}>{Msgtwo}</Text>
    </View>
  )
}


export default RowText
