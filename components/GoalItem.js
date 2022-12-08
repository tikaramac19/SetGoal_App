import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {
  const deleteGoalHandler = () => {
    props.deleteGoal(props.id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={deleteGoalHandler}
      >
        <Text style={styles.goalItemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderWidth: 1,
    marginBottom: 7,
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
  },
  goalItemText: {
    color: "#333",
    paddingVertical: 10,
    paddingLeft: 10,
  },
});
