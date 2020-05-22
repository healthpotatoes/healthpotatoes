import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Home = () => {
  const [state, setstate] = useState('Hallo!')

  const handleClick = async () => {
    const callBackEndAPI = async () => {
      const response = await fetch('/express_backend')
      const body = await response.json()
      console.log('it hit')
      if (response.status !== 200) throw Error(body.message)
      return body;
    }
    console.log('it hit')
    callBackEndAPI()
    .then(res => setState(res.express))
    .catch(err => console.log(err))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{state}</Text>
      <Button title="Hit the Backend" onPress={() => handleClick} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 300
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000'
  }, 
  btn : {
    padding: 10,
    backgroundColor: 'blue'
  }
})
