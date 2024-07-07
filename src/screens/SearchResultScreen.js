import { Alert, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchResultCart from './SearchResultCart'
import { restauratData } from '../global/Data'
import { colors } from '../global/styles'
import ProductCard from '../componetns/ProductCard'


const SCREEN_WIDTH = Dimensions.get('window').width
export default function SearchResultScreen({ navigation, route }) {
    return (
        <View style={styles.container}>

            <View>

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    style={{ backgroundColor: colors.cardbackground, }}
                    data={restauratData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <SearchResultCart
                            screenWidth={SCREEN_WIDTH}
                            images={item.images}
                            averageReview={item.averageReview}
                            numberOfReview={item.numberofReview}
                            restaurantName={item.restaurantName}
                            farAway={item.farAway}
                            businessAddress={item.businessAddress}
                            OnPressRestaurantCard={() => {
                                navigation.navigate('ResturentHomeScreen', { id: index, restauratData: item.restaurantName })
                            }}
                        />




                    )}

                    ListHeaderComponent={
                        <View style={{ marginHorizontal: 10, marginVertical: 10 }} >
                            <Text style={styles.liestHeader}>{restauratData.length} Search Result {route.params.item}</Text>

                        </View>
                    }
                />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    liestHeader: {
        color: colors.grey1,
        fontSize: 18,
        paddingHorizontal: 5,

        fontWeight: 'bold'
    }
})