import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
import {db} from '../firebase.js';
import { ListItem, Avatar} from '@rneui/base';
import { logInUser } from "./SignIn";

const HomeDriver = ({navigation}) => {

  const [requests, setRequests] = useState([]);
  
  useEffect(() => {
    db.collection('request').where("driverId", "==", logInUser).onSnapshot(querySnapshot => {
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
    //alert("bababoy "+logInUser)
  }

  return (
    <SafeAreaView>
      <View style={styles.topBar}>
        <Text style={styles.title}>Cupos Solicitados</Text>       
      </View>

      <View>
        {
          requests.map(request => {
            return(
              <ListItem
                key={request.id} onPress={() => (navigation.navigate("RequestScreen", request))}
              >
                <ListItem.Chevron/>
                <ListItem.Content>
                  <ListItem.Title>{request.passengerId}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            )
          })
        }
      </View>

      <View style={styles.buttonContainer}>

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

        

    </SafeAreaView>
  );
};

export default HomeDriver;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row', 
    backgroundColor: "#E4E9F1", 
    alignItems: "center", 
    paddingHorizontal: 20, 
    padding: 20
},
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#131530",
},
  chatButton: {
    backgroundColor: colors.primary,
    height: 75, width: 75,
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  buttonContainer: {
    flexDirection: "row",
    marginLeft: 60,
    marginTop: 350
  }
});
