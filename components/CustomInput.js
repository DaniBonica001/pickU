import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CustomInput = ({
  label,
  error,
  value,
  setValue,
  iconName,
  placeholder,
  secureTextEntry,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          { borderColor: error ? "red" : isFocused ? "#5a7aff" : "#E4E9F1" },
        ]}
      >
        <Icon
          name={iconName}
          style={{ fontSize: 22, color: "#797BB5", marginRight: 10 }}
        />

        <TextInput
          style={styles.input}
          secureTextEntry={secureTextEntry}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </View>

      {error && (
        <Text style={{ color: "red", fontSize: 12, marginTop: 7 }}>
          {error}
        </Text>
      )}
      
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    marginBottom: 20,
  },
  label: {
    marginVertical: 10,
    fontSize: 14,
    color: "#131530",
    fontWeight: "bold",
    
  },

  inputContainer: {
    height: 50,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: "center",
  },
  input: {
    color: "#797BB5",
    flex: 1,
  },
});
