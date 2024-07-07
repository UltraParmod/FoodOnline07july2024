import { Image, StyleSheet, Switch, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../global/styles';
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export default function DrawerContent(props) {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{ backgroundColor: colors.button }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: colors.button,
                            paddingLeft: 20,
                            paddingVertical: 10,
                        }}>
                        <Image
                            source={require('../assets/Img/userImg.jpg')}
                            style={styles.userImg}
                        />

                        <View style={{ marginLeft: 10 }}>
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    color: colors.cardbackground,
                                    fontSize: 14,
                                }}>
                                Pamrod kumar
                            </Text>
                            <Text style={{ color: colors.cardbackground, fontSize: 14 }}>
                                Pamrod@gmail.com
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -10, marginBottom: 15, paddingHorizontal: 15 }}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View
                                style={{
                                    marginLeft: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        color: colors.cardbackground,
                                        fontSize: 18,
                                    }}>
                                    {' '}
                                    1
                                </Text>
                                <Text style={{ color: colors.cardbackground, fontSize: 14 }}>
                                    {' '}
                                    My Favorites{' '}
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View
                                style={{
                                    marginLeft: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        color: colors.cardbackground,
                                        fontSize: 18,
                                    }}>
                                    {' '}
                                    0
                                </Text>
                                <Text style={{ color: colors.cardbackground, fontSize: 14 }}>
                                    {' '}
                                    My Cart{' '}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <DrawerItemList {...props} />

                <DrawerItem
                    label='Payment'
                    icon={({ color, size }) => (
                        <MaterialIcons name='payment' size={size} color={color} />
                    )}
                />

                <DrawerItem
                    label='Promotions'
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons name='tag-heart-outline' size={size} color={color} />
                    )}
                />
                <DrawerItem
                    label='Settings'
                    icon={({ color, size }) => (
                        <Ionicons name='cog-outline' size={size} color={color} />
                    )}
                />
                <DrawerItem
                    label='Help'
                    icon={({ color, size }) => (
                        <Ionicons name='help-buoy' size={size} color={color} />
                    )}
                />

                <View style={{ borderTopWidth: 1, borderTopColor: colors.grey5 }}>
                    <Text style={styles.preferences}>Preferences</Text>

                    <View style={styles.switchTxt}>
                        <Text style={styles.darkThemeTxt}>Dark Mode</Text>
                        <View style={{ paddingRight: 10 }}>
                            <Switch trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor='#f4f3f4'
                            />
                        </View>
                    </View>
                </View>


            </DrawerContentScrollView>
            <DrawerItem
                label='Sign Out'
                icon={({ color, size }) => (
                    <FontAwesome name='sign-out' size={size} color={color} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userImg: {
        borderWidth: 4,
        borderColor: colors.cardbackground,
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    preferences: {
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10,
        paddingLeft: 20
    },
    switchTxt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20, paddingVertical: 5,
        paddingRight: 10
    },
    darkThemeTxt: {
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10,
        paddingLeft: 0,
        fontWeight: 'bold'
    }
});
