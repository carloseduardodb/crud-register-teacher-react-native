import { FormHandles } from "@unform/core";
import { Form } from "@unform/mobile";
import React, { useRef } from "react";
import { View } from "react-native";
import DefaultButton from "../../Components/DefaultButton";
import Input from "../../Components/Input";
import ReturnButton from "../../Components/ReturnButton";
import { Container, ContentAll, Title, ContentButton } from "./styles";

const Editing = () => {
  const formRef = useRef<FormHandles>(null);
  return (
    <Container>
      <ReturnButton />
      <ContentAll>
        <Title>Edite ou apague os dados:</Title>
        <Form ref={formRef} onSubmit={() => {}}>
          <Input name="name" icon="bookmark" placeholder="Nome" />
          <Input name="surname" icon="book-open" placeholder="Sobrenome" />
          <Input name="email" icon="at-sign" placeholder="Email" />
          <ContentButton>
            <DefaultButton
              icon="chevrons-up"
              style={{ marginTop: 30 }}
              onPress={() => formRef.current?.submitForm()}
              title="Atualizar"
              color="#fff"
            ></DefaultButton>
            <DefaultButton
              icon="trash"
              style={{ marginTop: 30, backgroundColor: "#554D71" }}
              onPress={() => {}}
              title="Apagar"
              color="#fff"
            ></DefaultButton>
          </ContentButton>
        </Form>
      </ContentAll>
    </Container>
  );
};

export default Editing;
