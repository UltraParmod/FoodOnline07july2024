import { Animated, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../global/styles'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { restauratData } from '../global/Data'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



export default function ResturentHeader({ navigation, id }) {

    const index2 = 10
    const currentValue = new Animated.Value(1)
    const [liked, setLiked] = useState(false)
    const [counter, setCounter] = useState(-2)
    const [visible, setVisible] = useState(false)

    const likeHander = () => {
        if (liked == false)
            setVisible(true)

        setLiked(!liked)
        setCounter(index2)
    }

    useEffect(() => {
        if (liked == true) {
            Animated.spring(currentValue, {
                toValue: 3,
                friction: 2,
                useNativeDriver: true
            }).start(() => {
                Animated.spring(currentValue, {
                    toValue: 1,
                    useNativeDriver: true,
                    friction: 2
                }).start(() => {
                    setVisible(false)
                })
            })
        }
    }, [liked])
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.container}
                source={{ uri: restauratData[id].images }}
            // imageStyle={styles.image}
            >

                <View style={styles.view1}>
                    <TouchableOpacity activeOpacity={.8} style={styles.view2} onPress={() =>
                        navigation.goBack()
                    }>
                        <AntDesign name='arrowleft' size={25} color='black' style={{ marginTop: 3 }} />

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.view3}
                        activeOpacity={.8}
                        onPress={likeHander}
                    >
                        <AntDesign
                            name={liked && (index2 == counter) ? 'heart' : 'hearto'}
                            size={25} color='red' style={{ marginTop: 3 }} />

                    </TouchableOpacity>
                </View>
                <View style={styles.view4}>
                    {visible && (index2 == counter) &&
                        <Animated.View style={{ transform: [{ scale: currentValue }] }}>
                            <AntDesign
                                name='heart'
                                size={40} color='red' />

                        </Animated.View>
                    }
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150
    },
    // image: {
    //     borderTopLeftRadius: 5,
    //     borderTopRightRadius: 5,
    // },
    view1: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between'
    },
    view2: {
        margin: 10,
        width: 40,
        height: 40,
        backgroundColor: colors.cardbackground,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    view3: {
        marginTop: 0,
        margin: 10,
        width: 40,
        height: 40,
        backgroundColor: colors.cardbackground,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    view4: {
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})