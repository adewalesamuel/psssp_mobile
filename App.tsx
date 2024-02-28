/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

function App(): React.JSX.Element {
    const appUrl = 'http://192.168.1.24:5173/'
    return (
        <SafeAreaView style={styles.wrapper}>
            <WebView source={{uri: appUrl}} />
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
