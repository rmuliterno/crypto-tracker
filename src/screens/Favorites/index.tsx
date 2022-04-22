import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Detail = props => {
  const {navigation, route} = props;

  return (
    <View>
      <Text>Favorites</Text>
      <Text>Lista de favoritos!</Text>
    </View>
  );
};

export default Detail;
