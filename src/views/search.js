import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
    View,
    ImageBackground,
    StatusBar,
    Animated,
    FlatList,
    StyleSheet,
    Keyboard,
    Dimensions,
    ActivityIndicator
}
    from 'react-native'
import SearchInput from '../components/toolbox/searchInput'
import Text from '../components/toolbox/text'
import Input from '../components/toolbox/input'
import theme from '../utils/theme'
import Logo from '../components/icons/Logo'
import Box from '../components/toolbox/box'
import bg from '../assets/bg.jpg'
import Button from '../components/toolbox/button'
import SafeAreaView from 'react-native-safe-area-view'
import { onChange } from 'react-native-reanimated'
import { useFocusEffect } from '@react-navigation/native'
import Card from '../components/Card'
import { TouchableOpacity } from 'react-native-gesture-handler'
import TabBar from '../components/common/tab-bar'
import Modal from 'react-native-modalbox'


function search({ navigation }) {
    const [isSearchFocus, setSearchFocus] = useState(false)
    const heroHeight = useRef(new Animated.Value(200)).current;
    const bgOpacity = useRef(new Animated.Value(1)).current;
    const [homeData, setHomeData] = useState(null)

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'on para',
            subtitle: "çok az para"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
            title: 'on para',
            subtitle: "çok az para"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3',
            title: 'on para',
            subtitle: "çok az para"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28adsfba4',
            title: 'on para',
            subtitle: "çok az para"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abcvxbb28ba4',
            title: 'on para',
            subtitle: "çok az para"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53a345bb28ba4',
            title: 'on para',
            subtitle: "çok az para"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2bnmgöba4',
            title: 'on para',
            subtitle: "çok az para"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad234653abb28bghfga4',
            title: 'on para',
            subtitle: "çok az para"
        },
        {
            id: 'bd7acbea-c1b8+1-46c2-aed5-3ad234653ab2345b28ba4',
            title: 'on para',
            subtitle: "çok az para"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad2349906j653abb28ba4',
            title: 'on para',
            subtitle: "çok az para"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad23hjk6784653abb28ba4',
            title: 'on para',
            subtitle: "çok az para"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad234356776klk653abb28ba4',
            title: 'on para',
            subtitle: "çok az para"
        },
    ];

    useEffect(() => {
        getHomeData()
    }, [])

    const getHomeData = () => {
        fetch('https://sozluk.gov.tr/icerik')
            .then(res => res.json())
            .then(res => {
                setHomeData(res)
                // console.log(res.kelime[0])
            })
    }
    useEffect(() => {
        if (!isSearchFocus) {
            Animated.timing(heroHeight, {
                toValue: 200,
                duration: 300,
                useNativeDriver: false
            }).start()
            Animated.timing(bgOpacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false
            }).start()
        } else {
            Animated.timing(heroHeight, {
                toValue: 70,
                duration: 300,
                useNativeDriver: false
            }).start()
            Animated.timing(bgOpacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false
            }).start()
        }
    }, [heroHeight, isSearchFocus])

    useFocusEffect(
        useCallback(() => {
            if (!isSearchFocus) {
                StatusBar.setBarStyle('light-content')
                StatusBar.setBackgroundColor(theme.colors.red)
            } else {
                StatusBar.setBarStyle('dark-content')
            }
        })
    )

    return (
        <Box as={SafeAreaView} flex={1}>

            <StatusBar barStyle="light-content"
                backgroundColor={isSearchFocus ? '#fff' : theme.colors.red} />

            <Animated.View style={{ height: heroHeight }}>
                <Animated.View style={{ opacity: bgOpacity }}>
                    <Box as={ImageBackground}
                        zIndex={-1}
                        alignItems="center"
                        justifyContent="center"
                        source={bg}
                        height="100%"
                        width="100%"
                    >
                        <Box flex={1} alignItems="center" justifyContent="center">
                            <Logo width={85} height={40} color="white" />
                        </Box>
                    </Box>
                </Animated.View>
                <Box
                    position="absolute"
                    bottom={!isSearchFocus ? -20 : 10} mt={10}
                    width="100%" px={16}>
                    <SearchInput onChangeFocus={state => { setSearchFocus(state) }} />
                </Box>
            </Animated.View>

            <Box bg="#f1f1f1" zIndex={-1} flex={1} pt={26} px={16}>
                {
                    isSearchFocus ?
                        (
                            <FlatList
                                data={DATA}
                                renderItem={({ item }) => (
                                    <Box my={6} Box as={TouchableOpacity}
                                        bg="#F8F8F8" px={10} py={15}
                                        borderRadius={7}>
                                        <Text fontWeight="bold">{item.title}</Text>
                                    </Box>
                                )}
                                keyExtractor={item => item.id}
                            />

                        ) :
                        (
                            <Box px={12}>
                                <Box mt={10}>
                                    <Text color="textParagraphSecond">Bir Deyim</Text>
                                </Box>
                                <Box>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Detail', { title: 'on para' })}>
                                        {
                                            homeData ? (
                                                <Card item={homeData?.kelime[0]} />
                                            ) : (
                                                <ActivityIndicator size="small" color="#000"/>
                                            )
                                       }
                                    </TouchableOpacity>
                                </Box>
                                <Box mt={30}>
                                    <Text color="textParagraphSecond">Bir deyim - Atasözü</Text>
                                </Box>
                                <Box>
                                    <TouchableOpacity>
                                        {
                                            homeData ? (
                                                <Card mt={7} item={homeData?.atasoz[0]} />
                                            ):(
                                                <ActivityIndicator size="small" color="#000"/>
                                            )
                                        }
                                    </TouchableOpacity>
                                </Box>

                            </Box>
                        )
                }




            </Box>
        </Box >
    )
}



// const style = StyleSheet.create({
//     container:{
//         backgroundColor:'red',
//         borderWidth:5
//     }
// })

export default search;