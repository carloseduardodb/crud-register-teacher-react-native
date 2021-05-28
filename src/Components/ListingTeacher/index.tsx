import React, { useEffect, useState } from "react";
import { View, FlatList, ToastAndroid } from "react-native";
import { List, TitleList, EmailList, ContentEmailList } from "./styled";
import { Feather as Icon } from "@expo/vector-icons";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/core";

interface Props {
  id: number;
  name: string;
  surname: string;
  email: string;
  created_at: string;
  updated_at: string;
}

const ListingTeacher = () => {
  const [teachers, setTeachers] = useState<Props[]>();

  const navigator = useNavigation();

  useEffect(() => {
    api
      .get("/teacher")
      .then((data) => {
        setTeachers(data.data);
      })
      .catch(() => {
        ToastAndroid.show(
          "Erro ao exibir os professores! \n Contate o suporte!",
          5
        );
        navigator.goBack();
      });
  }, []);

  const renderItem = ({ item }: { item: Props }) => (
    <List
      onPress={() => {
        navigator.navigate("Editing", item);
      }}
    >
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
        style={{ height: "80%" }}
        showsVerticalScrollIndicator={false}
        data={teachers}
        renderItem={renderItem}
        keyExtractor={(item) => item.created_at}
      />
    </View>
  );
};

export default ListingTeacher;
