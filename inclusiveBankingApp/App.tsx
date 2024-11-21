import React, { useState, useEffect, useCallback } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AppNavigator from './app/navigation/appNavigator';
import theme from './app/constants/theme';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({
                    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
                    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
                    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
                    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
                    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
                    'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
                });
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <PaperProvider theme={theme}>
                    <AppNavigator />
            </PaperProvider>
        </GestureHandlerRootView>
    );
}
