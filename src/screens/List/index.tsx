import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity, FlatList, ListRenderItemInfo} from 'react-native';

import { ICrypto } from '../../interfaces/ICrypto';
import coinGecko from '../../services/clients/coinGecko';

import ListItem from './ListItem'

import { Container } from './styles'

const List = props => {
  const [coins, setCoins] = useState<ICrypto[]>([] as ICrypto[]);
  const {navigation} = props;

  useEffect(() => {
    const getCoins = async () => {
      const response = await coinGecko.get('coins/markets?vs_currency=usd&per_page=5');
      setCoins(response.data);
      console.log(response.data, 'response!!');
    }

    getCoins();
  }, []);

  const handlePress = () => {
    navigation.navigate('Detail', {item: 'doge'});
  };

  return (
    <Container>
      <Text>List</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text>Go to Detail</Text>
        
      </TouchableOpacity>


      <FlatList 
        style={{ marginTop: 30 }}
        data={coins}
        keyExtractor={(coin) => String(coin.id)}
        renderItem={(coin: ListRenderItemInfo<ICrypto>) => <ListItem coin={coin.item}/>}
      />
    </Container>
  );
};

export default List;
