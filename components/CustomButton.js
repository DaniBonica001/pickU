import React from 'react';
import {View, Text, StyleSheet,Pressable} from 'react-native';

const CustomButton = ({onPress, text, bgColor,fgColor}) => {
    return (
        <Pressable 
        onPress={onPress} 
        style={[
            styles.container, 
            bgColor ? {backgroundColor: bgColor}: {} ]}>

        <Text style={[
            styles.text,
            fgColor ? {color: fgColor}: {} ]}>{text}</Text>
        </Pressable>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: "#5A7AFF",
        width: "80%",            
        padding: 15,        
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,

    },
    text: {
        fontWeight: "bold",
        color: "white"
    }
});