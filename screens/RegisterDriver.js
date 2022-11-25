import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import Logo from "../assets/logo.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";

const RegisterDriver = ({ navigation }) => {
  const { height } = useWindowDimensions();

  const onRegisterPressed = () => {
    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: "white", flex: 1, alignContent: "center" }}
    >
      <ScrollView style={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.2 }]}
          resizeMode="contain"
        />
        <Text style={{ color: "#131530", fontSize: 30, fontWeight: "bold" }}>
          ¡Te estas registrando como{" "}
        </Text>
        <Text style={{ color: "#5A7AFF", fontSize: 30, fontWeight: "bold" }}>
          Conductor!
        </Text>
        <View style={styles.inputContainer}>
          <CustomInput
            iconName="account-circle-outline"
            label="Nombre"
            placeholder="Nombre completo"
          />

          <CustomInput
            iconName="account-box-outline"
            label="Cédula de ciudadanía"
            placeholder="Cédula de ciudadanía"
          />

          <CustomInput
            iconName="calendar-outline"
            label="Fecha de nacimiento"
            placeholder="Fecha de nacimiento"
          />

          <CustomInput
            iconName="email-outline"
            label="Correo institucional"
            placeholder="Correo institucional"
          />

          <CustomInput
            iconName="phone-outline"
            label="Teléfono"
            placeholder="Número de celular"
          />
          

          <CustomInput
            iconName="lock-outline"
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            secureTextEntry={true}
          />

          <CustomButton text="siguiente" onPress={onRegisterPressed} />

          <Text
            style={styles.text}
          >¿Ya tienes una cuenta?</Text>
          <Text onPress={() => navigation.navigate("SignIn")}
            style={{ color: "#5A7AFF", fontSize: 16, fontWeight: "bold" }}
          >Inicia sesión
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterDriver;

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
