import styled from "styled-components/native";

export const Container = styled.View`
  padding-vertical: 10%;
  padding-horizontal: 3%;
  height: 100%;
  background-color: #fff;
  align-items: center;
`;

export const DrawTeacher = styled.ImageBackground`
  width: 90%;
  margin-vertical: 30px;
  height: 50%;
`;

export const WelcomeMessage = styled.Text`
  font-weight: 700;
  font-size: 20px;
  color: #33343a;
`;

export const Menu = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-vertical: 30px;
`;

export const Description = styled.Text`
  font-weight: 200;
  font-size: 15px;
  margin-vertical: 10px;
  color: #a9afb8;
`;
