import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Countries from "./components/Countries";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to KnowYourWorld</Text>
      <Countries />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    display: "flex",
  },
  heading: {
    fontSize: 20,
    marginBottom: 50,
    textAlign: "center",
  },
});
