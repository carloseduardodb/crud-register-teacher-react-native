import React from "react";
import { View, FlatList } from "react-native";
import { List, TitleList, EmailList, ContentEmailList } from "./styled";
import { Feather as Icon } from "@expo/vector-icons";

interface Props {
  id: string;
  name: string;
  surname: string;
  email: string;
}

const DATA: Props[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Carlos",
    surname: "Dias Batista",
    email: "carlos@carlos.com",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Felipe",
    surname: "Branas",
    email: "carlos@carlos.com",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "Diego",
    surname: "Rodrigues",
    email: "carlos@carlos.com",
  },
  {
    id: "58694a0f-3da1-471f-bsdsadadd96-asaa",
    name: "Diego",
    surname: "Rodrigues",
    email: "carlos@carlos.com",
  },
  {
    id: "58694a0f-3da1-471fsff-bd96-145571sdsdse29d72",
    name: "Diego",
    surname: "Rodrigues",
    email: "carlos@carlos.com",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145sdsfsfs571e29d72",
    name: "Diego",
    surname: "Rodrigues",
    email: "carlos@carlos.com",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145fsfsfsf571e29d72",
    name: "Diego",
    surname: "Rodrigues",
    email: "carlos@carlos.com",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145sadsfdsffsfsfsf571e29d72",
    name: "Diego",
    surname: "Rodrigues",
    email: "carlos@carlos.com",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145fsfsfsfgdfgdf571e29d72",
    name: "Diego",
    surname: "Rodrigues",
    email: "carlos@carlos.com",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145fsffdfdsfssfsf571e29d72",
    name: "Diego",
    surname: "Rodrigues",
    email: "carlos@carlos.com",
  },
];

const ListingTeacher = () => {
  const renderItem = ({ item }: { item: Props }) => (
    <List onPress={() => {}}>
      <TitleList>
        {item.name}
        {` `}
        {item.surname}
      </TitleList>
      <ContentEmailList>
        <Icon name="mail" color="#fff" />
        <EmailList>{item.email}</EmailList>
      </ContentEmailList>
    </List>
  );

  return (
    <View>
      <FlatList
        style={{ margin: 5, height: "100%" }}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ListingTeacher;
