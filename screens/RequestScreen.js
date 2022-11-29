import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CustomButton from "../components/CustomButton";
import { Entypo } from "@expo/vector-icons";
import colors from "../colors";

const RequestScreen = ({ route, navigation }) => {
  const { id, date, cupoId, passengerId, driverId } = route.params;

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
          onPress={() => console.log("sape")}
          bgColor="#2EF181"
          fgColor="#131530"
        />

        <CustomButton
          text="Rechazar"
          onPress={() => console.log("sape")}
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
