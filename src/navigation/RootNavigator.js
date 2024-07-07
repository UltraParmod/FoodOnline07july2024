import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './AuthNavigator'

export default function RootNavigator() {

    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})