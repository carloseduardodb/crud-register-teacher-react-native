import React, { useRef } from "react";
import { Container, ContentAll, Title } from "./styles";
import ReturnButton from "../../Components/ReturnButton";
import ListingTeacher from "../../Components/ListingTeacher";
import Input from "../../Components/Input";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/mobile";

const Management = () => {
  const formRef = useRef<FormHandles>(null);
  return (
    <Container>
      <ReturnButton />
      <ContentAll>
        <Title>Escolha um registro</Title>
        <Form ref={formRef} onSubmit={() => {}}>
          <Input name="search" icon="search" placeholder="Pesquisar" />
        </Form>
        <ListingTeacher />
      </ContentAll>
    </Container>
  );
};

export default Management;
