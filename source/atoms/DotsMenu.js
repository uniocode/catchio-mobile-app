import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../../specs/Colors';
import Color from '../../specs/Colors';

const DotsMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    flexDirection: 'column',
    marginBottom: 10,
  },
  row: {
    width: '100%',
    height: 26 / 3,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 0.7,
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: Color.pastelCoral,
    borderRadius: 4,
  },
});

export default DotsMenu;
