import React, {useState} from 'react'
import { Touchable, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
const ContentItems = () => {
    
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded)
  }
  return (
    <TouchableOpacity
    style={[styles.container, {height: expanded ? 'auto' : 120}]}
    onPress={toggleExpand}
    >
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.flag}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png",
          }}
        />
        {expanded && (
          <View>
            <Text>Country Name: Nemacka</Text>
            <Text>Glavni grad: Berlin</Text>
            <Text>Valuta : EURO  </Text>
            <Text>Broj stanovnika: 150 miliona</Text>
            <Text>Najpoznatija ličnost: Hitler</Text>
            <Text>Trenutno vreme : 10:00 PM</Text>
            <Text>Sluzbeni jezik : Nemacki</Text>
            <Text>Najpoznatija znamenitost : Berlinski zid</Text>
          </View>
        )}
      </View>
    </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container: {
      display:"flex",
      justifyContent: "space-around",
      width: 150,
      backgroundColor: "gray",
      borderRadius: 13,
      overflow: 'hidden'
    },
    content: {
      padding: 10,
    },
    flag: {
      width: 'auto',
      height: 100,
    },
  });

export default ContentItems