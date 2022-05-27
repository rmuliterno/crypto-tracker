import React from 'react';
import {Image} from 'react-native';
import FastImage from 'react-native-fast-image'

import { ICrypto } from '../../../interfaces/ICrypto';

import { Container, RightItems, LeftItems, Main, Name, Price, Circulation, Variation } from './styles'

interface ListItemProp {
  coin: ICrypto;
}

const ListItem = ({ coin }: ListItemProp) => {
  const renderVariation = (variation: number) => {
    if (variation > 0) {
      return <Variation style={{color: '#72a098'}}>
        {`+${variation.toFixed(2)}%`}
      </Variation>
    }
    return (
      <Variation style={{color: '#a2678c'}}>
        {`${variation.toFixed(2)}%`}
      </Variation>
    )
  }

  return (
    <Container>
      <LeftItems>
      <Image
          style={{width: 50, height: 50, resizeMode: 'stretch', margin: 5}}
          source={{uri: coin.image}}
      />
        <Main>
          <Name>{coin.name}</Name>
          <Circulation>{coin.circulating_supply}</Circulation>
        </Main>

      </LeftItems>

      <RightItems>
        <Price>{`$ ${coin.current_price.toFixed(2)}`}</Price>
        {renderVariation(coin.price_change_percentage_24h)}
      </RightItems>

    </Container>
  );
};

export default ListItem;
