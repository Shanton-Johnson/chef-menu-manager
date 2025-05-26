import React from 'react';
import { Stack } from 'expo-router';
import { MenuProvider } from '../context/MenuContext';

export default function Layout() {
  return (
    <MenuProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#1f1f1f' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerShown: false
        }}
      />
    </MenuProvider>
  );
}
