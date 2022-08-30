// stack navigators
import { HomeNavigator, ProfileNavigator } from '../Stacks'

import FontIcon from 'react-native-vector-icons/FontAwesome5'
import React from 'react'
import { View } from 'react-native'
import { colors } from 'theme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={
      (({ route }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case 'HomeTab':
              return (
                <FontIcon
                  name="HomeTab"
                  color={focused ? colors.lightPurple : colors.gray}
                  size={20}
                  solid
                />
              )
            case 'ProfileTab':
              return (
                <FontIcon
                  name="ProfileTab"
                  color={focused ? colors.lightPurple : colors.gray}
                  size={20}
                  solid
                />
              )
            default:
              return <View />
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
