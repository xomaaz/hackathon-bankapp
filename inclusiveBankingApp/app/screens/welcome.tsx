import React from 'react';
import { Button } from 'react-native-paper';

export default function MyButton() {
    return (
        <Button mode="contained" onPress={() => console.log('Pressed')}>
            Click Me
        </Button>
    );
}
