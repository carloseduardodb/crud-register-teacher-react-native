import React from "react";
import { TouchableOpacityProps } from "react-native";
import { CustomBtn, Title } from "./styles";
import { Feather as Icon } from "@expo/vector-icons";

interface PropsTouchBtn extends TouchableOpacityProps {
  title: string;
  icon: "user-plus" | "clipboard" | "codesandbox" | "feather";
  routeName: string;
}

const CustomButton: React.FC<PropsTouchBtn> = ({
  title,
  icon,
  routeName,
  children,
  ...rest
}) => {
  return (
    <CustomBtn
      onPress={() => {
        `${routeName}`;
      }}
    >
      {children}
      <Icon name={icon} size={50} color="#FFF" />
      <Title>{title}</Title>
    </CustomBtn>
  );
};

export default CustomButton;
