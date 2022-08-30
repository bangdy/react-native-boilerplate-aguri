import 'utils/ignore'

import React, { useEffect, useState } from 'react'

import { NativeBaseProvider } from 'native-base'
import Navigator from './navigator'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import { fontAssets } from 'theme/fonts'
// assets
import { imageAssets } from 'theme/images'
import store from 'utils/store'

const App = () => {
  const [didLoad, setDidLoad] = useState(false)

  // assets preloading
  const handleLoadAssets = async () => {
    await Promise.all([...imageAssets, ...fontAssets])
    setDidLoad(true)
  }

  useEffect(() => {
    handleLoadAssets()
  }, [])

  return didLoad ? (
    <NativeBaseProvider>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </NativeBaseProvider>
  ) : (
    <View />
  )
}

export default App
