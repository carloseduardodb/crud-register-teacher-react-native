import React from "react";
import { TouchableOpacityProps } from "react-native";
import { TouchableButton, TitleButton, ContentIcon } from "./styles";
import { Feather as Icon } from "@expo/vector-icons";

interface ComponentProps extends TouchableOpacityProps {
  title: string;
  color: string;
  icon?: "trash" | "send" | "chevrons-up";
}

const DefaultButton: React.FC<ComponentProps> = ({
  title,
  icon = "send",
  ...rest
}) => {
  return (
    <TouchableButton {...rest}>
      <ContentIcon>
        <Icon name={icon} color="#fff" size={25} />
      </ContentIcon>
      <TitleButton>{title}</TitleButton>
    </TouchableButton>
  );
};

export default DefaultButton;
