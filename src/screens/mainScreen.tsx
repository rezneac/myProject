import Checkbox from "expo-checkbox";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const mainScreen = () => {
  const [array, setArray] = useState([
    { name: "Test", checked: true },
    { name: "Test2", checked: true },
    { name: "React", checked: true },
    { name: "Native", checked: true },
    { name: "Hello", checked: true },
    { name: "Cool", checked: true },
    { name: "tech", checked: true },
  ]);

  const newState = (index:number) => {
    const newArrayState = [...array];
    //changes from true to false checked property
    newArrayState[index].checked = !newArrayState[index].checked;
    setArray(newArrayState);
}

  return (
    <View>
      <View>
        <FlatList
          data={array}
          horizontal={false}
          renderItem={({ item, index }) => (
            <View style={{ justifyContent: "center" }}>
              <Text>{item.name}</Text>
              <Checkbox
                value={item.checked}
                onValueChange={() => newState(index)}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default mainScreen;
