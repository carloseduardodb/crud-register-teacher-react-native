import React, { useEffect, useState, useContext } from "react";
import { View, FlatList, ToastAndroid } from "react-native";
import { List, TitleList, EmailList, ContentEmailList } from "./styled";
import { Feather as Icon } from "@expo/vector-icons";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/core";
import SearchingContext from "../../contexts/SearchingContext";

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
  const [defaultTeachers, setDefaultTeachers] = useState<Props[]>();
  const navigator = useNavigation();
  const { search } = useContext(SearchingContext);

  useEffect(() => {
    searchFilterFunction(search);
    if (search === "") {
      setTeachers(defaultTeachers);
    }
  }, [search]);

  useEffect(() => {
    if (teachers?.length === 0) {
      setTeachers(defaultTeachers);
    }
  }, [teachers]);

  const searchFilterFunction = (text: string) => {
    const newData = teachers?.filter((item) => {
      const itemData = `${item.name.toUpperCase()}   
      ${item.name.toUpperCase()} ${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setTeachers(newData);
  };

  useEffect(() => {
    api
      .get("/teacher")
      .then((data) => {
        setTeachers(data.data);
        setDefaultTeachers(data.data);
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
