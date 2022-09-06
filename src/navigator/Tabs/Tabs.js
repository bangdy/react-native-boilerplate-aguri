// stack navigators
import { HomeNavigator, ProfileNavigator } from '../Stacks'

import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { colors } from 'theme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={
      (({ route }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ focused }) => {
          console.log(route.name)
          switch (route.name) {
            case 'HomeTab':
              return <Ionicons name="md-checkmark-circle" size={32} color="green" />
            case 'ProfileTab':
              return <Ionicons name="home" color={focused ? colors.lightPurple : colors.gray} size={20} solid />
            default:
              return <Ionicons name="md-checkmark-circle" size={32} color="green" />
          }
        },
      }),
      {
        activeTintColor: colors.lightPurple,
        inactiveTintColor: colors.gray,
        tabBarStyle: [
          {
            display: 'flex',
          },
        ],
        headerShown: false,
        swipeEnabled: false,
      })
    }
    initialRouteName="HomeTab"
    swipeEnabled={false}
    detachInactiveScreen={false}
  >
    <Tab.Screen name="HomeTab" component={HomeNavigator} />
    <Tab.Screen name="ProfileTab" component={ProfileNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
