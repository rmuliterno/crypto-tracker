import React from 'react';
import {Image} from 'react-native';

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

    if (variation) {
      return (
        <Variation style={{color: '#a2678c'}}>
          {`${variation.toFixed(2)}%`}
        </Variation>
      )
    }
  }

  const renderPrice = (price: number) => {
    if (price) {
      return (
        <Price>
          ${price.toFixed(2)}
        </Price>
      )
    }
  }

  if (coin) {
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
          {renderPrice(coin.current_price)}
          {renderVariation(coin.price_change_percentage_24h)}
        </RightItems>
      </Container>
    )
  }

  return null
};

export default ListItem;
