import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {db} from '../firebase.js'

const HomeScreen = () => {

  const navigation = useNavigation();

  const [users, setUsers] = useState();

  useEffect(() => {
    db.collection('users').onSnapshot(querySnapshot => {
      const users = [];
      querySnapshot.docs.forEach(doc => {
        const {name, document, birthday, email, phone, password} = doc.data()
        users.push({
          id:doc.id,
          name,
          document, 
          birthday, 
          email, 
          phone, 
          password
        })
      })
      setUsers(users)
    })

  })

  const handleList = () => {
    console.log(users);
  }

  return (
    <SafeAreaView style={styles.root}>
      <Text>HomeScreen</Text>

      <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("DriverProfile")}
                style={styles.chatButton}
            >
                <Entypo name="bowl" size={24} color={colors.lightGray} />
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={() => handleList()}
                style={styles.chatButton}
            >
                <Entypo name="list" size={24} color={colors.lightGray} />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
