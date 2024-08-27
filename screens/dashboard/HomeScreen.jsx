import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation, setIsAuthenticated }) => {
  return (
    <View>
      <Text>Welcome to HomeScreen</Text>
      <Button
        title="Log out"
        onPress={() => {
          setIsAuthenticated(false);
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

export default HomeScreen;