import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Nutrition = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Nutrition</Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
};

export default Nutrition;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
});