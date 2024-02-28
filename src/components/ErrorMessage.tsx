import React, { PropsWithChildren } from "react";
import { Alert, BackHandler, Button, StyleSheet, Text, View } from "react-native";
import { CONSTANTS } from "../constants";

type ErrorMessageProp = PropsWithChildren & {
    description: string | null
}
export function ErrorMessage(props: ErrorMessageProp): React.JSX.Element {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.errorTitle}>Une erreur est survenue</Text>
            {props.description && props.description === 'net::ERR_CONNECTION_REFUSED' ? 
            <Text style={styles.errorMessage}>
                Veuillez verifier votre connexion itnernet
            </Text>
            : null}
            <View style={styles.buttonWrapper}>
                <Button title="FERMER" onPress={() => BackHandler.exitApp()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingHorizontal: CONSTANTS.SIZES.P_MD
    },
    errorTitle: {
        fontSize: CONSTANTS.SIZES.TEXT_MD,
        color: CONSTANTS.COLORS.TEXT_DEFAULT,
        marginBottom: CONSTANTS.SIZES.P_XS
    },
    errorMessage: {
        fontSize: CONSTANTS.SIZES.TEXT_SM
    },
    buttonWrapper: {
        marginTop: CONSTANTS.SIZES.P_MD
    }
})