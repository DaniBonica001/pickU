import React, {useState} from 'react';
import { StyleSheet, Text,  View, Image, useWindowDimensions, ScrollView } from 'react-native';
import Logo from "../assets/logo.png";
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign in pressed");
    };

    const onDriverPressed = () => {
        console.warn("Driver pressed");
    };

    const onPassengerPressed = () => {
        console.warn("Passenger pressed");
    };
    
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />
        
        <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />


        <CustomButton text="Ingresar" onPress={onSignInPressed}/>
        <CustomButton text="Registrarse como Conductor" onPress={onDriverPressed} bgColor="#CDD7FF" fgColor="#5A7AFF"/>
        <CustomButton text="Registrarse como Pasajero" onPress={onPassengerPressed} bgColor="#CDD7FF" fgColor="#5A7AFF"/>
        </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
    root:{
        alignItems: "center",
        padding: 30,

    },
    logo:{
        width: "70%",
        maxWidth: 500,
        maxHeight: 200
    }
});