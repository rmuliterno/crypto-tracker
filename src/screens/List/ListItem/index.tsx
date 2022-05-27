import React from 'react';
import {Image} from 'react-native';
import FastImage from 'react-native-fast-image'

import { ICrypto } from '../../../interfaces/ICrypto';

import { Container, RightItems, LeftItems, Main, Name, Price, Circulation, Variation } from './styles'

interface ListItemProp {
  coin: ICrypto;
}

const ListItem = ({ coin }: ListItemProp) => {

  const source = 'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'

  return (
    <Container>
      <LeftItems>

      <FastImage
        style={{ width: 50, height: 50 }}
        source={{
            uri: source,
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    />
        
      <Image
          style={{width: 50, height: 50}}
          source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}
      />
        <Main>
          <Name>{coin.name}</Name>
          <Circulation>{coin.circulating_supply}</Circulation>
        </Main>

      </LeftItems>

      <RightItems>
        <Price>{`$ ${coin.current_price}`}</Price>
        <Variation>{`${coin.price_change_percentage_24h}%`}</Variation>

      </RightItems>

    </Container>
  );
};

export default ListItem;
