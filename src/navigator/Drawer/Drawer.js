import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer'

import DrawerMenu from './DrawerMenu'
import React from 'react'
import TabNavigator from '../Tabs'

const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  const { routes, ...rest } = props
  const newState = { ...routes }
  // newState.routes = newState.filter((item) => item.name !== 'Home')

  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList {...rest} />
    </DrawerContentScrollView>
  )
}

export default () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={DrawerMenuContainer}
    screenOptions={{
      headerShown: false,
      swipeEnabled: false,
    }}
  >
    <Drawer.Screen name="Home" component={TabNavigator} />
  </Drawer.Navigator>
)
