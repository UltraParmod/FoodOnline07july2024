import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from '../screens/SearchScreen'
import SearchResultScreen from '../screens/SearchResultScreen'
import ResturentHomeScreen from '../screens/ResturentHomeScreen'

const ClientSearch = createNativeStackNavigator()
export default function ClientStack() {

    return (
        <ClientSearch.Navigator>
            <ClientSearch.Screen
                name='SearchScreen'
                component={SearchScreen}
                options={() => ({
                    headerShown: false
                })}
            />
            <ClientSearch.Screen
                name='SearchResultScreen'
                component={SearchResultScreen}
                options={() => ({
                    headerShown: false
                })}
            />

            <ClientSearch.Screen
                name='ResturentHomeScreen'
                component={ResturentHomeScreen}
                options={() => ({
                    headerShown: false
                })}
            />
        </ClientSearch.Navigator>


    )
}

const styles = StyleSheet.create({})