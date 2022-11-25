import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";

import SignIn from "./screens/SignIn";
import RegisterDriver from "./screens/RegisterDriver";
import RegisterPassenger from "./screens/RegisterPassenger";
import HomeScreen from "./screens/HomeScreen";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}> 
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="RegisterDriver" component={RegisterDriver} />
      <Stack.Screen name="RegisterPassenger" component={RegisterPassenger} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />

      </Stack.Navigator>

    </NavigationContainer>
    /*
    <Provider style={styles.container} store={store} >
      <SignIn />
    </Provider>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    alignItems: "center",
    justifyContent: "center",
  },
});
