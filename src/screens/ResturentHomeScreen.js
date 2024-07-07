import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ResturentHeader from '../componetns/ResturentHeader'
import { colors, fonts } from '../global/styles'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TabBar, TabView } from 'react-native-tab-view'
import MenuScreen from './ResturantTabs/MenuScreen';



const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH
export default function ResturentHomeScreen({ navigation, route }) {
    const { id, restauratData } = route.params
    const [routes] = useState([
        { key: 'first', title: 'MENU' },
        { key: 'second', title: 'INFO' },
        { key: 'third', title: 'REVIEW' },
        { key: 'fourth', title: 'GALLERY' },
    ])
    const [index, setIndex] = useState(0)
    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: colors.cardbackground }}
            tabStyle={styles.tabStlye}
            scrollEnabled={true}
            style={styles.tab}
            labelStyle={styles.tabLabel}
            contentContainerStyle={styles.tabContainer}
        />
    )
    const UpdateRoute1 = () => {
        return (
            <View>

            </View>
        )
    }
    return (
        <View style={styles.container}>
            <ScrollView>

                <View>
                    <ResturentHeader id={id} navigation={navigation} />

                    <View style={styles.view1}>
                        <Text style={styles.text1}>GET 10 % OFF ON FOOD TOTAL</Text>

                    </View>

                    <View style={styles.view2}>
                        <View style={styles.view3}>
                            <Text style={styles.text2}>{restauratData}</Text>
                            <Text style={{ color: 'black' }}>Burger, Wraper, Mlikshakes...</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Entypo name='star' size={15} color={colors.mainColor} />
                                <Entypo name='star' size={15} color={colors.mainColor} />
                                <Entypo name='star' size={15} color={colors.mainColor} />
                                <Text style={[styles.text4, { margin: 5 }]}>3.45</Text>
                                <FontAwesome name='map-marker' size={18} color={colors.grey3} />
                                <Text style={[styles.text6, { marginLeft: 2, marginTop: 2, fontWeight: '600' }]}>21. 4 Min away </Text>
                            </View>
                        </View>


                        <View style={styles.view5}>
                            <Text style={[styles.text6, { fontWeight: 'bold' }]}>Collect</Text>

                            <View style={styles.view7}>
                                <Text style={styles.text7}>5 </Text>
                                <Text style={styles.text7}>Min</Text>

                            </View>
                        </View>

                        <View style={styles.view8}>
                            <Text style={styles.text9}>Delivery</Text>
                            <View style={[styles.view7, { backgroundColor: colors.mainColor, borderRadius: 100, }]}>
                                <Text style={[styles.text7, { textAlign: 'center', }]}>15 Min</Text>


                            </View>
                        </View>
                    </View>
                </View>


                <View style={styles.view10}>
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={UpdateRoute1}
                        onIndexChange={setIndex}
                        initialLayout={initialLayout}
                        renderTabBar={renderTabBar}
                        tabBarPosition='top'
                    />
                </View>
            </ScrollView>
            {
                index === 0 &&
                <MenuScreen />

            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // marginTop: 18
    },
    view1: {
        width: '100%',
        padding: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text1: {
        color: 'green',
        fontSize: 14,
        fontWeight: 'bold'
    },
    view2: {
        flexDirection: 'row',
        flex: 1,
        marginBottom: 5,
        marginHorizontal: 10,
        justifyContent: 'space-between'
    },
    view3: {
        flex: 8
    },
    text2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.grey1
    },
    text4: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        color: 'black'
    },
    text5: {
        fontFamily: fonts.android.bold,
        fontSize: 13,
        color: colors.grey3,
        marginLeft: 2,
        marginRight: 5
    },
    text6: {
        fontFamily: fonts.android.bold,
        fontSize: 16,
        color: colors.grey5,
        marginLeft: 0,
        color: 'black',
        fontWeight: '600'
    },
    view5: {
        flex: 3,
        alignItems: 'center'
    },
    view6: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.grey1
    },
    view7: {
        width: 40,
        height: 40,
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'space-around'
    },
    text7: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 13,
        padding: 5

    },
    text8: {
        fontSize: 13,
        color: 'black',
        marginBottom: 5
    },
    view8: {
        flex: 3,
        alignItems: 'center'
    },
    text9: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.grey1
    },
    view9: {
        width: 40,
        height: 40,
        backgroundColor: colors.button,
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'space-around'
    },
    text10: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.cardbackground,
        marginTop: 5
    },
    text11: {
        fontSize: 13,
        color: colors.cardbackground,
        marginBottom: 5
    },
    view10: {
        elevation: 10,
        backgroundColor: colors.pagebackground
    },
    view11: {
        backgroundColor: colors.button,
        height: 50,
        alignItems: 'center',
        marginBottom: 0
    },
    view12: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text12: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.cardbackground
    },
    view13: {
        paddingHorizontal: 3,
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.cardbackground
    },
    tab: {
        paddingTop: 0,
        backgroundColor: colors.button,
        alignItems: 'center'
    },
    tabContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabLabel: {
        fontWeight: 'bold',
        color: colors.cardbackground
    },
    tabStlye: {
        width: SCREEN_WIDTH / 4,
        maxHeight: 45
    }


})
