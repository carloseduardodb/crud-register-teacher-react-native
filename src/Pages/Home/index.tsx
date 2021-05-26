import React from "react";
import CustomButton from "../../Components/CustomButton";
import {
  Container,
  DrawTeacher,
  WelcomeMessage,
  Menu,
  Description,
} from "./styles";

const Home = () => {
  return (
    <Container>
      <DrawTeacher
        resizeMode="contain"
        source={require("../../../assets/initialbg.png")}
      />
      <WelcomeMessage>Escolha uma Ação</WelcomeMessage>
      <Description>Feito por mim e por mim mesmo!</Description>
      <Menu>
        <CustomButton
          title="Adicionar"
          icon="feather"
          routeName="Added"
        ></CustomButton>

        <CustomButton
          title="Gerenciar"
          icon="codesandbox"
          routeName="Management"
        ></CustomButton>
      </Menu>
    </Container>
  );
};

export default Home;
