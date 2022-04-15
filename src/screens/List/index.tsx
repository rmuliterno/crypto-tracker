import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const List = props => {
  const {navigation} = props;

  const handlePress = () => {
    navigation.navigate('Detail', {item: 'doge'});
  };

  return (
    <View>
      <Text>List</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default List;
