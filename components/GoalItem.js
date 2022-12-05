import { StyleSheet,View, Text, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalItemText}>{props.text}</Text>
    </View>
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
