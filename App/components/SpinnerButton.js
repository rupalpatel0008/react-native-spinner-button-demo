import React from 'react';
import { ActivityIndicator, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import * as Animatable from 'react-native-animatable';
import styles from './styles/SpinnerButtonStyle';

function getSpinnerBackgroundStyle (spinnerAnimationType, customButtonStyle, defaultButtonStyle) {
  const borderRadius = customButtonStyle.height ? customButtonStyle.height / 2 : defaultButtonStyle.height / 2;
  let height = customButtonStyle.height ? customButtonStyle.height : defaultButtonStyle.height;
  let width = height;
  let backgroundColor = customButtonStyle.backgroundColor ? customButtonStyle.backgroundColor : defaultButtonStyle.backgroundColor;
  let margin = customButtonStyle.margin ? customButtonStyle.margin : defaultButtonStyle.margin;
  let customSpinnerStyle = {
    height,
    width,
    backgroundColor,
    margin,
    borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  };
  switch (spinnerAnimationType) {
    case 'BallIndicator':
      return customSpinnerStyle;
    case 'BarIndicator':
      return {
        height,
        // width: height * 2,
        paddingHorizontal: 10,
        backgroundColor,
        margin,
        borderRadius: customButtonStyle.borderRadius || defaultButtonStyle.defaultButtonStyle,
        justifyContent: 'center',
        alignItems: 'center',
      };
    case 'DotIndicator':
      return {
        height,
        // width: height * 3,
        paddingHorizontal: 10,
        backgroundColor,
        margin,
        borderRadius: customButtonStyle.borderRadius || defaultButtonStyle.defaultButtonStyle,
        justifyContent: 'center',
        alignItems: 'center',
      };
    case 'MaterialIndicator':
      return customSpinnerStyle;
    case 'PacmanIndicator':
      return {
        height,
        width: height * 2,
        backgroundColor,
        margin,
        borderRadius: customButtonStyle.borderRadius || defaultButtonStyle.defaultButtonStyle,
        justifyContent: 'center',
        alignItems: 'center',
      };
    case 'PulseIndicator':
      return customSpinnerStyle;
    case 'SkypeIndicator':
      return customSpinnerStyle;
    case 'UIActivityIndicator':
      return customSpinnerStyle;
    case 'WaveIndicator':
      return customSpinnerStyle;
    default:
      return customSpinnerStyle;
  }
}

const Spinner = (props) => {
  console.log('props in Spinner = ', props)
  const {
    buttonStyle,
    spinnerColor,
    spinnerAnimationType,
    isLoading,
    onPress,
    children,
    count,
    minScale,
    maxScale,
    waveFactor,
    waveMode,
    size,
    animationType
  } = props;
  let customButtonStyle = StyleSheet.flatten(buttonStyle);
  let defaultButtonStyle = StyleSheet.flatten(styles.defaultButtonStyle);
  let height = customButtonStyle.height ? customButtonStyle.height : defaultButtonStyle.height;
  let customSpinnerStyle = getSpinnerBackgroundStyle(spinnerAnimationType, customButtonStyle, defaultButtonStyle);
  console.log('customSpinnerStyle = ', customSpinnerStyle);
  switch (spinnerAnimationType) {
    case 'BallIndicator':
      return (
        <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
          <BallIndicator
            color={spinnerColor || 'rgb(255, 0, 255)'}
            count={count}
            size={height - 20}
          />
        </Animatable.View>
      );
    case 'BarIndicator':
      return (
        <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
          <BarIndicator
            color={spinnerColor || 'rgb(255, 0, 255)'}
            count={count}
            size={height - 10}
          />
        </Animatable.View>
      );
    case 'DotIndicator':
      return (
        <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
          <DotIndicator
            color={spinnerColor || 'rgb(255, 0, 255)'}
            count={count}
            size={size}
          />
        </Animatable.View>
      );
    case 'MaterialIndicator':
      // Note: To overcome https://github.com/n4kz/react-native-indicators/issues/11 and 
      //   https://github.com/n4kz/react-native-indicators/issues/6 ActivityIndicator is used in android
      if (Platform.OS === 'android') {
        return (
          <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
            <ActivityIndicator
              color={spinnerColor || 'rgb(255, 0, 255)'}
              size={height - 10}
            />
          </Animatable.View>
        );
      }
      return (
        <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
          <MaterialIndicator
            color={spinnerColor || 'rgb(255, 0, 255)'}
            size={height - 10}
          />
        </Animatable.View>
      );
    case 'PacmanIndicator':
      return (
        <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
          <PacmanIndicator
            color={spinnerColor || 'rgb(255, 0, 255)'}
            size={height - 10}
          />
        </Animatable.View>
      );
    case 'PulseIndicator':
      return (
        <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
          <PulseIndicator
            color={spinnerColor || 'rgb(255, 0, 255)'}
            size={height}
          />
        </Animatable.View>
      );
    case 'SkypeIndicator':
      return (
        <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
          <SkypeIndicator
            color={spinnerColor || 'rgb(255, 0, 255)'}
            count={count}
            size={height - 10}
            minScale={minScale}
            maxScale={maxScale}
          />
        </Animatable.View>
      );
    case 'UIActivityIndicator':
      return (
        <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
          <UIActivityIndicator
            color={spinnerColor || 'rgb(255, 0, 255)'}
            count={count}
            size={height - 10}
          />
        </Animatable.View>
      );
    case 'WaveIndicator':
      return (
        <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
          <WaveIndicator
            color={spinnerColor || 'rgb(255, 0, 255)'}
            count={count}
            size={height - 10}
            waveFactor={waveFactor}
            waveMode={waveMode}
          />
        </Animatable.View>
      );
    default:
      console.log('count in default spinner = ', props.count)
      return (
        <Animatable.View animation={animationType || 'fadeIn'} style={[styles.defaultSpinnerContainerStyle, customSpinnerStyle]}>
          <BallIndicator
            color={spinnerColor || 'rgb(255, 0, 255)'}
            count={count}
            size={height - 20}
          />
        </Animatable.View>
      );
  }
}

const CustomButton = (props) => {
  const { animationType, buttonStyle, onPress, isLoading, children } = props;
  return (
    <Animatable.View animation={animationType || 'fadeIn'}>
      <TouchableOpacity
        style={[styles.defaultButtonStyle, buttonStyle]}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    </Animatable.View>
  );
};

const SpinnerButton = (props) => {
  const {
    animationType,
    buttonStyle,
    spinnerColor,
    spinnerAnimationType,
    isLoading,
    onPress,
    children,
    count,
    minScale,
    maxScale,
    waveFactor,
    waveMode,
    size,
  } = props;
  if (isLoading) {
    return (
      <Spinner
        spinnerColor={spinnerColor || 'rgb(255, 255, 255)'}
        spinnerAnimationType={spinnerAnimationType}
        buttonStyle={buttonStyle}
        count={count}
        minScale={minScale}
        maxScale={maxScale}
        waveFactor={waveFactor}
        waveMode={waveMode}
        size={size}
        isLoading={isLoading}
        animationType={animationType}
      />
    );
  }
  return (
    <CustomButton
      buttonStyle={buttonStyle}
      onPress={onPress}
      children={children}
      isLoading={isLoading}
      animationType={animationType}
    />
  );
};

export default SpinnerButton;