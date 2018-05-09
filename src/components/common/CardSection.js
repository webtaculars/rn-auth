import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

const CardSection = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = StyleSheet.create({
  containerStyle: {
    borderColor: "#ddd",
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative"
  }
});

export { CardSection };
