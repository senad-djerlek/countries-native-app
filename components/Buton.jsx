import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native";
const Buton = ({ text, onClick }) => {
  return (
    <View style={style.container}>
      <Button title={text} onPress={onClick} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "45%", // Adjust the width as needed
    alignSelf: "center", // Center the button horizontally
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#2ecc71", // Border color
    backgroundColor: "#27ae60", // Background color
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
export default Buton;
