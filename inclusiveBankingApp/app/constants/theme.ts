import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#008080',
        background: '#FFFFFF',
        surface: '#F5F5F5',
        text: '#333333',
        accent: '#00BFA6',
        error: '#FF5252',
        placeholder: '#A0A0A0',
        onSurface: '#333333',
        onPrimary: '#FFFFFF',
    },
    roundness: 8,
    typography: {
        headlineSmall: {
            fontFamily: 'Montserrat-Bold', // For titles and headings
            fontSize: 20,
        },
        bodyMedium: {
            fontFamily: 'Montserrat-Regular', // For general text
            fontSize: 16,
        },
        bodyLight: {
            fontFamily: 'Montserrat-Light', // For placeholder or light text
            fontSize: 14,
        },
        labelMedium: {
            fontFamily: 'Montserrat-SemiBold', // For labels and emphasis
            fontSize: 14,
        },
        caption: {
            fontFamily: 'Montserrat-Medium', // For captions
            fontSize: 12,
        },
    },
};

export default theme;
