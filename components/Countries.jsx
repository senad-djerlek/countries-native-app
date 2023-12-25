import React, { useState } from "react";
import { Touchable, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import ContentItems from "./ContentItems";
import Buton from "./Buton";
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
      name: "Japan",
      population: 125360000,
      flagImageUrl: "https://flagcdn.com/w320/jp.png",
    },
    {
      id: 6,
      name: "Brazil",
      population: 213993437,
      flagImageUrl: "https://flagcdn.com/w320/br.png",
    },
    {
      id: 7,
      name: "Australia",
      population: 25766663,
      flagImageUrl: "https://flagcdn.com/w320/au.png",
    },
    {
      id: 8,
      name: "France",
      population: 65273511,
      flagImageUrl: "https://flagcdn.com/w320/fr.png",
    },
    {
      id: 9,
      name: "Canada",
      population: 37742154,
      flagImageUrl: "https://flagcdn.com/w320/ca.png",
    },
    {
      id: 10,
      name: "South Africa",
      population: 59973300,
      flagImageUrl: "https://flagcdn.com/w320/za.png",
    },
    {
      id: 11,
      name: "South Korea",
      population: 51269185,
      flagImageUrl: "https://flagcdn.com/w320/kr.png",
    },
    {
      id: 14,
      name: "Mexico",
      population: 128932753,
      flagImageUrl: "https://flagcdn.com/w320/mx.png",
    },
  ]);
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (itemId) => {
    setExpandedId((prevId) => (prevId === itemId ? null : itemId));
  };
  // const [newText, setNewText] = useState(null);
  // const [newTexts, setNewTexts] = useState("");

  // const changeText = () => {
  //   setNewText(true);
  //   if (newText) {
  //     setNewTexts("Seka");
  //     setNewText(false);
  //   } else if (!newText) {
  //     setNewTexts("Demir");
  //   }
  // };

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
      {/* <Buton text={newTexts} onClick={changeText} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 330,
    flexWrap: "wrap",
    // backgroundColor: "blue",
    gap: 20,
  },
});
export default Countries;
