import Checkbox from "expo-checkbox";
import React from "react";
import { StyleSheet } from "react-native";

type iProps = {
  index: number;
  checkedVal: boolean;
  newState: (index: number) => void;
};

const CheckboxComponent = (props: iProps) => {
  return (
    <Checkbox
      value={props.checkedVal}
      onValueChange={() => props.newState(props.index)}
    />
  );
};

const styles = StyleSheet.create({});

export default CheckboxComponent;
