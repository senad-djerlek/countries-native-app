import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
const ContentItems = ({ name, population, image, onPress, isExpanded }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View
          style={{
            height: isExpanded ? "auto" : 70,
          }}
        >
          <View style={styles.content}>
            <Image
              style={styles.flag}
              source={{
                uri: image,
              }}
            />

            <View style={styles.content}>
              <Text>Country Name: {name}</Text>
              <Text>Populacija: {population}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 100,
    flex: "wrap",
    backgroundColor: "gray",
    borderRadius: 10,
    overflow: "hidden",
    margin: 4,
  },
  content: {
    padding: 10,
  },
  flag: {
    width: "auto",
    height: 50,
  },
});

export default ContentItems;
