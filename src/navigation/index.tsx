import * as React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { BlurView, VibrancyView } from "@react-native-community/blur";


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
            let iconName = '';

            if (route.name === 'Home') {
                iconName = focused? 'wallet': 'wallet-outline';
            } else if (route.name === 'List') {
                iconName = focused ? 'list-circle' : 'list-circle-outline';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'aperture' : 'aperture-outline';
          }

            console.log(iconName)
           
            // You can return any component that you like here!
            return <Icon name={iconName} size={30} color='#900' />
        },
          tabBarActiveTintColor: '#58ceb2',
          tabBarInactiveTintColor: 'gray',
          //Tab bar styles can be added here
          tabBarStyle:{
            paddingVertical: 5,
            borderTopLeftRadius:15,
            borderTopRightRadius:15,
            blurRadius:10,
            position:'absolute',
            
          },
          tabBarComponent: (props: any) => (
            <BlurView
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
              }}
            >
              <BottomTabBar {...props} />
            </BlurView>
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
