import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    // console.log(enteredGoalText);

    if (enteredGoalText.length > 3) {
      setGoals((currentGoals) => [
        ...currentGoals,
        { text: enteredGoalText, id: Math.random().toString() },
      ]);
    }
  }
  // for delete item when we press on the item
  const deleteGoalHandler = (id) => {
    // console.log('delete');
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                deleteGoal={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
