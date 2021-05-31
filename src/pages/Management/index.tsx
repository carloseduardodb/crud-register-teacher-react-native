import React, { useState } from "react";
import { Container, ContentAll, Title } from "./styles";
import ReturnButton from "../../components/ReturnButton";
import ListingTeacher from "../../components/ListingTeacher";
import SearchingContext from "../../contexts/SearchingContext";
import DefaultInput from "../../components/DefaultInput";

const Management = () => {
  const [search, setSearch] = useState("");
  return (
    <Container>
      <ReturnButton />
      <ContentAll>
        <SearchingContext.Provider value={{ search }}>
          <Title>Escolha um registro</Title>
          <DefaultInput
            name="search"
            icon="search"
            onChangeText={setSearch}
            placeholder="Pesquisar"
          />
          <ListingTeacher />
        </SearchingContext.Provider>
      </ContentAll>
    </Container>
  );
};

export default Management;
