import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Button,
} from "react-native";

const mainScreen = () => {
  const [progress, setProgress] = useState(30);
  const [animatedProgress, setAnimatedProgress] = useState(
    new Animated.Value(progress)
  );

  const risingProgress = () => {
    let payload = 10;
    let newProgress = progress + payload;

    if (progress + payload <= 100) {
      setProgress(progress + payload);

      Animated.timing(animatedProgress, {
        toValue: newProgress,
        duration: 700,
        useNativeDriver: false,
      }).start();
      setProgress(progress + payload);
    } else {
      setProgress(100);

      Animated.timing(animatedProgress, {
        toValue: 100,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <>
      <Button title="Test" onPress={risingProgress} />
      <View style={styles.mainView}>
        <View style={styles.topView}>
          <Image source={require("../../assets/imageIcon.png")} />
          <Text style={styles.text1}>
            I'm doing 100 Miles to support cardiac care
          </Text>
        </View>

        <View>
          <Text style={styles.text2}>$86 left to reach $107</Text>

          <View style={styles.progressBar}>
            <Animated.View
              style={
                (StyleSheet.absoluteFill,
                {
                  backgroundColor: "#1975f2",
                  width: animatedProgress.interpolate({
                    inputRange: [0, 100],
                    outputRange: ["0%", "100%"],
                  }),
                  borderRadius: 4,
                  borderBottomLeftRadius: 4,
                })
              }
            />
          </View>
          <Text style={styles.text3}>1 person donated</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Donate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    borderRadius: 4,
    flexDirection: "row",
    backgroundColor: "#d8d9de",
    height: 8,
    marginLeft: 18,
    marginRight: 18,
    marginTop: 5,
  },
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
});

export default mainScreen;
