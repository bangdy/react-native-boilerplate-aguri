import FontIcon from 'react-native-vector-icons/FontAwesome5'
import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    paddingLeft: 15,
  },
})

const HeaderLeft = ({ navigation }) => (
  <FontIcon.Button
    name="bars"
    color="white"
    backgroundColor="transparent"
    onPress={() => {
      navigation.openDrawer()
    }}
    style={styles.button}
  />
)

HeaderLeft.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func,
  }),
}

HeaderLeft.defaultProps = {
  navigation: { openDrawer: () => null },
}

export default HeaderLeft
