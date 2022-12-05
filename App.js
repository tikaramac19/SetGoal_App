import { StyleSheet, View,FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
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

  // console.log(goals)

  return (
    <View style={styles.appContainer}>
      <GoalInput
        onAddGoal={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

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
