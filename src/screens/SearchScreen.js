import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { colors } from '../global/styles'
import SearchComponents from '../componetns/SearchComponents'
import { filterData2 } from '../global/Data'

const SCREEN_WIDTH = Dimensions.get('window').width
export default function SearchScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: '94%', alignSelf: 'center' }}>
                <SearchComponents />
            </View>

            <View>
                <FlatList
                    style={{ marginBottom: 1 }}
                    data={filterData2}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('SearchResultScreen', { item: item.name })
                            }}
                        >
                            <View style={styles.imageView}>
                                <ImageBackground
                                    style={styles.image}
                                    source={item.image}
                                >
                                    <View style={{ width: '100%', backgroundColor: 'rgba(0,0,0,.5)', height: '100%', justifyContent: 'center' }}>
                                        <Text style={{ color: colors.cardbackground, textAlign: 'center' }}>{item.name}</Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                    )}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    numColumns={2}
                    ListHeaderComponent={<Text style={styles.listHeader}> Top Category</Text>}
                    ListFooterComponent={<Footer />}
                />
            </View>
        </View>
    )
}

const Footer = ({ navigation }) => {
    return (
        <View style={{ flex: 1, marginTop: 10 }}>
            <FlatList
                style={{ marginBottom: 1 }}
                data={filterData2}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('SearchResultScreen', { item: item.name })
                        }}
                    >
                        <View style={styles.imageView}>
                            <ImageBackground
                                style={styles.imageView}
                                source={item.image}
                            >
                                <View style={{ width: '100%', backgroundColor: 'rgba(0,0,0,.5)', height: '100%', justifyContent: 'center' }}>
                                    <Text style={{ color: colors.cardbackground, textAlign: 'center' }}>{item.name}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                )}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
                ListHeaderComponent={<Text style={styles.listHeader}> More Category</Text>}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageView: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH * 0.4475,
        height: SCREEN_WIDTH * 0.4475,
        marginLeft: SCREEN_WIDTH * 0.035,
        marginBottom: SCREEN_WIDTH * 0.035
    },
    image: {
        height: SCREEN_WIDTH * 0.4475,
        width: SCREEN_WIDTH * 0.4475,
        borderRadius: 10
    },
    listHeader: {
        fontSize: 16,
        color: colors.grey2,
        paddingBottom: 10,
        marginLeft: 12
    },
    textView: {
        height: SCREEN_WIDTH * 0.4475,
        width: SCREEN_WIDTH * 0.4475,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52,52,52,0.3)'
    },

})