/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef } from 'react';
import { Platform, StyleSheet, SafeAreaView, BackHandler } from "react-native";
import WebView from 'react-native-webview';
import { Components } from './src/components';

function App(): React.JSX.Element {
    const appUrl = 'http://192.168.1.24:5173/'

    const webViewRef = useRef<WebView|null>(null);
    
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
            javaScriptEnabled={true} domStorageEnabled={true}
            allowsBackForwardNavigationGestures={true}
            startInLoadingState={true}
            showsVerticalScrollIndicator={false}
            mixedContentMode="compatibility"
            renderLoading={() => <Components.Loader />}/>
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
