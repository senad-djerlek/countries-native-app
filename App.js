import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Countries from "./components/Countries";

const App = () => {
  return (

    <View style={styles.container}>
      <Text>Welcome to KnowYourWorld</Text>
      <Countries></Countries>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;


