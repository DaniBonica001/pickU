import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CustomButton from "../components/CustomButton";
import { Entypo } from "@expo/vector-icons";
import colors from "../colors";
import { db } from "../firebase";

const RequestScreen = ({ route, navigation }) => {
  const { id, date, cupoId, passengerId, driverId } = route.params;

  function handleAccept(){
    alert("Cupo aceptado")
  }
  function handleReject(){
    alert("Cupo rechazado")
  }
  function checkProfile(){
    navigation.navigate("ProfileScreen")
  }

  return (
    <View>
      <Text style={styles.text}>Request Screen</Text>
      <Text style={styles.text}>Fecha: {date}</Text>
      <Text style={styles.text}>Id conductor:{driverId}</Text>

      <View style={styles.container}>
        
        <CustomButton
          text="Revisar perfil"
          onPress={checkProfile}
          bgColor="#FAFAFA"
          fgColor="#131530"
        />
        <CustomButton
          text="Aceptar"
          onPress={handleAccept}
          bgColor="#2EF181"
          fgColor="#131530"
        />

        <CustomButton
          text="Rechazar"
          onPress={handleReject}
          bgColor="#FA432D"
          fgColor="#131530"
        />

        
      </View>
    </View>
  );
};

export default RequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

