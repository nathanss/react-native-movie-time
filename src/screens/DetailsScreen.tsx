import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../../App";

type ThisScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home_to_Details"
>;

type ThisRouteProp = RouteProp<RootStackParamList, "Home_to_Details">;

type Props = {
  navigation: ThisScreenNavigationProp;
  route: ThisRouteProp;
};

const DetailsScreen = ({ navigation, route }: Props) => {
  return (
    <View style={styles.mainView}>
      <Text>Details Screen</Text>
      <Text>{route.params?.screenNumber}</Text>
      <Button
        title="Go to Image"
        onPress={() => {
          navigation.navigate("BigImageView");
        }}
      />
      <Button
        title="More Details"
        onPress={() => {
          navigation.push("Details_to_Details", {
            screenNumber: route.params!.screenNumber + 1,
          });
        }}
      />
      <Button
        title="Go back Home"
        onPress={() => {
          navigation.popToTop();
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

export default DetailsScreen;
