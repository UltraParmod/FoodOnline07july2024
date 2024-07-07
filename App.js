import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from './src/global/styles'
import 'react-native-gesture-handler';
import RootNavigator from './src/navigation/RootNavigator'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle='light-content' backgroundColor={colors.statusbar} /> */}
      <RootNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
})