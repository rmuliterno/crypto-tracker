import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Detail = props => {
  const {navigation, route} = props;

  return (
    <View>
      <Text>Detail</Text>
      <Text>{route.params.item}</Text>
    </View>
  );
};

export default Detail;
