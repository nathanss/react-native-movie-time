import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { RouteProp } from "@react-navigation/native";

type ThisScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "App_to_Home"
>;

type ThisRouteProp = RouteProp<RootStackParamList, "App_to_Home">;

type Props = {
  navigation: ThisScreenNavigationProp;
  route: ThisRouteProp;
};

const HomeScreen = ({ navigation, route }: Props) => {
  console.log(route);
  return (
    <View style={styles.mainView}>
      <Text>Home Screen</Text>
      <Button
        title="Star Wars"
        onPress={() => {
          navigation.navigate("Home_to_Details", {
            title: "Star Wars",
            release: 1977,
            screenNumber: 1,
          });
        }}
      />
      <Button
        title="Black Panther"
        onPress={() => {
          navigation.navigate("Home_to_Details", {
            title: "Black Panther",
            release: 2018,
            screenNumber: 1,
          });
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

export default HomeScreen;
