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
    bababoy
  }

  return (
    <View>
      <Text>Request Screen</Text>
      <Text>Id request: {id}</Text>
      <Text>Fecha: {date}</Text>
      <Text>Id cupo: {cupoId}</Text>
      <Text>Id pasajero: {passengerId}</Text>
      <Text>Id conductor:{driverId}</Text>

      <View style={styles.container}>
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

        <CustomButton
          text="Revisar perfil"
          onPress={checkProfile}
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
});

