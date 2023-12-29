import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Globe from "./Globe";
const Landingpage = () => {
  return (
    <View style={styles.container}>
      <Globe />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
});

export default Landingpage;
