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
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          { borderColor: error ? "red" : isFocused ? "#797BB5" : "#F3F4FB" },
        ]}
      >
        <Icon
          name={iconName}
          style={{ fontSize: 22, color: "#797BB5", marginRight: 10 }}
        />

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          secureTextEntry={secureTextEntry}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
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
    width: "100%",
    marginBottom: 20,
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: "#BABBC3",
  },

  inputContainer: {
    height: 50,
    backgroundColor: "#FEF4FB",
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
  },
  input: {
    color: "797BB5",
    flex: 1,
  },
});
