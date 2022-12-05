import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {
  const deleteGoalHandler = () => {
    props.deleteGoal(props.id);
  };

  return (
    <Pressable onPress={deleteGoalHandler}>
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingLeft: 10,
    marginBottom: 7,
    backgroundColor: "#333",
    borderRadius: 6,
  },
  goalItemText: {
    color: "#fff",
  },
});
