import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import Emoji from 'react-native-emoji';

import GetStartedBtn from '../components/GetStartedBtn';
import LoginBtn from '../components/LoginBtn';

export default class SwiperComponent extends Component {
    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false} activeDotColor={'white'}>
                <View style={styles.slide1}>
                    <Image source={require('../assets/Receipts.png')} style={styles.imgSlide1} />
                    <Text style={styles.text}>Say Goodbye<Emoji name="wave" />{'\n'} to paper receipts</Text>
                    <GetStartedBtn />
                    <LoginBtn />
                </View>
                <View style={styles.slide2}>
                    <Image source={require('../assets/Chart.png')} style={styles.imgSlide2} />
                    <Text style={styles.text}>Monitor your {'\n'} daily spending</Text>
                    <GetStartedBtn />
                    <LoginBtn />
                </View>
                <View style={styles.slide3}>
                    <Image source={require('../assets/Location.png')} style={styles.imgSlide3} />
                    <Text style={styles.text}>Easily access {'\n'} your receipts anywhere</Text>
                    <GetStartedBtn />
                    <LoginBtn />
                </View>
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#404CCF'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#404CCF'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#404CCF'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 50,
        textAlign: 'center'
    },
    imgSlide1: {
        width: 236,
        height: 209
    },
    imgSlide2: {
        width: 210,
        height: 209
    },
    imgSlide3: {
        width: 210,
        height: 208
    },
})

AppRegistry.registerComponent('myproject', () => SwiperComponent)