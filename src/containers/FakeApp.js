import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import PropTypes from 'prop-types';

import App from '../components/App';

class FakeAppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      isLoaded: false
    }
  }

  componentWillMount() {
    this.setState({
      isLoaded: false
    })
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({
          isLoaded: true
        })
      },
      3000
    )
  }

  render() {
    const {
      isLoaded
    } = this.state

    return (
      <App
        isLoaded={isLoaded}
      />
    )
  }
}


export default FakeAppContainer 