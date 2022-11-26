import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DriverProfile = () => {

  const navigation = useNavigation();

  const claimCupo = () => {
    console.log('cupo claimed');
  }

  return (
    <SafeAreaView style={styles.root}>
      <Text>Driver</Text>

      <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("ChatScreen")}
                style={styles.chatButton}
            >
                <Entypo name="chat" size={24} color={colors.lightGray} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => claimCupo()}
                style={styles.chatButton}
            >
                <Entypo name="add-user" size={24} color={colors.lightGray} />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default DriverProfile;

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
