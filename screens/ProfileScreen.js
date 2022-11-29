import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
import {Avatar,Title,Caption} from 'react-native-paper';
import Logo from "../assets/User.png";

const ProfileScreen = () => {

    return(
        <SafeAreaView>
        <View style={styles.topBar}>
            <Avatar.Image source = {Logo} size = {75}/>
            <View style={{marginLeft: 20}}>
                <Text style={styles.title}>Gabriel Delgado</Text>
                <Text style = {styles.caption}>@Gabriel10</Text>
                <View style={styles.stars}>
                    <Entypo name="star" size={20} color="#5a7aff" />
                    <Entypo name="star" size={20} color="#5a7aff" />
                    <Entypo name="star" size={20} color="#5a7aff" />
                    <Entypo name="star" size={20} color="#5a7aff" />
                    <Entypo name="star-outlined" size={20} color="#5a7aff" />
                </View>
            </View>
        </View>   

        <View style={styles.sideButtons}>
            <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")} style={styles.chatButton}>
                <Entypo name="chat" size={24} color="white" />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row', 
        backgroundColor: "#E4E9F1", 
        alignItems: "center", 
        paddingHorizontal: 20, 
        padding: 0,
        marginTop: 50
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#131530",
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "normal",
        color: "#131530"
    },
    stars: {
        flexDirection: 'row',
    },
    chatButton: {
        backgroundColor: colors.primary,
        height: 75, width: 75,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 320,
        marginTop: 400
    }
});