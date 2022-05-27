import React, {useContext} from 'react';
import { Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import StateContext from '../../contexts/state';
import {
  Container, 
  TopContainer,
  RightItems,
  NotificationContainer
} from './styles';

const styles = StyleSheet.create({
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 33
  },
});


const Home = props => {
  const {navigation} = props;
  const {getList, cryptoList} = useContext(StateContext);

  var avatar = require ('../../../assets/avatar.jpeg');

  return (
    <Container>
      <TopContainer>
      <Image
        style={styles.avatar}
        source={avatar}
      />
        <RightItems>
          <Icon name='search' size={30} color='#7e8bae' />
          <NotificationContainer>
            <Icon name='notifications' size={30} color='#7e8bae' />
          </NotificationContainer>
        </RightItems>
      </TopContainer>
    </Container>
  );
};

export default Home;
