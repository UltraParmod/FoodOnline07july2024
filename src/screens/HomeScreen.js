import {
    Dimensions,

    FlatList,

    Image,
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import HomeHeader from '../componetns/HomeHeader';
import { colors } from '../global/styles';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { filterData, restauratData } from '../global/Data';
import FoodCard from '../componetns/FoodCard';
import Countdown from 'react-native-countdown-component'



const SCREEN_WIDTH = Dimensions.get('window').width
const HomeScreen = ({ navigation }) => {
    const [delivery, setDelivery] = useState(true);
    const [indexcheck, setIndexCheck] = useState('0')
    return (
        <View style={styles.container}>
            {/* <StatusBar
                translucent
                barStyle='light-content'
                backgroundColor='rbga(255,140,82,1)'
            /> */}
            <HomeHeader navigation={navigation} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[0]}>
                <View style={{ backgroundColor: colors.cardbackground, paddingBottom: 20 }}>
                    <View
                        style={{
                            marginTop: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                setDelivery(true);
                            }}>
                            <View
                                style={{
                                    ...styles.deliveryButton,
                                    backgroundColor: delivery ? colors.button : colors.grey4,
                                }}>
                                <Text style={styles.deliveryText}>Delivery</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setDelivery(false);
                            }}>
                            <View
                                style={{
                                    ...styles.deliveryButton,
                                    backgroundColor: delivery ? colors.grey4 : colors.button,
                                }}>
                                <Text style={styles.deliveryText}>Pick Up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                        alignItems: 'center',
                        marginVertical: 15,
                    }}>

                    <View style={styles.filterView}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Entypo name="location-pin" size={30} color={colors.grey1} />
                            <Text style={{ marginLeft: 5, fontWeight: '600', color: colors.grey1 }}>22 Beessie Street</Text>
                        </View>
                        <Text>{' '}</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: colors.cardbackground,
                                borderRadius: 20,
                                paddingHorizontal: 10,

                                marginLeft: 18
                            }}>
                            <MaterialCommunityIcons
                                name="clock-time-two"
                                size={30}
                                color={colors.grey1}
                            />
                            <Text style={{ marginLeft: 5, fontWeight: '600', color: colors.grey1 }}>Now</Text>
                        </View>
                    </View>
                    <View>
                        <MaterialCommunityIcons
                            name="tune"
                            size={32}
                            color={colors.grey1}
                        />
                    </View>
                </View>

                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Categories</Text>
                </View>
                <View style={{ paddingVertical: 10 }}>
                    <FlatList
                        data={filterData}
                        keyExtractor={(item) => item.id}
                        extraData={indexcheck}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <Pressable onPress={() => {
                                setIndexCheck(item.id)
                            }}>
                                <View style={indexcheck === item.id ? { ...styles.smallCartSelected } : { ...styles.smallCart }}>
                                    <Image source={item.image} style={{ width: 48, height: 48, borderRadius: 24, resizeMode: 'cover', elevation: 5 }} />
                                </View>
                                <View style={{ alignItems: 'center', marginTop: -5 }}>

                                    <Text style={indexcheck === item.id ? { ...styles.selectedtxt } : { ...styles.selectTxt }}>{item.name}</Text>
                                </View>
                            </Pressable>
                        )}
                    />
                </View>
                <View style={[styles.headerTextView, { marginVertical: 10 }]}>
                    <Text style={styles.headerText}>Free Delivery</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 15, fontSize: 15, fontWeight: 'bold', marginTop: -10, marginRight: 5, color: 'black' }}>Options Changing in </Text>
                    <Countdown
                        until={3600}
                        size={14}
                        digitStyle={{ backgroundColor: colors.lightGreen }}
                        // digitTxtStyle={{ color: colors.cardbackground }}
                        timeToShow={['M', 'S']}
                        timeLabels={{ m: 'Min', s: 'Sec' }}

                    />
                </View>
                <View style={{ marginHorizontal: 10 }} >
                    <FlatList
                        style={{ marginVertical: 10 }}
                        data={restauratData}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View >

                                <FoodCard screenWidth={SCREEN_WIDTH * 0.8}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    bussinessAddress={item.businessAddress}
                                    averageReview={item.averageReview}

                                    numberOfReview={item.numberofReview}

                                />
                            </View>
                        )}
                    />

                </View>

                <View style={[styles.headerTextView, { marginVertical: 10 }]}>
                    <Text style={styles.headerText}>Promotions available</Text>
                </View>

                <View style={{ marginHorizontal: 10 }} >
                    <FlatList
                        style={{ marginVertical: 10 }}
                        data={restauratData}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View >

                                <FoodCard screenWidth={SCREEN_WIDTH * 0.8}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    bussinessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberofReview}

                                />
                            </View>
                        )}
                    />

                </View>


                <View style={[styles.headerTextView, { marginVertical: 10 }]}>
                    <Text style={styles.headerText}>Restaurant in your Area</Text>
                </View>

                <View style={{ width: SCREEN_WIDTH, }}>


                    {

                        restauratData.map(item => (
                            <View key={item.id} style={{ paddingBottom: 20, }}>
                                <FoodCard screenWidth={SCREEN_WIDTH * 0.95}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    bussinessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberofReview}

                                />
                            </View>
                        ))

                    }
                </View>


            </ScrollView >
            {delivery &&
                <View style={styles.floatButton}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('ReasturentMapScreen')
                            setDelivery(false)
                        }}
                    >
                        <Entypo name="location-pin" size={28} color={colors.button} />
                        <Text style={{ color: colors.grey2, fontWeight: 'bold', fontSize: 14 }}>Map</Text>
                    </TouchableOpacity>
                </View>
            }
        </View >
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    deliveryButton: {
        paddingHorizontal: 30,
        borderRadius: 15,
        paddingVertical: 5,
    },
    deliveryText: {
        fontSize: 17,
        textAlign: 'center',
        fontWeight: '700',
        color: 'white'
    },
    filterView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.grey4,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    headerText: {
        color: colors.grey1,
        fontSize: 20,
        fontWeight: '700',
        paddingLeft: 25
    },
    headerTextView: {
        backgroundColor: colors.grey5,
        paddingVertical: 5
    },
    smallCart: {
        borderRadius: 30,
        backgroundColor: colors.grey5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 60,
        borderRadius: 30,
        margin: 10,
        height: 60,
        elevation: 2
    },
    smallCartSelected: {
        borderRadius: 30,
        backgroundColor: colors.button,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 60,
        borderRadius: 30,
        margin: 10,
        height: 60,
        elevation: 4
    },
    selectedtxt: {
        color: colors.button,
        fontSize: 13,
        fontWeight: '400'
    },
    selectTxt: {
        color: colors.grey1,
        fontSize: 13,
        fontWeight: '400'
    },
    headespacing: {
        marginVertical: 10
    },
    floatButton: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        right: 15,
        padding: 2,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 2,
    }






});
