import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/styles'

export function StatusbarTransparent() {
    return (
        <View>
            <StatusBar backgroundColor="transparent" translucent={true} />
        </View>
    )
}
export function StatusbarColor() {
    return (
        <View>
            <StatusBar barStyle='light-content' backgroundColor={colors.statusbar} translucent={false} />
        </View>
    )
}

const styles = StyleSheet.create({})