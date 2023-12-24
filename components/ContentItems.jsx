import React, { useState } from "react";
import { Touchable, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
const ContentItems = ({ name, population, image }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <TouchableOpacity
      style={[styles.container, { height: expanded ? "auto" : 70 }]}
      onPress={toggleExpand}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            style={styles.flag}
            source={{
              uri: image,
            }}
          />
          {expanded && (
            <View style={styles.content}>
              <Text>Country Name: {name}</Text>
              <Text>Populacija: {population}</Text>
            </View>
          )}
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
    borderRadius: 13,
    overflow: "hidden",
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
