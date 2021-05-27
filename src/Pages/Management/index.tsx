import React from "react";
import { Container, ContentAll, Title } from "./styles";
import ReturnButton from "../../Components/ReturnButton";
import { FlatList } from "react-native-gesture-handler";
import ListingTeacher from "../../Components/ListingTeacher";

const Management = () => {
  return (
    <Container>
      <ReturnButton />
      <ContentAll>
        <Title>Escolha um registro</Title>
        <ListingTeacher />
      </ContentAll>
    </Container>
  );
};

export default Management;
