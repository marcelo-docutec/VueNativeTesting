import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Camera from './components/Camera';
import Hello from './components/Hello';
import Geolocalization from './components/Geolocalization';
import Articles from './components/Articles';
// import DigitalSignature from './components/DigitalSignature';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Avalith!</Text>
        {/* <Hello /> */}
        {/* <Geolocalization /> */}
        {/* <Articles /> */}
        <Camera />
        {/* <DigitalSignature /> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
