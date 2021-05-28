import React, { useEffect, useRef } from "react";
import { TextInputProps, View } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Container, Input as Ipt, ContentIcon } from "./styles";
import { useField } from "@unform/core";

interface Props extends TextInputProps {
  icon?: string | any;
  name?: string;
}

interface InputValueReferences {
  value: string;
}

const Input: React.FC<Props> = ({
  name = "",
  icon = "alert-circle",
  ...rest
}) => {
  const inputElementRef = useRef<any>(null);
  const { registerField, defaultValue = "", fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReferences>({ value: defaultValue });
  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: "value",
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = "";
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);
  return (
    <Container>
      <ContentIcon>
        <Icon size={30} color="#30a6ff" name={icon} />
      </ContentIcon>

      <Ipt
        ref={inputElementRef}
        defaultValue={defaultValue}
        onChangeText={(value: any) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      ></Ipt>
    </Container>
  );
};

export default Input;
