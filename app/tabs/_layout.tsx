import { FontAwesome } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'


//tabBarShowLabel : false es para quitar el texto de las tabs, solo mostrar iconos
const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'indigo' ,
      //headerShown: false,
    }}>
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="heartbeat" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout