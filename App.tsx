import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const PlaceholderImage = require('./assets/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff'}}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
