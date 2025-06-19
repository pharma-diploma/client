import { useAuth } from '@/context/AuthContext';
import { router, Tabs } from 'expo-router';
import React, { useEffect } from 'react';

import BasketIcon from '@/assets/svg/nav/BasketIcon';
import BasketIconActive from '@/assets/svg/nav/BasketIconActive';
import HomeIcon from '@/assets/svg/nav/HomeIcon';
import HomeIconActive from '@/assets/svg/nav/HomeIconActive';
import ProfileIcon from '@/assets/svg/nav/ProfileIcon';
import ProfileIconActive from '@/assets/svg/nav/ProfileIconActive';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { user, isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/(auth)/login');
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) return null;

  if (user && !user.name) {
    return router.replace('/setupName');
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarButton: HapticTab,
        tabBarActiveTintColor: "#FF4747",
        // tabBarBackground: TabBarBackground,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          paddingTop: 20,
          height: 100,
          backgroundColor: "white",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          borderTopWidth: 0,
          zIndex: 1000,
          elevation: 10,
          shadowColor: '#000', // iOS
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.12,
          shadowRadius: 12,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Головна',
          tabBarIcon: ({ color, focused }) =>  focused ? 
              <HomeIconActive /> : 
            <HomeIcon />
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Кошик',
          tabBarIcon: ({ color, focused }) => focused ?
              <BasketIconActive /> :
            <BasketIcon />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Профіль',
          tabBarIcon: ({ color, focused }) => focused ?
              <ProfileIconActive /> :
            <ProfileIcon />,
        }}
      />
    </Tabs>
  );
}
