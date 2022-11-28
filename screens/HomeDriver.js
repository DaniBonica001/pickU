import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
import {db} from '../firebase.js';
import { ListItem, Avatar} from '@rneui/base';

const HomeDriver = ({navigation}) => {

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    db.collection('request').onSnapshot(querySnapshot => {
      const requests = [];
      querySnapshot.docs.forEach(doc => {
        const {date, cupoId, passengerId, driverId} = doc.data()
        requests.push({
          id: doc.id,
          date, 
          cupoId, 
          passengerId,
          driverId
        })
      })
      setRequests(requests)
    })

  })

  const handleList = () => {
    console.log(requests);
  }

  return (
    <SafeAreaView style={styles.root}>
      <Text>HomeScreen</Text>

      <View style={styles.container}>

            <TouchableOpacity
                onPress={() => handleList()}
                style={styles.chatButton}
            >
                <Entypo name="list" size={24} color={colors.lightGray} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("DriverProfile")}
                style={styles.chatButton}
            >
                <Entypo name="user" size={24} color={colors.lightGray} />
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={() => navigation.navigate("CreateCupo")}
                style={styles.chatButton}
            >
                <Entypo name="plus" size={24} color={colors.lightGray} />
            </TouchableOpacity>
        </View>

        {
          requests.map(request => {
            return(
              <ListItem
                key={request.id}
              >
                <ListItem.Chevron/>
                <ListItem.Content>
                  <ListItem.Title>{request.passengerId}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            )
          })
        }

    </SafeAreaView>
  );
};

export default HomeDriver;

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
