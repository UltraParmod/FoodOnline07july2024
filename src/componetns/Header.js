import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, parameters } from '../global/styles'
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header({ title, type, navigation }) {


    return (
        <View style={styles.header}>

            <TouchableOpacity onPress={() => { navigation ? navigation.goBack() : '' }}

            >
                <Icon name={type} size={30} color={colors.headerText} />
            </TouchableOpacity>

            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.button,
        height: parameters.headerHeight,
        paddingLeft: 15

    },
    headerText: {
        color: colors.headerText,
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 20
    }

})