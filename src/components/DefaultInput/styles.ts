import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  border: 1px solid #a1a1a1;
  border-radius: 5px;
  margin-vertical: 5px;
`;

export const ContentIcon = styled.View`
  background-color: #e5ecf9;
  padding: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const Input = styled.TextInput<any>`
  width: 100%;
  padding: 0 10px;
`;
