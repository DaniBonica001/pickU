//import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
  Switch
} from "react-native";
import Logo from "../assets/logo.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { auth } from "../firebase";
import { db } from "../firebase";

const SignIn = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [user, setUsername] = useState({
    id: "",
    password: "",
  });

  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    signIn(user);
  };

  async function signIn(item) {
    try {
      const responseP = await db
        .collection("passenger")
        .where("id", "==", item.id)
        .where("password", "==", item.password)
        .get();
      const responseD = await db
        .collection("driver")
        .where("id", "==", item.id)
        .where("password", "==", item.password)
        .get();
      let items = [];
      responseP.forEach((resp) => {
        items.push(resp.data());
      });
      responseD.forEach((resp) => {
        items.push(resp.data());
      });
      console;
      if (items.length != 0) {
        alert("Se inicio sesion como " + item.id);

        if(isEnabled){
          navigation.navigate("HomeDriver");
        }else{
          navigation.navigate("HomeScreen");
        }

      } else {
        alert("Contraseña o usuario incorrecto");
      }
    } catch (error) {
      alert(error);
    }
  }

  const handleChangeText = (name, value) => {
    setUsername({ ...user, [name]: value });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const navigation = navigation.navigate("HomeScreen");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUpPassenger = () => {
    navigation.navigate("RegisterPassenger");
  };

  const handleSignUpDriver = () => {
    navigation.navigate("RegisterDriver");
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
            iconName="account-box-outline"
            label="Cédula de ciudadanía"
            placeholder="Cédula de ciudadanía"
            onChangeText={(value) => handleChangeText("id", value)}
          />
          <CustomInput
            iconName="lock-outline"
            label="Password"
            placeholder="Ingresa tu contraseña"
            secureTextEntry={true}
            onChangeText={(value) => handleChangeText("password", value)}
          />

          <View style={styles.switchContainer}>
            <Text>Iniciar como conductor</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#5A7AFF" : "#A9A8A8"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

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
    padding: 30
  },
  logo: {
    width: "70%",
    maxWidth: 500,
    maxHeight: 200,
  },
  switchContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row'
  }
});
