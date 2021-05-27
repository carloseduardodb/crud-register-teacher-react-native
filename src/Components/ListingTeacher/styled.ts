import styled from "styled-components/native";

export const List = styled.TouchableOpacity`
  border: 2px solid #fafafa;
  background-color: #4f9ffb;
  padding: 10px 15px;
  margin-vertical: 3px;
  border-radius: 5px;
`;

export const TitleList = styled.Text`
  color: #fff;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const EmailList = styled.Text`
  font-size: 10px;
  color: #fff;
  margin-horizontal: 5px;
`;

export const ContentEmailList = styled.View`
  flex-direction: row;
  align-items: center;
`;
