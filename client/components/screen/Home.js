import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Home = () => {
  const [state, setState] = useState('Hallo!');

  const handleClick = async () => {
    const callBackEndAPI = async () => {
      const response = await fetch('http://localhost:5000/express_backend');
      const body = await response.json();

      if (response.status !== 200) throw Error(body.message);
      return body;
    };

    callBackEndAPI()
      .then((res) => setState(res.express))
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{state}</Text>
      <TouchableOpacity onPress={() => handleClick()}>
        <Text style={styles.btn}>Hit the Backend</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 300,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fafafa',
  },
  btn: {
    marginTop: 10,
    color: 'darkslateblue',
    padding: 10,
    backgroundColor: '#0DE0CF',
    textAlign: 'center',
  },
});
