import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
const ContentItems = ({ name, population, image, onPress, isExpanded }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View
          style={{
            height: isExpanded ? "auto" : 92,
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
              <Text>{name}</Text>
              <Text>Population:{population}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 120,
    flex: "wrap",
    backgroundColor: "gray",
    borderRadius: 10,
    overflow: "hidden",
  },

  content: {
    padding: 3,
  },
  flag: {
    width: "auto",
    height: 66,
    borderRadius: 10,
  },
});

export default ContentItems;
