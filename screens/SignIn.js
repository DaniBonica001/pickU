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
      let items = [];
      let response= ""
      if(isEnabled){
         response = await db
        .collection("driver")
        .where("id", "==", item.id)
        .where("password", "==", item.password)
        .get();
      }else{
        response = await db
        .collection("passenger")
        .where("id", "==", item.id)
        .where("password", "==", item.password)
        .get();
      }
      response.forEach((resp) => {
        items.push(resp.data());
      });
     
      if (items.length != 0) {
        if(isEnabled){
          navigation.navigate("HomeDriver");
          alert("Se inicio sesion como conductor: " + item.id);
        }else{
          navigation.navigate("HomeScreen");
          alert("Se inicio sesion como pasajero: " + item.id);
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
      <ScrollView showsVerticalScrollIndicator={false} style={styles.main} scrollEnabled={false}>
        <View style={styles.container}>
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode="contain"
          />

          <CustomInput
            iconName="account-box-outline"
            label="Cédula de Ciudadanía"
            placeholder="Cédula de ciudadanía"
            onChangeText={(value) => handleChangeText("id", value)}
          />
          <CustomInput
            iconName="lock-outline"
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            secureTextEntry={true}
            onChangeText={(value) => handleChangeText("password", value)}
          />
          
          

          <View style={styles.switchContainer}>
            <Text style={styles.label}>Iniciar como conductor</Text>
            <Switch
              trackColor={{ false: "#24f06b", true: "#E4E9F1" }}
              thumbColor={isEnabled ? "#5a7aff" : "#ffffff"}
              ios_backgroundColor="#ffffff"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <CustomButton text="Ingresar" onPress={onSignInPressed} />

          <CustomButton
            text="Registrarse como Conductor"
            onPress={handleSignUpDriver}
            bgColor="#E4E9F1"
            fgColor="#131530"
          />

          <CustomButton
            text="Registrarse como Pasajero"
            onPress={handleSignUpPassenger}
            bgColor="#E4E9F1"
            fgColor="#131530"
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
    width: "50%",
    maxWidth: 500,
    maxHeight: 200,
  },
  switchContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row'
  },
  main: {
    backgroundColor: "#FFFFFF"
  },
  label: {
    marginRight: 10,
    fontSize: 14,
    color: "#131530",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
