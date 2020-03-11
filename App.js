import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  DeviceEventEmitter,
  NativeModules,
} from 'react-native';
const mSensorManager = NativeModules.SensorManager;
// var mSensorManager = require('NativeModules').SensorManager;
class App extends Component {
  constructor() {
    super();
    mSensorManager.startLightSensor(1000);

    DeviceEventEmitter.addListener('LightSensor', function(data) {
      console.log('Light === ', data);
    });
    // mSensorManager.stopLightSensor();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>App</Text>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
