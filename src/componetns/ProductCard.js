import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/styles'
import { productData } from '../global/Data'

export default function ProductCard({ productName, price, image }) {
    return (
        <View style={styles.view1}>
            <View style={styles.view2}>
                <View style={styles.view3}>
                    <Text style={styles.text1}>{productData[0].productData[0].name}</Text>
                    <Text style={styles.text1}>ZAR {productData[0].productData[0].price}</Text>
                </View>
                <View style={styles.view4}>
                    <Image style={styles.image} source={{ uri: image }} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view1: {
        backgroundColor: 'white',
        elevation: 4,
        shadowOpacity: 0.4,
        shadowColor: 'black',
        margin: 5,
        width: 180,
        padding: 0,
        padding: 4
    },
    view2: {
        flexDirection: 'row',
        padding: 0,
        justifyContent: 'space-between'
    },
    view3: {
        justifyContent: 'space-between',
        width: 110
    },
    text1: {
        fontSize: 15,
        color: colors.grey1
    },
    view4: {
        width: 50,
        height: 50
    },
    image: {
        height: 50,
        width: 50
    }
})