import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const NewSetInput = () => {
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [weight, setWeight] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        value={reps}
        onChangeText={setReps}
        placeholder="Reps "
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        value={sets}
        onChangeText={setSets}
        placeholder="Sets"
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        value={weight}
        onChangeText={setWeight}
        placeholder="Pounds"
        keyboardType="numeric"
      ></TextInput>
      <TouchableOpacity>
        <Ionicons name="add-circle" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default NewSetInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cfff00',
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-around',
    borderRadius: 30,
    marginHorizontal: 5,
  },
});
