import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Countries from "./components/Countries";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to KnowYourWorld</Text>
      <Countries
      // name={items.name}
      // image={items.image}
      // about={items.about}
      ></Countries>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
