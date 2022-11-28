import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import colors from '../colors';

const CupoScreen = ({navigation}) => {

    return(
        <View>
            <Text>CupoScreen Cupo</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate("DriverProfile")}
                style={styles.chatButton}
            >
                <Entypo name="user" size={24} color={colors.lightGray} />
            </TouchableOpacity>
        </View>
    )
}

export default CupoScreen;


const styles = StyleSheet.create({
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
      marginBottom: 50,
    }
  });