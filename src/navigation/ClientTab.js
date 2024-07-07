import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




import { colors } from '../global/styles';
import SearchScreen from '../screens/SearchScreen';
import MyOrderScreen from '../screens/MyOrderScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import ClientStack from './ClientStack'





const ClientTabs = createBottomTabNavigator()
export default function RootClientTabs() {
    return (
        <ClientTabs.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.button,
                headerShown: false,
                tabBarStyle: {
                    paddingTop: 5,
                    height: 54,
                    paddingBottom: 5
                }
            }}
        >
            <ClientTabs.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={
                    {
                        tabBarLabel: 'Home ',
                        tabBarIcon: ({ color, size }) => (
                            <Entypo name='home' size={size} color={color} />
                        )
                    }
                }
            />
            <ClientTabs.Screen
                // name="SearchScreen"
                // component={SearchScreen}
                name="ClientStack"
                component={ClientStack}
                options={
                    {
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ color, size }) => (
                            <Feather name='search' size={size} color={color} />
                        )
                    }
                }
            />
            <ClientTabs.Screen
                name="MyOrderScreen"
                component={MyOrderScreen}
                options={
                    {
                        tabBarLabel: 'Order',
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name='reorder' size={size} color={color} />
                        )
                    }
                }
            />

            <ClientTabs.Screen
                name="MyAccountScreen"
                component={MyAccountScreen}
                options={
                    {
                        tabBarLabel: 'Account',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name='account' size={size} color={color} />
                        )
                    }
                }
            />



        </ClientTabs.Navigator >
    )
}

const styles = StyleSheet.create({})