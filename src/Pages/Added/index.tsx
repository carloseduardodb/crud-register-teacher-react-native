import { Form } from "@unform/mobile";
import React, { useRef } from "react";
import Input from "../../Components/Input";
import {
  Container,
  Title,
  ContentAll,
  ContentButton,
  DrawTeacher,
  ContentImage,
} from "./styles";
import DefaultButton from "../../Components/DefautButton";
import ReturnButton from "../../Components/ReturnButton";
import { View } from "react-native";

interface propsForm {
  name: string;
  surname: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const Added = () => {
  const formRef = useRef(null);
  function handleSubmit(data: propsForm) {
    console.log(data);
  }
  return (
    <Container>
      <ReturnButton />
      <ContentAll>
        <ContentImage>
          <DrawTeacher
            resizeMode="contain"
            source={require("../../../assets/addedbg.png")}
          />
        </ContentImage>
        <Title>Preencha o formulário abaixo:</Title>
        <Input icon="bookmark" placeholder="Seu nome" />
        <Input icon="book-open" placeholder="Seu sobrenome" />
        <Input icon="at-sign" placeholder="Seu email" />
        <ContentButton>
          <DefaultButton
            style={{ marginTop: 30 }}
            onPress={() => {}}
            title="Enviar"
            color="#fff"
          ></DefaultButton>
        </ContentButton>
      </ContentAll>
    </Container>
  );
};

export default Added;
