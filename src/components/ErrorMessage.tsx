import React, { PropsWithChildren } from "react";
import { BackHandler, Button, Image, StyleSheet, Text, View } from "react-native";
import { CONSTANTS } from "../constants";

type ErrorMessageProp = PropsWithChildren & {
    description: string | null
}
export function ErrorMessage(props: ErrorMessageProp): React.JSX.Element {
    const logo = require('../assets/images/logo.png');
    
    return (
        <View style={styles.wrapper}>
            <Image source={logo}/>
            <Text style={styles.errorTitle}>Une erreur est survenue</Text>
            {props.description && props.description.includes('net::') ? 
                <Text style={styles.errorMessage}>
                    Veuillez verifier votre connexion intnernet
                </Text>
            : 
                <Text style={styles.errorMessage}>
                    {props.description ?? ""}
                </Text>
            }
            <View style={styles.buttonWrapper}>
                <Button title="FERMER" color={styles.closeButton.color} 
                onPress={() => BackHandler.exitApp()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    errorTitle: {
        fontSize: CONSTANTS.SIZES.TEXT_MD,
        color: CONSTANTS.COLORS.TEXT_PRIMARY,
        marginBottom: CONSTANTS.SIZES.P_XS,
    },
    errorMessage: {
        fontSize: CONSTANTS.SIZES.TEXT_SM
    },
    buttonWrapper: {
        marginTop: CONSTANTS.SIZES.P_MD,
        width: "100%",
        paddingVertical: CONSTANTS.SIZES.P_MD
    },
    closeButton: {
        color: CONSTANTS.COLORS.BG_PRIMARY,
    },
    wrapper: {
        backgroundColor: CONSTANTS.COLORS.BG_WHITE,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingHorizontal: CONSTANTS.SIZES.P_MD
    }
})