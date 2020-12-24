import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function LoginBtn() {
    return (
        <View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        marginTop: 15,
        marginBottom: 20,
        width: 321,
        height: 52,
        backgroundColor: '#404CCF',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#FFF'
    },
    btnText: {
        alignSelf: 'center',
        padding: 17,
        color: '#FFF'
    }
})

export default LoginBtn;