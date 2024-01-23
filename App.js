import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>To Do List</Text>
        <View>
          <Image
            style={{ width: 190, height: 140, margin: 12 }}
            source={require('./assets/default.png')}
          />
        </View>
        <View>
          <Text style={styles.TasksItems}>Task 1</Text>
          <Image
            style={{ width: 26, height: 26, position: 'absolute', margin: 30, padding: 10 }}
            source={require('./assets/check.png')}
          />
          <Image
            style={{ width: 20, height: 20, position: 'absolute', margin: 35, padding: 10, left: 290 }}
            source={require('./assets/circle.png')}
          />
        </View>
        <View>
          <Text style={styles.TasksItems}>Task 2</Text>
          <Image
            style={{ width: 26, height: 26, position: 'absolute', margin: 30, padding: 10 }}
            source={require('./assets/check.png')}
          />
          <Image
            style={{ width: 20, height: 20, position: 'absolute', margin: 35, padding: 10, left: 290 }}
            source={require('./assets/circle.png')}
          />
        </View>
        <View>
          <Text style={styles.TasksItems}>Task 3</Text>
          <Image
            style={{ width: 26, height: 26, position: 'absolute', margin: 30, padding: 10 }}
            source={require('./assets/check.png')}
          />
          <Image
            style={{ width: 20, height: 20, position: 'absolute', margin: 35, padding: 10, left: 290 }}
            source={require('./assets/circle.png')}
          />
        </View>
        <View>
          <Text style={styles.TasksItems}>Task 4</Text>
          <Image
            style={{ width: 26, height: 26, position: 'absolute', margin: 30, padding: 10 }}
            source={require('./assets/check.png')}
          />
          <Image
            style={{ width: 20, height: 20, position: 'absolute', margin: 35, padding: 10, left: 290 }}
            source={require('./assets/circle.png')}
          />
        </View>

        <View>
          <Text style={styles.addTaskText}>Type Task Here</Text>
          <Text style={styles.plus}>+</Text>
          <Text style={styles.min}>-</Text>

        </View>

        <StatusBar style="auto" />

      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  body: {
    backgroundColor: "#332fa1",
    flex: 1,
  },

  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    /*  position: 'absolute',
     top: 130,
     left: 'center', */
  },

  TasksItems: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: 'gray',
    margin: 12,
    padding: 10,
    width: 350,
    height: 60,
    textAlign: 'center',
    borderRadius: 10,
  },

  addTaskText: {
    backgroundColor: 'gray',
    width: 172,
    height: 50,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 15,
    padding: 10,
    textAlign: 'center',
    borderRadius: 10,
    right: 80,
    top: 20
  },
  plus: {
    backgroundColor: 'gray',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 50,
    textAlign: 'center',
    lineHeight: 56,
    left: 140,
    top: 35,
  },
  min: {
    backgroundColor: 'gray',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',

    position: 'absolute',
    fontSize: 70,
    textAlign: 'center',
    lineHeight: 64,
    left: 210,
    top: 35,
  }

});

export default App;
