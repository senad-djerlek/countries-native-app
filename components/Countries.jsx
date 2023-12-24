import React, { useState } from "react";
import { Touchable, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import ContentItems from "./ContentItems";
const Countries = ({ name, image, about }) => {
  
  return (
    <View style={styles.container}>
      <ContentItems/>
      <ContentItems/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
  justifyContent: 'space-around',
  gap: 20,
  display:"flex",
  flexDirection:"row",
  }
});
export default Countries;
