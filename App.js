import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Restaurant from './src/screens/Restaurant';
import Orders from './src/screens/Orders';
import Profile from './src/screens/Profile';

const RestaurantStack = createNativeStackNavigator();
const OrderStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function RestaurantStackScreen() {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        name="Restaurants Page"
        component={Restaurant}
        options={{headerShown: false}}
      />
    </RestaurantStack.Navigator>
  );
}

function OrderStackScreen() {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen
        name="Orders Page"
        component={Orders}
        options={{headerShown: false}}
      />
    </OrderStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile Page"
        component={Profile}
        options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Restaurants"
          component={RestaurantStackScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Your Orders"
          component={OrderStackScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
