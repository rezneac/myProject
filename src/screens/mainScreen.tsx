import React, { useState, useCallback } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import CheckboxComponent from "../components/CheckboxComponent";

const INITIAL_STATE = [
  { name: "Test", checked: true },
  { name: "Test2", checked: true },
  { name: "React", checked: true },
  { name: "Native", checked: true },
  { name: "Hello", checked: true },
  { name: "Cool", checked: true },
  { name: "tech", checked: true },
];

const mainScreen = () => {
  const [array, setArray] = useState(INITIAL_STATE);

  const newState = useCallback(
    (index: number) => {
      const newArrayState = [...array];
      //changes from true to false checked property
      newArrayState[index].checked = !newArrayState[index].checked;
      setArray(newArrayState);
    },
    [array]
  );

  return (
    <View>
      <View>
        <FlatList
          data={array}
          horizontal={false}
          renderItem={({ item, index }) => (
            <View style={styles.flatListView}>
              <Text>{item.name}</Text>
              <CheckboxComponent
                index={index}
                checkedVal={item.checked}
                newState={newState}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatListView: { justifyContent: "center" },
});

export default mainScreen;
