import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const CustomInput = ({ label,value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:14, marginBottom:5, color: "#131530", fontWeight: "bold"}}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginVertical: 2
    
  },

  inputContainer: {
    height:50,
    backgroundColor: "#DDDDDD",    
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#DDDDDD",   
    marginVertical: 1,
    color: "#4D4D4D"   
  }
});
