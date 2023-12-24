import React, { useState } from "react";
import { Touchable, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import ContentItems from "./ContentItems";
const Countries = () => {
  const [countriesData, setCountriesData] = useState([
    {
      name: "China",
      population: 1444216107,
      flagImageUrl: "https://flagcdn.com/w320/cn.png",
    },
    {
      name: "India",
      population: 1393409038,
      flagImageUrl: "https://flagcdn.com/w320/in.png",
    },
    {
      name: "United States",
      population: 332915073,
      flagImageUrl: "https://flagcdn.com/w320/us.png",
    },
    {
      name: "Indonesia",
      population: 276361783,
      flagImageUrl: "https://flagcdn.com/w320/id.png",
    },
    {
      name: "Indonesia",
      population: 276361783,
      flagImageUrl: "https://flagcdn.com/w320/id.png",
    },
    {
      name: "Indonesia",
      population: 276361783,
      flagImageUrl: "https://flagcdn.com/w320/id.png",
    },
  ]);
  return (
    <View style={styles.container}>
      {countriesData.map((el) => (
        <ContentItems
          key={el.id}
          name={el.name}
          population={el.population}
          image={el.flagImageUrl}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    maxWidth: 250,
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },
});
export default Countries;
