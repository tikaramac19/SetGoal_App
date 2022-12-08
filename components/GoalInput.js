import { View, Button, TextInput, StyleSheet, Modal,Image } from "react-native";
import { useState } from "react";
// import {image} from "../assets/images/wallpaper.png"
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    // console.log(e);
    setEnteredGoalText(enteredText);
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };
  // const cancleModel = () =>{

  // }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/wallpaper.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your future goal !"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc"/>
          </View>
          <View style={styles.button}>
            <Button title="Cancle" onPress={props.onCancle} color="#f31282"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#311b6b"
  },
  textInput: {
    color:'#120438',
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    width: "90%",
    padding: 7,
  },
  buttonContainer: {
    marginTop:15,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image:{
    width:100,
    height:100,
    marginBottom:30
  }
});
