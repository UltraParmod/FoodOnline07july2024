import {
    Image,
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import { colors, parameters } from '../../global/styles';
import Swiper from 'react-native-swiper';
import { StatusbarTransparent } from '../../componetns/StatusbarCom';




export default function SignInWelcomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>

            <StatusbarTransparent />

            <ImageBackground
                source={require('../../assets/Img/background1.jpg')}
                resizeMode="cover"
                style={{ width: '100%', height: '100%' }}>
                <View
                    style={{
                        backgroundColor: 'rgba(0,0,0,.9)',
                        width: '100%',
                        height: '100%',
                    }}>
                    <View
                        style={{
                            flex: 3,
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            paddingTop: 120,
                        }}>
                        <Text
                            style={{
                                fontSize: 26,
                                color: colors.mainColor,
                                fontWeight: 'bold',
                            }}>
                            DISCOVER RESTAURANTS
                        </Text>
                        <Text
                            style={{
                                fontSize: 26,
                                color: colors.mainColor,
                                fontWeight: 'bold',
                            }}>
                            IN YOUR AREA
                        </Text>
                    </View>

                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <Swiper autoplay={true}>
                            <View style={styles.slider1}>
                                <Image
                                    source={require('../../assets/Img/imgfood1.jpg')}
                                    style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                                />
                            </View>
                            <View style={styles.slider1}>
                                <Image
                                    source={require('../../assets/Img/imgfood2.jpg')}
                                    style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                                />
                            </View>

                            <View style={styles.slider1}>
                                <Image
                                    source={require('../../assets/Img/imgfood3.jpg')}
                                    style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                                />
                            </View>

                            <View style={styles.slider1}>
                                <Image
                                    source={require('../../assets/Img/imgfood2.jpg')}
                                    style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                                />
                            </View>
                        </Swiper>
                    </View>

                    <View style={{ flex: 4, justifyContent: 'flex-end' }}>
                        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                            <TouchableOpacity style={parameters.styleButton} onPress={() => {
                                navigation.navigate('SignInScreen')
                            }}>
                                <Text style={parameters.buttonTitle}>SIGN IN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                        style={{
                            marginHorizontal: 20,
                            marginBottom: 50,
                            alignItems: 'flex-end',
                        }}>
                        <TouchableOpacity style={styles.createButton}>
                            <Text style={styles.createTitle}>Create an account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    slider1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#9DD6EB',
    },
    slider2: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        // backgroundColor: '#97CAE5',
    },
    slider3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#92BBD9',
    },
    createButton: {
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        height: 50,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    createTitle: {
        fontSize: 18,
        color: '#ff8c52',
        fontWeight: 'bold',
    },
});
