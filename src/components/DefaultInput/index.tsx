import React, { useEffect, useRef } from "react";
import { TextInputProps, View } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Container, Input as Ipt, ContentIcon } from "./styles";

interface Props extends TextInputProps {
  icon?: string | any;
  name?: string;
  iconColor?: string;
}

const DefaultInput: React.FC<Props> = ({
  name = "",
  icon = "alert-circle",
  iconColor = "#30a6ff",
  ...rest
}) => {
  return (
    <Container>
      <ContentIcon>
        <Icon size={30} color={iconColor} name={icon} />
      </ContentIcon>

      <Ipt {...rest}></Ipt>
    </Container>
  );
};

export default DefaultInput;
