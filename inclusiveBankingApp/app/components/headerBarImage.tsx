import React from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import theme from '../constants/theme';

interface HeaderBarImageProps {
  imageSource: any; // `any` to support local or remote images
}

// Get the screen height
const { height: screenHeight } = Dimensions.get('window');

const HeaderBarImage: React.FC<HeaderBarImageProps> = ({ imageSource }) => {
    return (
        <View style={styles.headerContainer}>
            <Image source={imageSource} style={styles.headerImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: screenHeight * 0.15, // 15% of screen height
        backgroundColor: theme.colors.primary + 'CC',
        alignItems: 'center',
        justifyContent: 'center', // centers the image within the header
    },
    headerImage: {
        width: '60%', // adjusts the image width relative to the container
        height: '60%', // allows the image to take the full height of the container
        resizeMode: 'contain', // ensures the image retains its aspect ratio
        marginTop: 45,
    },
});

export default HeaderBarImage;
