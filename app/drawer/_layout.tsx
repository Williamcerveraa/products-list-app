import CustomDrawer from '@/components/shared/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { View } from 'react-native';

const DrawerLayout = () => {
  return (
    <View>
       <Drawer
       drawerContent={CustomDrawer}
       screenOptions={{
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        drawerActiveTintColor : 'indigo',
       }}
        >
        <Drawer.Screen
          name="user/index"
          options={{
            drawerLabel: 'User',
            title: 'Usuario',
             drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
          }}
        />
        <Drawer.Screen
          name="schedule/index"
          options={{
            drawerLabel: 'Schedule',
            title: 'Horario',
            drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
          }}
        />
      </Drawer>
    </View>
  )
}

export default DrawerLayout