import React, { useState } from "react";
import { Touchable, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import ContentItems from "./ContentItems";
const Countries = () => {
  const [countriesData, setCountriesData] = useState([
    {
      id: 1,
      name: "China",
      population: 1444216107,
      flagImageUrl: "https://flagcdn.com/w320/cn.png",
    },
    {
      id: 2,
      name: "India",
      population: 1393409038,
      flagImageUrl: "https://flagcdn.com/w320/in.png",
    },
    {
      id: 3,
      name: "United States",
      population: 332915073,
      flagImageUrl: "https://flagcdn.com/w320/us.png",
    },
    {
      id: 4,
      name: "Indonesia",
      population: 276361783,
      flagImageUrl: "https://flagcdn.com/w320/id.png",
    },
    {
      id: 5,
      name: "Indonesia",
      population: 276361783,
      flagImageUrl: "https://flagcdn.com/w320/id.png",
    },
    {
      id: 6,
      name: "Indonesia",
      population: 276361783,
      flagImageUrl: "https://flagcdn.com/w320/id.png",
    },
  ]);
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (itemId) => {
    setExpandedId((prevId) => (prevId === itemId ? null : itemId));
  };

  return (
    <View style={styles.container}>
      {countriesData.map((el) => (
        <ContentItems
          key={el.id}
          id={el.id}
          name={el.name}
          population={el.population}
          image={el.flagImageUrl}
          isExpanded={expandedId === el.id}
          onPress={() => toggleExpand(el.id)}
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
  },
});
export default Countries;
