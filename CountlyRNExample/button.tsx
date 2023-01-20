import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = props => {
    return (
        <TouchableOpacity style={{ ...styles.button, ...props.style, backgroundColor: props.color }} onPress={props.onPress}>
            <Text style={{ ...styles.text, color: props.lightText ? '#FFFFFF' : '#000000' }} numberOfLines={1} adjustsFontSizeToFit={true}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        height: 40,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10,
        marginRight: 20,
        marginButton: 10,
    },
    text: {
        fontSize: 14,
    },
});