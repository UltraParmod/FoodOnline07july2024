import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors, parameters } from '../global/styles'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'


export default function HomeHeader({ navigation }) {
    const [count, setCount] = useState(0)

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => {
                navigation.toggleDrawer()
            }}>
                <Feather name='menu' size={30} color={colors.cardbackground} />
            </TouchableOpacity>

            <View>
                <Text style={{ color: colors.cardbackground, fontSize: 20, fontWeight: '700' }}>𝙊𝙣𝙡𝙞𝙣𝙚𝙁𝙤𝙤𝙙{' '}<Text style={{ backgroundColor: 'green' }}>{' '}𝙓𝙋𝙧𝙚𝙨𝙨{' '}</Text></Text>
            </View>
            <View>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Entypo name='shopping-cart' size={28} color={colors.cardbackground} />
                    <View style={{ paddingHorizontal: 4, paddingVertical: 0, backgroundColor: 'red', width: 18, height: 18, borderRadius: 18, position: 'relative', left: -10, justifyContent: 'center', }}>

                        <Text style={{ color: '#fff', fontWeight: '600' }} >{count}</Text>

                    </View>
                </TouchableOpacity>


            </View >

        </View >
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.button,
        height: parameters.headerHeight,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15


    }
})