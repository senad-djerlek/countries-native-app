import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Countries from "./components/Countries";
import { useState } from "react";
import Buton from "./components/Buton";
import Landingpage from "./components/Landingpage";
import Globe from "./components/Globe";
export default function App() {
  const [onPressButton, setOnPressButton] = useState(false);
  const onPress = () => {
    setOnPressButton(true);
    if (onPressButton) {
      setOnPressButton(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to KnowYourWorld</Text>
      <Buton
        text={onPressButton ? "Vrati me" : "Stisni me da odes na glavnu"}
        onClick={onPress}
      ></Buton>
      
      {onPressButton ? <Countries /> : <Landingpage />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    display: "flex",
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
  },
});
