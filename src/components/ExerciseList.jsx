import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export default function ExerciseList({ item }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ExerciseDetails', { item });
  };
  return (
    <View style={styles.exercisesContainer}>
      <View>
        <Image
          style={styles.image}
          source={{ uri: 'https://placeholder.com/48' }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.exerciseTitle}>{item.name}</Text>
        <Text style={styles.exerciseInfo}>
          {item.muscle}|{item.equipment}
        </Text>
      </View>
      <View style={styles.touchableContainer}>
        <TouchableOpacity onPress={handlePress}>
          <FontAwesome5 name="arrow-circle-right" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  exercisesContainer: {
    backgroundColor: '#cfff00',
    borderRadius: 30,
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 3,
    flexDirection: 'row',
  },
  image: {
    borderRadius: 50,
    resizeMode: 'contain',
    width: 48,
    height: 48,
    margin: 6,
  },
  textContainer: {
    marginLeft: 2,
  },
  exerciseTitle: {
    fontSize: 16,
    fontWeight: '800',
    marginVertical: 2,
  },
  exerciseInfo: {
    paddingBottom: 2,
  },
  touchableContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 15,
  },
});
