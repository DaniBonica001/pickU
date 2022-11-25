import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView, KeyboardAvoidingView } from "react-native";
import Logo from "../assets/logo.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { auth } from "../firebase";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    auth
      .signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Logged in with:", user.username);
      })
      .catch((error) => alert(error.message));
  };

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("HomeScreen");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUpDriver = () => {
    navigation.navigate("RegisterDriver");
  };

  const handleSignUpPassenger = () => {
    navigation.navigate("RegisterPassenger");
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode="contain"
          />

          <CustomInput
            label="Email"
            placeholder="Ingresa tu correo electrónico"
            value={username}
            setValue={setUsername}
          />
          <CustomInput
            label="Password"
            placeholder="Ingresa tu contraseña"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />

          <CustomButton text="Ingresar" onPress={onSignInPressed} />

          <CustomButton
            text="Registrarse como Conductor"
            onPress={handleSignUpDriver}
            bgColor="#CDD7FF"
            fgColor="#5A7AFF"
          />

          <CustomButton
            text="Registrarse como Pasajero"
            onPress={handleSignUpPassenger}
            bgColor="#CDD7FF"
            fgColor="#5A7AFF"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  logo: {
    width: "70%",
    maxWidth: 500,
    maxHeight: 200,
  },
});
