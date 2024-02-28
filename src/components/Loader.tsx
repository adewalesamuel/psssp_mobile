import React, { PropsWithChildren } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { CONSTANTS } from "../constants";

const logo = require('../assets/images/logo.png')

export function Loader(): React.JSX.Element {
    return (
        <View style={styles.wrapper}>
            <Image source={logo}/>
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
        backgroundColor: CONSTANTS.COLORS.BG_WHITE

    },
    loaderText: {
        fontSize: CONSTANTS.SIZES.TEXT_MD,
        color: CONSTANTS.COLORS.TEXT_DEFAULT,
    }
})