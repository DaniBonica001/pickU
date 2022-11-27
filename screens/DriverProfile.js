import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {Avatar,Title,Caption} from 'react-native-paper';
import Logo from "../assets/User.png";


const DriverProfile = () => {

  const navigation = useNavigation();

  const claimCupo = () => {
    console.log('cupo claimed');
  }

  return (
    <SafeAreaView style={styles.root}>
      <Text>Driver Screen</Text>
        <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
                <Avatar.Image
                    source = {Logo}
                    size = {80}
                />
                <View>
                    <Title>Gabriel Delgado</Title>
                    <Caption style = {styles.caption}>@Gabriel10</Caption>
                </View>
            </View>
        </View>

        <View style = {styles.userInfoSection}>
            <View style = {styles.menuItem}>
                <Entypo name="address" size={20} color={colors.black} />
                <View style = {styles.userInfoSection}>
                    <Text>Cra 85b #33-55</Text>
                </View>
            </View>

        </View>

        <View style = {styles.userInfoSection}>
            <View>
                <Text>Driver Rate</Text>
            </View>
            <View style = {styles.menuItem}>
                <Entypo name="star" size={20} color={colors.black} />
                <Entypo name="star" size={20} color={colors.black} />
                <Entypo name="star" size={20} color={colors.black} />
                <Entypo name="star" size={20} color={colors.black} />
                <Entypo name="star-outlined" size={20} color={colors.black} />
            </View>

        </View>
        
      

      <View style={styles.sideButtons}>
        
            <TouchableOpacity
                onPress={() => claimCupo()}
                style={styles.chatButton}
            >
                <Entypo name="ticket" size={24} color={colors.lightGray} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("ChatScreen")}
                style={styles.chatButton}
            >
                <Entypo name="chat" size={24} color={colors.lightGray} />
            </TouchableOpacity>
            
        </View>
    </SafeAreaView>
  );
};

export default DriverProfile;

const styles = StyleSheet.create({
    sideButtons: {
        flexDirection: 'column',
        paddingHorizontal: 320
    },
    userInfoSection: {
        paddingHorizontal: 30,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 5,
      },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
        paddingHorizontal: 10
      },
    chatButton: {
        backgroundColor: colors.primary,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .9,
        shadowRadius: 8,
        marginRight: 20,
        marginBottom: 20,
    }
});
