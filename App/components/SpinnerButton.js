import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Spinner from './Spinner';
import styles from './styles/SpinnerButtonStyle';

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