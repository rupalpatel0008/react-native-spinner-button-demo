import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from './styles/AppStyles';
import SpinnerButton from './components/SpinnerButton';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultLoading: false,
      barLoading: false,
      dotLoading: false,
      materialLoading: false,
      pacmanLoading: false,
      pulseLoading: false,
      skypeLoading: false,
      uiAcivityLoading: false,
      waveLoading: false,
    };
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <SpinnerButton
            buttonStyle={styles.buttonStyle}
            isLoading={this.state.defaultLoading}
            onPress={() => {
              this.setState({ defaultLoading: true });
              setTimeout(() => {
                this.setState({ defaultLoading: false });
              }, 3000);
            }}
            count={10}
          >
            <Text style={styles.buttonText}>Default Or Ball SpinnerButton</Text>
          </SpinnerButton>
          <SpinnerButton
            buttonStyle={styles.buttonStyle}
            isLoading={this.state.barLoading}
            spinnerAnimationType='BarIndicator'
            onPress={() => {
              this.setState({ barLoading: true });
              setTimeout(() => {
                this.setState({ barLoading: false });
              }, 3000);
            }}
            animationType={'flipInY'}
          >
            <Text style={styles.buttonText}>Bar SpinnerButton</Text>
          </SpinnerButton>
          <SpinnerButton
            buttonStyle={styles.buttonStyle}
            isLoading={this.state.dotLoading}
            count={10}
            size={10}
            spinnerAnimationType='DotIndicator'
            onPress={() => {
              this.setState({ dotLoading: true });
              setTimeout(() => {
                this.setState({ dotLoading: false });
              }, 3000);
            }}
            animationType={'flipInX'}
          >
            <Text style={styles.buttonText}>Dot SpinnerButton</Text>
          </SpinnerButton>
          <SpinnerButton
            buttonStyle={styles.buttonStyle}
            isLoading={this.state.materialLoading}
            spinnerAnimationType='MaterialIndicator'
            onPress={() => {
              this.setState({ materialLoading: true });
              setTimeout(() => {
                this.setState({ materialLoading: false });
              }, 3000);
            }}
          >
            <Text style={styles.buttonText}>Material SpinnerButton</Text>
          </SpinnerButton>
          <SpinnerButton
            buttonStyle={styles.buttonStyle}
            isLoading={this.state.pacmanLoading}
            spinnerAnimationType='PacmanIndicator'
            onPress={() => {
              this.setState({ pacmanLoading: true });
              setTimeout(() => {
                this.setState({ pacmanLoading: false });
              }, 3000);
            }}
          >
            <Text style={styles.buttonText}>Pacman SpinnerButton</Text>
          </SpinnerButton>
          <SpinnerButton
            buttonStyle={styles.buttonStyle}
            isLoading={this.state.pulseLoading}
            spinnerAnimationType='PulseIndicator'
            onPress={() => {
              this.setState({ pulseLoading: true });
              setTimeout(() => {
                this.setState({ pulseLoading: false });
              }, 3000);
            }}
          >
            <Text style={styles.buttonText}>Pulse SpinnerButton</Text>
          </SpinnerButton>
          <SpinnerButton
            buttonStyle={styles.buttonStyle}
            isLoading={this.state.skypeLoading}
            spinnerAnimationType='SkypeIndicator'
            onPress={() => {
              this.setState({ skypeLoading: true });
              setTimeout(() => {
                this.setState({ skypeLoading: false });
              }, 3000);
            }}
          >
            <Text style={styles.buttonText}>Skype SpinnerButton</Text>
          </SpinnerButton>
          <SpinnerButton
            buttonStyle={styles.buttonStyle}
            isLoading={this.state.uiAcivityLoading}
            spinnerAnimationType='UIActivityIndicator'
            onPress={() => {
              this.setState({ uiAcivityLoading: true });
              setTimeout(() => {
                this.setState({ uiAcivityLoading: false });
              }, 3000);
            }}
          >
            <Text style={styles.buttonText}>UIActivity SpinnerButton</Text>
          </SpinnerButton>
          <SpinnerButton
            buttonStyle={styles.buttonStyle}
            isLoading={this.state.waveLoading}
            spinnerAnimationType='WaveIndicator'
            onPress={() => {
              this.setState({ waveLoading: true });
              setTimeout(() => {
                this.setState({ waveLoading: false });
              }, 3000);
            }}
          >
            <Text style={styles.buttonText}>Wave SpinnerButton</Text>
          </SpinnerButton>
        </View>
      </ScrollView>
    );
  }
}
