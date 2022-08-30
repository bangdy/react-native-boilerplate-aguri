import { StatusBar, StyleSheet, Text, View } from 'react-native'

import { Button } from 'native-base'
import PropTypes from 'prop-types'
import React from 'react'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Profile = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Profile</Text>
    <Button
      color="white"
      backgroundColor={colors.lightPurple}
      onPress={() => {
        navigation.navigate('Details', { from: 'Profile' })
      }}
    >
      Go to Details
    </Button>
  </View>
)

Profile.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

Profile.defaultProps = {
  navigation: { navigate: () => null },
}

export default Profile
