import { FlatList, StyleSheet, Text, View } from 'react-native';
import exercises from '../../assets/data/exercises.json';
import ExerciseList from '../components/ExerciseList';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Workouts</Text>
      <FlatList
        data={exercises}
        renderItem={({ item }) => <ExerciseList item={item} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#18171c',
  },
});
