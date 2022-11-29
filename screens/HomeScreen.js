import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
import {db} from '../firebase.js';
import { ListItem, Avatar} from '@rneui/base';
import { logInUser } from "./SignIn";

const HomeScreen = ({navigation}) => {

  const [cupos, setCupos] = useState([]);

  useEffect(() => {
    db.collection('cupo').onSnapshot(querySnapshot => {
      const cupos = [];
      querySnapshot.docs.forEach(doc => {
        const {date, beginning, arrive, driverId, passengers, spaces, car, carId} = doc.data()
        cupos.push({
          id: doc.id,
          date, 
          beginning, 
          arrive, 
          driverId, 
          passengers,
          spaces,
          car,
          carId,
        })
      })
      setCupos(cupos)
    })

  })

  const handleList = () => {
    console.log(cupos);
  }

  return (
    <SafeAreaView style={styles.root}>
      <Text>Cupos Disponibles</Text>

      <View>
        {
          cupos.map(cupo => {
            return(
              <ListItem
                key={cupo.id} onPress={() => navigation.navigate("CupoScreen", {
                 cupo,
                })}
              >
                <ListItem.Chevron/>
                <ListItem.Content>
                  <ListItem.Title>{cupo.arrive}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            )
          })
        }
      </View>

      <View style={styles.container}>

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
  },
  container:  {
    flex: 1,
    flexDirection:  'row',
    alignSelf: 'flex-end'
  }
});
