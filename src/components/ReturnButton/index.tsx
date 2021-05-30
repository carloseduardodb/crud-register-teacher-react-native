import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const ReturnButton = () => {
  const navigation = useNavigation();
  function ReturnPage() {
    navigation.goBack();
  }
  return (
    <TouchableOpacity onPress={ReturnPage}>
      <Icon name="arrow-left" size={30} />
    </TouchableOpacity>
  );
};

export default ReturnButton;
