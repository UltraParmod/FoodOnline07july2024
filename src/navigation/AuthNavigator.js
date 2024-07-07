import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import ReasturentMapScreen from '../screens/ReasturentMapScreen';
import DrawerNavigations from './DrawerNavigations';


export default function AuthNavigator() {
    const Auth = createNativeStackNavigator();


    return (
        <Auth.Navigator>

            <Auth.Screen
                name="SignInWelcomeScreen"
                component={SignInWelcomeScreen}
                options={{
                    headerShown: false

                }}
            />

            <Auth.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{
                    headerShown: false

                }}
            />


            {/* <Auth.Screen
                name="RootClientTabs"
                component={RootClientTabs}
                options={{
                    headerShown: false
                }}
            /> */}

            <Auth.Screen
                name="DrawerNavigations"
                component={DrawerNavigations}
                options={{
                    headerShown: false
                }}
            />

            <Auth.Screen
                name="ReasturentMapScreen"
                component={ReasturentMapScreen}
                options={{
                    headerShown: false
                }}
            />

        </Auth.Navigator>
    );
}

const styles = StyleSheet.create({});
