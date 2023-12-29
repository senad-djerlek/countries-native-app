import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Globe from "./Globe";
const Landingpage = () => {
  return (
    <View>
      <Text>Hello User</Text>
      <Globe />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default Landingpage;
