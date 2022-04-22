import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};
  height: 100%;
  padding: 20px;
`;

export const Text = styled.Text`
  color: ${props => props.theme.colors.text};
`;

export const TopContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
` 

export const Avatar = styled.Image`
  width: 66px,
  height: 58px,
  border-radius: 30px;
`

export const RightItems = styled.View`
  display: flex;
  flex-direction: row;
` 

export const NotificationContainer = styled.View`
  margin-left: 20px;
  color: ${props => props.theme.colors.text};
`
