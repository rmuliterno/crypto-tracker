import React, { useEffect, useState, useCallback } from 'react';
import { ActivityIndicator, FlatList, ListRenderItemInfo, View } from 'react-native';

import { ICrypto } from '../../interfaces/ICrypto';
import coinGecko from '../../services/clients/coinGecko';

import ListItem from './ListItem'

import { Container } from './styles'

const List = props => {
  const [coins, setCoins] = useState<ICrypto[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [footerLoading, setFooterLoading] = useState(false);
  const {navigation} = props;

  useEffect(() => {
    const getCoins = async () => {
      setLoading(true);
      const response = await coinGecko.get(`coins/markets?vs_currency=usd&page=${page}&per_page=10`);
      setCoins([...coins, ...response.data]);
      setLoading(false);
    }

    getCoins();
  }, []);

  const loadMore = async () => {
    setFooterLoading(true);
    if (!loading) {
      const response = await coinGecko.get(`coins/markets?vs_currency=usd&page=${page+1}&per_page=15`);
      setCoins([...coins, ...response.data])
    }
    setPage(page+1)
    setFooterLoading(false);
  }

  const handlePress = () => {
    navigation.navigate('Detail', {item: 'doge'});
  };

  const renderFooter = () => {
    if (!footerLoading) return null;
    
    return (
      <ActivityIndicator />
    );
  }

  return (
    <Container>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList 
        style={{ marginBottom: 45 }}
        data={coins}
        keyExtractor={(coin) => String(coin.id)}
        renderItem={(coin: ListRenderItemInfo<ICrypto>) => <ListItem coin={coin.item}/>}
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
        ListFooterComponent={renderFooter}
      />
      )}
    </Container>
  );
};

export default List;
