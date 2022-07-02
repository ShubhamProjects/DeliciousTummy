import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Restaurant from './src/screens/Restaurant';
import Orders from './src/screens/Orders';
import Profile from './src/screens/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StatusBar} from 'react-native';
import {styles} from './src/styles';

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
    <>
      <StatusBar
        animated={true}
        backgroundColor={styles.white}
        barStyle="dark-content"
      />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={RestaurantStackScreen}
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            tabBarInactiveTintColor: 'black',
            tabBarStyle: {
              height: 60,
            },
          }}>
          <Tab.Screen
            name="Restaurants"
            component={RestaurantStackScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => (
                <MaterialIcons
                  name="local-restaurant"
                  color={color}
                  size={focused ? 42 : 30}
                />
              ),
              tabBarLabelStyle: {paddingBottom: 6},
            }}
          />
          <Tab.Screen
            name="Your Orders"
            component={OrderStackScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => (
                <MaterialCommunityIcons
                  name="cart"
                  color={color}
                  size={focused ? 40 : 30}
                />
              ),
              tabBarLabelStyle: {paddingBottom: 6},
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={focused ? 42 : 30}
                />
              ),
              tabBarLabelStyle: {paddingBottom: 6},
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
