import React from "react";
import { Text, View } from "react-native";
import { style } from "./style";
const Header = ({ content }) => (
  <View>
    <View style={style.subHeader} />
    <View>
      <Text>{content}</Text>
    </View>
  </View>
);

export default Header;
