import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px;
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftItems = styled.View`
  display: flex;
  flex-direction: row;
`

export const RightItems = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`

export const Main = styled.View`
  display: flex;
  justify-content: space-around;
  margin-left: 6px;
`

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`

export const Circulation = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.text_secondary};
`

export const Variation = styled.Text`
  font-size: 16px;
`


