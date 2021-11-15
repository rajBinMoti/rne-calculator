import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const MyBtn = (props) => {
    console.log(props);
    return (
      <TouchableOpacity style={{ flex: 1, backgroundColor: '#772', margin: 2 }}>
        <Text>{props.text}</Text>
      </TouchableOpacity>

    );

  };

  return (
    // Main View
    <View style={styles.mainView}>
      {/* display */}
      <View style={styles.display}>

      </View>
      {/* Controls */}
      <View style={styles.controls}>
        {/* Row 1 */}
        <View style={styles.row}>
          <TouchableOpacity style={{ flex: 1, backgroundColor: '#772', margin: 2 }}>
            <Text>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, backgroundColor: '#772', margin: 2 }}>
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, backgroundColor: '#772', margin: 2 }}>
            <Text>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, backgroundColor: '#772', margin: 2 }}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        {/* Row 2 */}
        <View style={styles.row}>
          <MyBtn text={4} val='123' />
          <MyBtn text={5} val='123' />
          <MyBtn text={6} val='123' />
          <MyBtn text={'/'} val='123' />
        </View>
        {/* Row 3 */}
        <View style={styles.row}>

        </View>
        {/* Row 4 */}
        <View style={styles.row}>

        </View>

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#2ee',
    flex: 1,
  },
  display: {
    backgroundColor: '#eef',
    flex: 2,
  },
  controls: {
    backgroundColor: '#ee1',
    flex: 8
  },
  row: {
    backgroundColor: '#456',
    flex: 1,
    flexDirection: 'row',
    marginVertical: 2,
  }
});