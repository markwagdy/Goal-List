import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }
  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }])
    endAddGoalHandler();
    console.log(enteredGoalText)
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title='Add New Goal' color={'#e4d0ff'} style={styles.startButton} onPress={startAddGoalHandler}></Button>
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem text={itemData.item.text}
                id={itemData.item.id}
                onDeleteHandler={deleteGoalHandler}
              />
            )
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
          alwaysBounceVertical={true}>

        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  passedItem: {
    opacity: 0.5
  }
  ,
  goalsContainer: {
    flex: 4
  },
  startButton: {
    color: 'black',
    backgroundColor: 'black'
  }
});
