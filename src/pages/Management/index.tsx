import React, { useCallback, useRef } from "react";
import { Container, ContentAll, Title } from "./styles";
import ReturnButton from "../../components/ReturnButton";
import ListingTeacher from "../../components/ListingTeacher";
import Input from "../../components/Input";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/mobile";
import contextSearch from "../../contexts/SearchingContext";

const Management = () => {
  const formRef = useRef<FormHandles>(null);

  const search = useCallback(async (data: string, { reset }) => {}, []);

  return (
    <Container>
      <ReturnButton />
      <ContentAll>
        <Title>Escolha um registro</Title>
        <Form ref={formRef} onSubmit={search}>
          <Input
            name="search"
            icon="search"
            onChange={() => {
              formRef.current?.submitForm();
            }}
            placeholder="Pesquisar"
          />
        </Form>
        <ListingTeacher />
      </ContentAll>
    </Container>
  );
};

export default Management;
