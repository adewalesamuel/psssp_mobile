/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef, useState } from 'react';
import { Platform, StyleSheet, SafeAreaView, BackHandler, Alert } from "react-native";
import WebView, { WebViewNavigation } from 'react-native-webview';
import { Components } from './src/components';

function App(): React.JSX.Element {
    const appUrl = 'https://office-psssp.digital-projects.space/connexion'

    const webViewRef = useRef<WebView|null>(null);

    const [errorDescription, setErrorDescription] = useState<string|null>(null);

    useEffect(() => {
        if (Platform.OS === 'ios') return;

        const handleBackPress = () => {
            if (!webViewRef.current) return false;

            webViewRef.current.goBack();
            return true;
        };

        const handleEvent = BackHandler.addEventListener(
            'hardwareBackPress',
            handleBackPress
        );

        return () => handleEvent.remove();
    }, [])

    return (
        <SafeAreaView style={styles.wrapper}>
            <WebView source={{uri: appUrl}} ref={webViewRef}
            javaScriptEnabled={true} 
            domStorageEnabled={true}
            allowsBackForwardNavigationGestures={true}
            startInLoadingState={true}
            showsVerticalScrollIndicator={false}
            mixedContentMode="compatibility"
            onError={({nativeEvent}) => setErrorDescription(nativeEvent.description)}
            renderLoading={() => <Components.Loader />}
            renderError={(error) => <Components.ErrorMessage description={errorDescription} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    }
});

export default App;
