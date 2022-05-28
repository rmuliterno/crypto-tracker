import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import theme from '../global/styles/theme';

import Detail from '../screens/Detail';
import Home from '../screens/Home';
import List from '../screens/List';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator 
        id='teste'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = '';

            if (route.name === 'Home') {
                iconName = focused ? 'wallet': 'wallet-outline';
            } else if (route.name === 'List') {
                iconName = focused ? 'list-circle' : 'list-circle-outline';
            } else if (route.name === 'Detail') {
              iconName = focused ? 'aperture' : 'aperture-outline';
          }
           
            // You can return any component that you like here!
            return <Icon name={iconName} size={30} color={theme.colors.text} />
        },
          tabBarActiveTintColor: theme.colors.blue,
          tabBarInactiveTintColor: 'gray',
          //Tab bar styles can be added here
          tabBarStyle:{
            paddingVertical: 2,
            borderTopLeftRadius:15,
            borderTopRightRadius:15,
            elevation: 0,
            position:'absolute',
            bottom: 0,
            backgroundColor: theme.colors.background
          },
          tabBarComponent: (props: any) => (
              <BottomTabBar {...props} />
          ),
          tabBarLabelStyle:{paddingBottom:3},
      })}
      >
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="List" component={List} options={{ headerShown: false }} />
        <Tab.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
