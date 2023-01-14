import Checkbox from "expo-checkbox";
import React, { useState, useCallback } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

type iProps = {
  index: number;
  array: object;
  item: any;
  newState: any;
};

const CheckboxComponent = (props: iProps) => {
  return (
    <Checkbox
      value={props.item.checked}
      onValueChange={() => props.newState(props.index)}
    />
  );
};

const styles = StyleSheet.create({});

export default CheckboxComponent;
