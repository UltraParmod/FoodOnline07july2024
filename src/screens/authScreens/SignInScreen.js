import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import Header from '../../componetns/Header';
import { colors, parameters, title } from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StatusbarColor } from '../../componetns/StatusbarCom';


export default function SignInScreen({ navigation }) {
    const [textInput2Fouced, setTextInput2Fouced] = useState(false);

    const textInput1 = useRef(1);
    const textInput2 = useRef(2);

    return (
        <View style={styles.container}>


            <StatusbarColor />
            <Header title={'My Account'} type={'arrow-back'} navigation={navigation} />

            <View style={{ margin: 15 }}>
                <Text
                    style={{
                        color: colors.statusbar,
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}>
                    Sign-In
                </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.text1}>Please enter the email and password.</Text>
                <Text style={styles.text1}>register with your account.</Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <View>
                    <TextInput
                        style={styles.TextInput1}
                        placeholder="Email"
                        placeholderTextColor="#86939e"
                        ref={textInput1}
                    />
                </View>

                <View style={styles.TextInput2}>
                    <Animatable.View
                        animation={textInput2Fouced ? '' : 'fadeInLeft'}
                        duration={400}>
                        <Entypo name="lock" size={30} color={colors.grey3} />
                    </Animatable.View>
                    <TextInput
                        placeholder="Password"
                        style={{ width: '76%' }}
                        ref={textInput2}
                        onFocus={() => {
                            setTextInput2Fouced(false);
                        }}
                        onBlur={() => {
                            setTextInput2Fouced(true);
                        }}
                    />

                    <Animatable.View
                        animation={textInput2Fouced ? '' : 'fadeInLeft'}
                        duration={400}>
                        <Entypo
                            name="eye-with-line"
                            size={30}
                            color={colors.grey3}
                            style={{ marginRight: 10 }}
                        />
                    </Animatable.View>
                </View>
            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 30 }}>
                <TouchableOpacity style={parameters.styleButton} onPress={() => {
                    navigation.navigate('DrawerNavigations')
                }}>
                    <Text style={parameters.buttonTitle}>SIGN IN</Text>
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <Text style={{ ...styles.style1, textDecorationLine: 'underline', color: 'darkblue' }}>Forgot Password ? </Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>OR</Text>
            </View>

            <View style={{ marginHorizontal: 20, marginTop: 5 }}>
                <TouchableOpacity onPress={() => {

                }}
                    style={[styles.socialIcon, { backgroundColor: '#4267B2', }]}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <EvilIcons name='sc-facebook' size={30} color={colors.white} />
                        <Text style={{ fontSize: 16, fontWeight: '600', color: colors.white }}>Sign In With Facebook </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <TouchableOpacity onPress={() => {

                }}
                    style={[styles.socialIcon, { backgroundColor: '#ff8c52' }]}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <AntDesign name='googleplus' size={30} color={colors.white} />
                        <Text style={{ fontSize: 16, fontWeight: '600', color: colors.white }}> {' '}Sign In With Google </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 20, marginLeft: 30 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#000' }}>New Food Online </Text>
            </View>


            <View style={{ marginHorizontal: 20, marginVertical: 30, alignItems: 'flex-end', }}>
                <TouchableOpacity style={styles.createButton}>
                    <Text style={styles.createTitle}>Create an account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text1: {
        color: colors.grey3,
        fontSize: 16,
    },
    TextInput1: {
        borderWidth: 1,
        borderColor: '#86939e',
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 10,
    },
    TextInput2: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: '#86939e',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        paddingLeft: 10,
    },
    socialIcon: {
        borderRadius: 12,
        height: 50,
        justifyContent: 'center'
    },
    createButton: {
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ff8c52',
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
    },
    createTitle: {
        fontSize: 16,
        color: '#ff8c52'
    }
});
