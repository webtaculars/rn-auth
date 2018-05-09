import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";
import { CardSection, Header, Button, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

export default class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCKN75Ou-WhL3NWfxGkRUFS8RTsc2m4DIg",
      authDomain: "auth-7fe9d.firebaseapp.com",
      databaseURL: "https://auth-7fe9d.firebaseio.com",
      projectId: "auth-7fe9d",
      storageBucket: "auth-7fe9d.appspot.com",
      messagingSenderId: "966612370016"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}> Log Out </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;

      default:
        <CardSection>
          <Spinner size="large" />
        </CardSection>;
    }
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
