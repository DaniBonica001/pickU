import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
import {db} from '../firebase.js';
import { ListItem, Avatar} from '@rneui/base';

const HomeScreen = ({navigation}) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    db.collection('driver').onSnapshot(querySnapshot => {
      const drivers = [];
      querySnapshot.docs.forEach(doc => {
        const {name, birthday, email, phone, password} = doc.data()
        drivers.push({
          id: doc.id,
          name, 
          birthday, 
          email, 
          phone, 
          password
        })
      })
      setUsers(drivers)
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

            <TouchableOpacity
                onPress={() => navigation.navigate("ProfileScreen")}
                style={styles.chatButton}
            >
                <Entypo name="user" size={24} color={colors.lightGray} />
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={() => navigation.navigate("CreateCupo")}
                style={styles.chatButton}
            >
                <Entypo name="ticket" size={24} color={colors.lightGray} />
            </TouchableOpacity>
        </View>

        {
          users.map(user => {
            return(
              <ListItem
                key={user.id}
              >
                <ListItem.Chevron/>
                <ListItem.Content>
                  <ListItem.Title>{user.name}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            )
          })
        }

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
