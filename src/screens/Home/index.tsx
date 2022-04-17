import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import StateContext from '../../contexts/state';
import {Container, Text} from './styles';

const Home = props => {
  const {navigation} = props;
  const {getList, cryptoList} = useContext(StateContext);

  const handlePress = () => {
    navigation.navigate('List');
  };

  const handleList = async () => {
    await getList();
    console.log(cryptoList);
  };

  return (
    <Container>
      <Icon name='users' size={60} color='#900' />
      <Text>Home2</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text>Go to List</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleList}>
        <Text>Go to List</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
