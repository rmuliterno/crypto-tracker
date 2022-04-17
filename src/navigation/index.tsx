import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Detail from '../screens/Detail';
import Home from '../screens/Home';
import List from '../screens/List';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = focused? 'ios-home-sharp': 'ios-home-outline';
            } else if (route.name === 'Favourites') {
                iconName = focused ? 'ios-heart-sharp' : 'ios-heart-outline';
            }

            console.log(iconName)
           
            // You can return any component that you like here!
            return <Icon name='users' size={60} color='#900' />
        },
          tabBarActiveTintColor: '#58ceb2',
          tabBarInactiveTintColor: 'gray',
          //Tab bar styles can be added here
          tabBarStyle:{paddingVertical: 5,borderTopLeftRadius:15,borderTopRightRadius:15,backgroundColor:'white',position:'absolute',height:200},
          tabBarLabelStyle:{paddingBottom:3},
      })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="List" component={List} />
        <Tab.Screen name="Detail" component={Detail} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
