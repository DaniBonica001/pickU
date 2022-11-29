import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { db } from "../firebase";
import { logInUser } from "./SignIn";

const CreateCupo = ({navigation}) => {
  const { height } = useWindowDimensions();

  const [cupo, setCupo] = useState({
    date: "",
    beginning: "",
    arrive: "",
    driverId: logInUser,
    passengers: [],
    spaces: 0,
    car: "",
    carId: "",
  });

  const onRegisterPressed = () => {
    insert(cupo);
  };

  const handleChangeText = (name, value) => {
    setCupo({ ...cupo, [name]: value });
  };

  async function insert(item) {
    try {
      const response = await db
        .collection("cupo")
        .where("carId", "==", item.carId)
        .get();
      let items = [];
      response.forEach((resp) => {
        items.push(resp.data());
      });
      await db.collection("cupo").add(item);
      alert("Se agregó un cupo");
      navigation.navigate("HomeScreen");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <SafeAreaView
      style={{ backgroundColor: "white", flex: 1, alignContent: "center" }}
    >
      <ScrollView style={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text style={{ color: "#131530", fontSize: 30, fontWeight: "bold" }}>
          ¡Estás creando un{" "}
        </Text>
        <Text style={{ color: "#5A7AFF", fontSize: 30, fontWeight: "bold" }}>
          Cupo!
        </Text>
        <View style={styles.inputContainer}>
          <CustomInput
            iconName="calendar-range"
            label="Fecha"
            placeholder="Fecha"
            onChangeText={(value) => handleChangeText("date", value)}
          />

          <CustomInput
            iconName="map-marker-outline"
            label="Lugar de Inicio"
            placeholder="Lugar de Inicio"
            onChangeText={(value) => handleChangeText("beginning", value)}
          />

          <CustomInput
            iconName="map-marker"
            label="Lugar de Llegada"
            placeholder="Lugar de Llegada"
            onChangeText={(value) => handleChangeText("arrive", value)}
          />

          <CustomInput
            iconName="account-multiple-plus"
            label="Espacios disponibles"
            placeholder="Espacios disponibles"
            onChangeText={(value) => handleChangeText("spaces", value)}
          />

          <CustomInput
            iconName="car"
            label="Marca y modelo del vehiculo"
            placeholder="Vehiculo"
            onChangeText={(value) => handleChangeText("car", value)}
          />

          <CustomInput
            iconName="card-bulleted-settings"
            label="Placa del vehiculo"
            placeholder="Vehiculo"
            onChangeText={(value) => handleChangeText("carId", value)}
          />

          <CustomButton text="Crear cupo" onPress={onRegisterPressed} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateCupo;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    marginVertical: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 500,
    maxHeight: 200,
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});
