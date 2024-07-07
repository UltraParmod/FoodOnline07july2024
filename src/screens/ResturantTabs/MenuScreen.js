import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../global/styles'
import { specialData } from '../../global/Data'

const Data = [
    {
        id: 1,
        name: 'pamord'
    },
    {
        id: 2,
        name: 'pamord'
    },
    {
        id: 3,
        name: 'pamord'
    }
]
export default function MenuScreen() {
    const handlePress = () => {
        // navigation.navigate('ProductSec')
    }
    return (
        <View style={styles.container}>
            <View>
                {
                    specialData.map((items) =>
                        <View key={items.key} style={styles.view1}>
                            <TouchableOpacity onPress={handlePress}>
                                <View>
                                    <Text>{items.title}lll</Text>

                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }


            </View>



            <Text style={{ color: 'red' }}> MenuScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,

    },
    view1: {
        paddingHorizontal: 10
    },
    view2: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        padding: 10,
        borderBottomColor: colors.grey5
    }
})