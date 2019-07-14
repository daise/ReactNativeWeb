// App.js - React Native

import React, { Component, Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import Button from "./components/Button";

class App extends Component {
  render() {
    return  <Fragment>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        
        <Header headerText="Home"/>
        <NewsList />
        <Button>Load News</Button>
      </ScrollView>
    </SafeAreaView>
  </Fragment>;
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'lightblue',
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
