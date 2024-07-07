import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../componetns/HomeHeader'

export default function BusinessConsoleScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <HomeHeader navigation={navigation} />

            <Text>BusinessConsoleScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})