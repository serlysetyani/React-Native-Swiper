import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function GetStartedBtn() {
    return (
        <View>
            <TouchableOpacity style={styles.btn} >
                <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        marginTop: 102,
        width: 321,
        height: 52,
        backgroundColor: 'white',
        borderRadius: 12
    },
    btnText: {
        alignSelf: 'center',
        padding: 17,
        color: '#404CCF'
    }
})

export default GetStartedBtn;