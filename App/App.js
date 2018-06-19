import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from './styles/AppStyles';
import SpinnerButton from 'react-native-spinner-button';
// import SpinnerButton from './components/SpinnerButton';

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
            indicatorCount={10}
          >
            <Text style={styles.buttonText}>Default Or Ball SpinnerButton</Text>
          </SpinnerButton>
          <SpinnerButton
            buttonStyle={styles.buttonStyle}
            isLoading={this.state.barLoading}
            spinnerType='BarIndicator'
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
            indicatorCount={10}
            size={10}
            spinnerType='DotIndicator'
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
            spinnerType='MaterialIndicator'
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
            spinnerType='PacmanIndicator'
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
            spinnerType='PulseIndicator'
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
            spinnerType='SkypeIndicator'
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
            spinnerType='UIActivityIndicator'
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
            spinnerType='WaveIndicator'
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
