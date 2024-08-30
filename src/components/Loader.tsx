import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { CONSTANTS } from "../constants";


export function Loader(): React.JSX.Element {
    const logoNoBg = require('../assets/images/logo.png');

    return (
        <View style={styles.wrapper}>
            <Image source={logoNoBg} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: CONSTANTS.COLORS.BG_PRIMARY

    },
    image: {
        width: 130,
        height: 130
    },
    loaderText: {
        fontSize: CONSTANTS.SIZES.TEXT_MD,
        color: CONSTANTS.COLORS.TEXT_DEFAULT,
    }
})