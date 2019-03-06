import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    const {
      isLoaded,
    } = this.props

    return isLoaded ? (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    ) : (
      <AppLoading />
    )
  }
}

App.defaultProps = {
}

App.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App 