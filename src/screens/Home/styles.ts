import styled from 'styled-components/native';

export const Container = styled.View`
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};
  height: 100%;
`;

export const Text = styled.Text`
  color: ${props => props.theme.colors.text};
`;
