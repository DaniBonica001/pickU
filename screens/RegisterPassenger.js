import React from "react";
import {
  ScrollViewComponent,
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import Logo from "../assets/logo.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const RegisterPassenger = () => {

  const { height } = useWindowDimensions();

  return (
    <View style={styles.inputContainer}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />

      <CustomInput
            label="Name"
            placeholder="Ingresa tu correo electrónico"
            value={username}
            setValue={setUsername}
      />
      <CustomInput
            label="Email"
            placeholder="Ingresa tu correo electrónico"
            value={username}
            setValue={setUsername}
      />
    </View>
  );
};

export default RegisterPassenger;

const styles = StyleSheet.create({
  inputContainer:{
    flex: 1,    
    alignItems: "center"

  },
  logo: {
    width: "70%",
    maxWidth: 500,
    maxHeight: 200,
  },
});

