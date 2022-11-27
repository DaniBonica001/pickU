import React,{useState} from "react";
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
import {db} from '../firebase'

const RegisterDriver = ({ navigation }) => {
  const { height } = useWindowDimensions();

  const [driver, setDriver] = useState({
    name: "",
    id: "",
    birthday: "",
    email: "",
    phone: "",
    password: "",
  });

  const onRegisterPressed = () => {
    insert(driver)
    
  };

  const handleChangeText = (name,value) => {
    setDriver({...driver, [name]: value});
  };

  async function insert(item){
    try {
      const response = await db.collection('driver').where('id','==',item.id).get()
      let items=[]
      response.forEach((resp) => {
        items.push(resp.data())
      });
      if(items.length!=0){
        alert("ya hay un conductor con esta id");
      }else{
        await db.collection('driver').add(item)
        alert("Se agrego un conductor");
        navigation.navigate("SignIn")
      }
    } catch (error) {
      alert(error)
    }
  }

  async function checkUser(id){
    return await db.collection('driver').where('id','==',id)
  }

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
            onChangeText= {(value) => handleChangeText("name", value)}
          />

          <CustomInput
            iconName="account-box-outline"
            label="Cédula de ciudadanía"
            placeholder="Cédula de ciudadanía"
            onChangeText= {(value) => handleChangeText("id", value)}
          />

          <CustomInput
            iconName="email-outline"
            label="Correo institucional"
            placeholder="Correo institucional"
            onChangeText= {(value) => handleChangeText("email", value)}
          />

          <CustomInput
            iconName="calendar-range"
            label="Fecha de nacimiento"
            placeholder="Fecha de nacimiento"
            onChangeText= {(value) => handleChangeText("birthday", value)}
          />

          <CustomInput
            iconName="phone-outline"
            label="Teléfono"
            placeholder="Número de celular"
            onChangeText= {(value) => handleChangeText("phone", value)}
          />
          

          <CustomInput
            iconName="lock-outline"
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            secureTextEntry={true}
            onChangeText= {(value) => handleChangeText("password", value)}
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
