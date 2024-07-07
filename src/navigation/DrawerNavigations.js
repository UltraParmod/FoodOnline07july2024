import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import RootClientTabs from './ClientTab';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors } from '../global/styles';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
import DrawerContent from '../componetns/DrawerContent';



const Drawer = createDrawerNavigator();
export default function DrawerNavigations() {
    return (

        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
        >

            <Drawer.Screen
                name='RootClientTabs'
                component={RootClientTabs}
                options={{
                    headerShown: false,
                    title: 'Client',
                    drawerIcon: ({ focussed, size }) => (
                        <Feather name='home' size={size} color={focussed ? '#7cc' : colors.grey2} />
                    )
                }}
            />

            <Drawer.Screen
                name='BusinessConsoleScreen'
                component={BusinessConsoleScreen}
                options={{
                    headerShown: false,
                    title: 'Business',
                    drawerIcon: ({ focussed, size }) => (
                        <Ionicons name='business' size={size} color={focussed ? '#7cc' : colors.grey2} />
                    )
                }}
            />




        </Drawer.Navigator >

    )
}

const styles = StyleSheet.create({})