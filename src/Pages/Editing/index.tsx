import { useNavigation, useRoute } from "@react-navigation/core";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/mobile";
import React, { useCallback, useRef } from "react";
import { ToastAndroid, View } from "react-native";
import DefaultButton from "../../Components/DefaultButton";
import Input from "../../Components/Input";
import ReturnButton from "../../Components/ReturnButton";
import api from "../../services/api";
import { Container, ContentAll, Title, ContentButton } from "./styles";
import getValidationsErrors from "../../utils/getValidationsErrors";
import * as Yup from "yup";

interface Teacher {
  id: number;
  name: string;
  surname: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const Editing = () => {
  const formRef = useRef<FormHandles>(null);
  const navigator = useNavigation();
  const route = useRoute();
  route.params == null && navigator.goBack();
  const { id, name, surname, email } = route.params as Teacher;

  async function handleDeleteTeacher(id: number) {
    await api
      .delete(`/teacher/delete/${id}`)
      .then((data) => {
        ToastAndroid.show("Registro apagado com successo!", 5);
        navigator.navigate("Home");
      })
      .catch((err: Error) => {
        ToastAndroid.show("Erro ao apagar registro!\n Contate o suporte!", 5);
      });
  }

  async function updateData(data: Teacher) {
    console.log(data);
    await api
      .put(`teacher/update/${id}`, data)
      .then((data) => {
        ToastAndroid.show("Atualizado com successo!", 5);
      })
      .catch((err: Error) => {
        ToastAndroid.show(
          "Erro ao atualizar os dados!\n Contate o suporte!",
          5
        );
      });
  }

  const handleSubmit = useCallback(async (data: Teacher, { reset }) => {
    try {
      data.name == "" && (data.name = name);
      data.surname == "" && (data.surname = surname);
      data.email == "" && (data.email = email);
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string()
          .min(3, "Nome pequeno demais")
          .max(150, "Máximo de 150 caracteres!")
          .notRequired(),
        surname: Yup.string()
          .min(3, "Sobrenome pequeno demais")
          .max(150, "Máximo de 150 caracteres!")
          .notRequired(),
        email: Yup.string()
          .email("Digite um e-mail válido!")
          .nullable()
          .notRequired(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      await updateData(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log(err.errors);
        const errors = getValidationsErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <ReturnButton />
      <ContentAll>
        <Title>Edite ou apague os dados:</Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            defaultValue={name}
            name="name"
            iconColor="#554D71"
            icon="bookmark"
            placeholder="Nome"
          />
          <Input
            defaultValue={surname}
            name="surname"
            iconColor="#554D71"
            icon="book-open"
            placeholder="Sobrenome"
          />
          <Input
            defaultValue={email}
            name="email"
            iconColor="#554D71"
            icon="at-sign"
            placeholder="Email"
          />
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
              onPress={() => {
                handleDeleteTeacher(id);
              }}
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
