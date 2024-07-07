import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../global/styles'
import Entypo from 'react-native-vector-icons/Entypo';

export default function FoodCard(
    {
        onPressFoodCard,
        restaurantName,
        deliveryAvailable,
        discountAvailable,
        discountPercent,
        numberOfReview,
        bussinessAddress,
        farAway,
        averageReview,
        images,
        screenWidth

    }
) {
    return (


        <TouchableOpacity>
            <View style={{ ...styles.cardView, width: screenWidth }}>

                <Image
                    style={{ ...styles.image, width: screenWidth }}
                    source={{ uri: images }}
                />



                <View>
                    <View>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.distance}>
                            <Entypo name="location-pin" size={18} color={colors.grey2} />
                            <Text style={styles.min}> {farAway} Min</Text>
                        </View>

                        <View style={{ flex: 9, flexDirection: 'row' }}>
                            <Text style={styles.address}>{bussinessAddress}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.review}>
                    <Text style={styles.average}>{numberOfReview}</Text>
                    <Text style={styles.average}>{averageReview} reviews </Text>
                </View>
            </View>




        </TouchableOpacity>


    )
}

const styles = StyleSheet.create({
    cardView: {
        marginHorizontal: 9,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderWidth: 1,
        borderColor: colors.grey4,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        paddingBottom: 5
    },
    image: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 150
    },
    restaurantName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.grey1,
        marginTop: 5,
        marginLeft: 10
    },
    distance: {
        flex: 4,
        flexDirection: 'row',
        borderRightColor: colors.grey4,
        paddingHorizontal: 5,
        borderRightWidth: 1
    },
    min: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: 5,
        color: colors.grey3
    },
    address: {
        fontSize: 12,
        paddingTop: 5,
        color: colors.grey2,
        paddingHorizontal: 10
    },
    review: {
        position: 'absolute',
        top: 0,
        right: 10,
        backgroundColor: 'rgba(0,0,0,.6)',
        paddingHorizontal: 3,
        paddingVertical: 1,
        alignItems: 'center',
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 12,
        marginRight: -13

    },
    average: {
        color: 'white',
        fontSize: 14,
        padding: 1,
        fontWeight: 'bold',
        marginTop: -3,


    }
})