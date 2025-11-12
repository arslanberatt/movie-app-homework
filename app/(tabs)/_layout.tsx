import React from 'react';
import { Tabs } from 'expo-router';
import { Home, Heart, Add } from 'iconsax-react-nativejs';

const Layout = () => {
  return (
    <Tabs screenOptions={{ tabBarStyle: { backgroundColor: '#ffffff' } }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarInactiveTintColor: '#acaaca',
          tabBarActiveTintColor: '#fb6364',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Home color={'#fb6364'} size={22} variant="Bold" />
            ) : (
              <Home color={'#acacac'} size={22} variant="Outline" />
            ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          title: 'Favourite',
          tabBarInactiveTintColor: '#acaaca',
          tabBarActiveTintColor: '#fb6364',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Heart color={'#fb6364'} size={22} variant="Bold" />
            ) : (
              <Heart color={'#acaaca'} size={22} variant="Outline" />
            ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: 'Add',
          tabBarInactiveTintColor: '#acaaca',
          tabBarActiveTintColor: '#fb6364',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Add color={'#fb6364'} size={22} variant="Bold" />
            ) : (
              <Add color={'#acaaca'} size={22} variant="Outline" />
            ),
        }}
      />
    </Tabs>
  );
};
export default Layout;
