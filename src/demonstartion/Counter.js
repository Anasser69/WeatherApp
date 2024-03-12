import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

const Counter = () => {
  let [count, setCount] = useState(0)
  let [newcount, setnewCount] = useState(0)
  
  useEffect(() => {console.log(`count change`)
return()=>{
  console.log('useeffect cleanup')
}
},[count])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Count : ${count}`}</Text>
      <Button
        color={'red'}
        title={'increase the count'}
        onPress={() => setCount(count + 1)}
      />
      <Button
        color={'green'}
        title={'Decrease the count'}
        onPress={() => setCount(count - 1)}
      />
      <Button
        color={'red'}
        title={'increase the count'}
        onPress={() => setnewCount(count + 1)}
      />
      <Button
        color={'green'}
        title={'Decrease the count'}
        onPress={() => setnewCount(count - 1)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'orange' },
  title: { alignSelf: 'center', fontSize: 25, marginTop: 25 }
})

export default Counter
