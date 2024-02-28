import React, { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CONSTANTS } from "../constants";

export function Loader(): React.JSX.Element {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.loaderText}>Loading....</Text>
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

    },
    loaderText: {
        fontSize: CONSTANTS.SIZES.TEXT_MD,
        color: CONSTANTS.COLORS.TEXT_PRIMARY,
    }
})