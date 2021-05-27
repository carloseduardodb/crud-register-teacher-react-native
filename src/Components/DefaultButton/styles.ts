import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

interface ComponentProps extends TouchableOpacityProps {
  title: string;
  color: string;
  icon?: string;
}

export const TouchableButton = styled.TouchableOpacity<any | ComponentProps>`
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #30a6ff;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 3;
  flex-direction: row;
  align-items: center;
  max-width: 150px;
  text-align: center;
`;

export const ContentIcon = styled.View`
  padding-right: 10px;
`;

export const TitleButton = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;
