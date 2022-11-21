import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import SignIn from "./screens/SignIn";
import { store } from "./store";
//  1) Set up redux
//

export default function App() {
  return (
    <Provider style={styles.container} store={store} >
      <SignIn />
    </Provider>
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
