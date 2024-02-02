import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const ExerciseDetails = ({ route }) => {
  const { item } = route.params;
  const [isInstructionExpanded, setIsInstructionExpanded] = useState(false);

  if (!item) {
    return <Text> Exercise not found</Text>;
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.exercisesContainer}>
        <View>
          <Text style={styles.exerciseTitle}>{item.name}</Text>
          <Text style={styles.exerciseInfo}>
            {item.muscle} | {item.equipment}
          </Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.instructionsContainer}>
        <Text
          style={styles.instructions}
          numberOfLines={isInstructionExpanded ? 0 : 4}
        >
          {item.instructions}
        </Text>
        <Text
          onPress={() => setIsInstructionExpanded(!isInstructionExpanded)}
          style={styles.seeMore}
        >
          {isInstructionExpanded ? 'See Less' : 'See more'}
        </Text>
      </ScrollView>
    </View>
  );
};

export default ExerciseDetails;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#18171c',
  },
  exercisesContainer: {
    backgroundColor: '#cfff00',
    borderRadius: 30,
    marginHorizontal: 5,
    marginTop: 10,
  },
  exerciseTitle: {
    fontSize: 32,
    fontWeight: '800',
    marginVertical: 2,
    textAlign: 'center',
  },
  exerciseInfo: {
    fontSize: 20,
    paddingBottom: 10,
    textAlign: 'center',
  },
  instructionsContainer: {
    backgroundColor: '#cfff00',
    borderRadius: 30,
    marginHorizontal: 5,
    padding: 12,
  },
  instructions: {
    fontSize: 20,
    textAlign: 'justify',
  },
  seeMore: {
    alignSelf: 'center',
    padding: 10,
    fontWeight: '800',
    fontSize: 16,
  },
});
