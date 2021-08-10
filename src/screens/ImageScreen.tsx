import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../../App";

type ThisScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "App_to_Home"
>;

type ThisRouteProp = RouteProp<RootStackParamList, "App_to_Home">;

type Props = {
  navigation: ThisScreenNavigationProp;
  route: ThisRouteProp;
};

const ImageScreen = () => {
  return (
    <View style={styles.mainView}>
      <Text>Image Screen</Text>
      <Button
        title="Go Home"
        onPress={() => {
          console.log("Go to Details");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImageScreen;
