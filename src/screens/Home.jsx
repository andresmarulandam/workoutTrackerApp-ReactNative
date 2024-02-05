import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ExerciseList from '../components/ExerciseList';
import { useQuery } from '@tanstack/react-query';
import { gql, request } from 'graphql-request';

const exercisesQuery = gql`
  query exercises($muscle: String, $name: String) {
    exercises(muscle: $muscle, name: $name) {
      name
      muscle
      instructions
      equipment
    }
  }
`;
const url = process.env.EXPO_PUBLIC_URL;
const apikey = process.env.EXPO_PUBLIC_GRAPHQL_API_KEY;

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['exercises'],
    queryFn: async () => {
      try {
        const result = await request({
          url,
          document: exercisesQuery,
          requestHeaders: {
            Authorization: `apikey ${apikey}`,
          },
        });

        return result;
      } catch (error) {
        console.error(error);
      }
    },
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch exercises</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Workouts</Text>
      <FlatList
        data={data?.exercises}
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
