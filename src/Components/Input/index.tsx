import React from "react";
import { TextInputProps, View } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Container, Input as Ipt, ContentIcon } from "./styles";

interface Props extends TextInputProps {
  icon?: string | any;
}

const Input: React.FC<Props> = ({ icon = "alert-circle", ...rest }) => {
  return (
    <Container>
      <ContentIcon>
        <Icon size={30} color="#30a6ff" name={icon} />
      </ContentIcon>

      <Ipt {...rest}></Ipt>
    </Container>
  );
};

export default Input;
