import React, { useRef, useCallback } from "react";
import Input from "../../components/Input";
import ReturnButton from "../../components/ReturnButton";
import DefaultButton from "../../components/DefaultButton";
import { Form } from "@unform/mobile";
import * as Yup from "yup";
import {
  Container,
  Title,
  ContentAll,
  ContentButton,
  DrawTeacher,
  ContentImage,
} from "./styles";
import { FormHandles } from "@unform/core";
import getValidationsErrors from "../../utils/getValidationsErrors";
import api from "../../services/api";
import { ToastAndroid } from "react-native";

interface propsForm {
  name: string;
  surname: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const Added = () => {
  const formRef = useRef<FormHandles>(null);
  async function sendData(data: propsForm) {
    api
      .post("teacher/create", data)
      .then((data) => {
        ToastAndroid.show("Dados salvos com sucesso!", 5);
      })
      .catch(() => {
        ToastAndroid.show(
          "Erro ao salvar os dados, entre em contato com suporte do sistema",
          5
        );
      });
  }
  const handleSubmit = useCallback(async (data: propsForm, { reset }) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string()
          .min(3, "Nome pequeno demais")
          .max(150, "Máximo de 150 caracteres!"),
        surname: Yup.string()
          .min(3, "Sobrenome pequeno demais")
          .max(150, "Máximo de 150 caracteres!"),
        email: Yup.string().email("Digite um e-mail válido!"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await sendData(data);
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationsErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }, []);
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
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" icon="bookmark" placeholder="Nome" />
          <Input name="surname" icon="book-open" placeholder="Sobrenome" />
          <Input name="email" icon="at-sign" placeholder="Email" />
          <ContentButton>
            <DefaultButton
              style={{ marginTop: 30 }}
              onPress={() => formRef.current?.submitForm()}
              title="Enviar"
              color="#fff"
            ></DefaultButton>
          </ContentButton>
        </Form>
      </ContentAll>
    </Container>
  );
};

export default Added;
