import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import DrawerNavigator from './Drawer'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'
import { authenticate } from 'slices/app.slice'

const Navigator = () => {
  const { checked, loggedIn } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authenticate({ loggedIn: true, checked: true }))
  }, [])

  // TODO: switch router by loggedIn state
  console.log('[##] loggedIn', loggedIn)

  return checked ? (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  ) : (
    <Text>Loading...</Text>
  )
}

export default Navigator
