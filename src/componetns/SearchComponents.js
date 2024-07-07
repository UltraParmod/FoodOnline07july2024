import { Alert, Modal, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Keyboard } from 'react-native'
import React, { useRef, useState } from 'react'
import { colors } from '../global/styles'
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { filterData } from '../global/Data';
import filter from 'lodash/filter'

export default function SearchComponents() {
    const [data, setData] = useState([...filterData])
    const [modalVisible, setModalVisible] = useState(false)
    const [textInputFossuued, setTextInputFossued] = useState(true)
    const textInput = useRef(0)
    const navigation = useNavigation()

    const contains = ({ name }, query) => {
        if (name.includes(query)) {
            return true
        }
        return false
    }

    // const handleSearch = text = {
    //     const datas = filter(filterData, userSearch => {
    //         return contains(userSearch, text)
    //         setData([...datas])
    //     })
    // }

    const handleSearch = ({ text }) => {
        const datas = filter(filterData, userSearch => {
            return contains(userSearch, text)
        })
        setData([...datas])
    }
    return (
        <View style={{}}>
            <TouchableOpacity
                onPress={() => {
                    setModalVisible(true)
                }}
            >
                <View style={styles.searchArea}>
                    <Feather
                        name="search"
                        size={28}
                        color={colors.grey1}
                        style={{ marginHorizontal: 5 }}
                    />
                    <Text style={{ fontSize: 15, }}>What are you looking for ?</Text>
                </View>
                <Modal
                    animationType='fade'
                    transparent={false}
                    visible={modalVisible}
                >
                    <View style={styles.modal}>


                        <View style={styles.view1}>
                            <View style={styles.textInput}>
                                <Animatable.View
                                    animation={textInputFossuued ? "fadeInRight" : "fadeInLeft"}
                                    duration={400}
                                >
                                    <AntDesign
                                        name={textInputFossuued ? "arrowleft" : 'arrowleft'}

                                        size={28}
                                        color={colors.grey1}
                                        onPress={() => {
                                            if (textInputFossuued)
                                                setModalVisible(false)
                                            setTextInputFossued(true)
                                        }}
                                        style={styles.icon2}
                                    />
                                </Animatable.View>
                                <TextInput style={{ width: '90%', paddingLeft: 10 }}
                                    placeholder=''
                                    autoFocus={false}
                                    ref={textInput}
                                    onFocus={() => {
                                        setTextInputFossued(true)
                                    }}
                                    onBlur={() => {
                                        setTextInputFossued(false)
                                    }}
                                    onChangeText={handleSearch}
                                />
                                <Animatable.View
                                    animation={textInputFossuued ? "fadeInLeft" : "fadeInRight"}
                                    duration={400}
                                >
                                    <AntDesign
                                        name={textInputFossuued ? "closecircle" : 'closecircle'}
                                        size={28}
                                        color={colors.grey1}
                                        onPress={() => {
                                            textInput.current.clear()
                                            // handleSearch()
                                        }}
                                        style={styles.icon2}
                                    />
                                </Animatable.View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20 }}>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        onPress={() => {
                                            Keyboard.dismiss
                                            navigation.navigate('SearchResultScreen', { item: item.name })
                                            setModalVisible(false)
                                            setTextInputFossued(true)
                                        }}
                                    >
                                        <View style={styles.view2}>
                                            <Text style={{ color: colors.grey2, fontSize: 15 }}>{item.name}</Text>
                                        </View>

                                    </TouchableOpacity>
                                )}
                                keyExtractor={item => item.id}
                            />
                        </View>



                    </View>
                </Modal>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text1: {
        color: colors.grey3,
        fontSize: 16
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 0,
        borderColor: '#86939e',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    searchArea: {
        marginVertical: 10,
        height: 50,
        backgroundColor: colors.grey5,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.grey4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchIcon: {
        fontSize: 24,
        padding: 5,
        color: colors.grey2
    },
    view1: {
        height: 70,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    view2: {
        flexDirection: 'row',
        padding: 5,
        color: colors.grey2
    },
    modal: {
        flex: 1
    }
})