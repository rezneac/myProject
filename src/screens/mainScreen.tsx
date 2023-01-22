import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { ProgressBar } from "react-native-paper";

const mainScreen = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.topView}>
        <Image source={require("../../assets/imageIcon.png")} />
        <Text style={styles.text1}>
          I'm doing 100 Miles to support cardiac care
        </Text>
      </View>

      <View>
        <Text style={styles.text2}>$86 left to reach $107</Text>
        <ProgressBar
          progress={0.5}
          color={"#1975f2"}
          style={styles.progresBar}
        />
        <Text style={styles.text3}>1 person donated</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Donate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    height: 215,
    width: 300,
    backgroundColor: "white",
    marginTop: 50,
    alignSelf: "center",
    borderRadius: 16,
  },
  topView: {
    flexDirection: "row",
    marginLeft: 18,
    alignItems: "center",
    marginTop: 18,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    margin: 18,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "#1975f2",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
  text1: {
    flex: 1,
    fontSize: 18,
  },
  text2: {
    color: "#1975f2",
    fontSize: 14,
    marginLeft: 18,
    marginTop: 5,
  },
  text3: {
    color: "grey",
    fontSize: 15,
    marginLeft: 18,
    marginTop: 10,
  },
  progresBar: {
    borderRadius: 4,
    marginLeft: 18,
    marginRight: 18,
    height: 8,
    marginTop: 5,
  },
});

export default mainScreen;
