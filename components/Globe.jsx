import React, { useState } from 'react';
import { StyleSheet, View, PanResponder, Image } from 'react-native';

const Globe = () => {
  const [rotation, setRotation] = useState(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      setRotation(rotation + gestureState.dx / 2); // Podešavanje brzine rotacije
    },
  });

  return (
    <View style={styles.container}>
      <View
        style={[styles.globe, { transform: [{ rotate: `${rotation}deg` }] }]}
        {...panResponder.panHandlers}
      >
        <Image
          source={{ uri: 'https://cdn.pixabay.com/photo/2016/04/24/04/53/globe-1348777_640.png' }}
          style={styles.globeImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  globe: {
    width: 300,
    height: 300,
    borderRadius: '50%',
    overflow: 'hidden',
  },
  globeImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
});

export default Globe;
