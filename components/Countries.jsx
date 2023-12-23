import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
const Countries = ({ name, image, about }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Countrie Name: Nemacka</Text>
        <Image
          style={styles.flag}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png",
          }}
        />
        <Text>Countrie About: Nesto </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 180,
    backgroundColor: "gray",
    borderRadius: 13,
  },
  content: {
    padding: 10,
  },
  flag: {
    width: 100,
    height: 70,
  },
});
export default Countries;
