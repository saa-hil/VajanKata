import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

// Local imports
import COLORS from '~/styles/colors';
import Icon from './FeatherIcon';
import {BUTTON} from '~/styles/generic';

interface BackButtonProps {
  customStyle?: ViewStyle;
}

const BackButton = (props: BackButtonProps) => {
  const exitApp = () => {
    BackHandler.exitApp();
  };

  return (
    <TouchableOpacity
      style={[styles.backButtonContainer, props.customStyle]}
      onPress={exitApp}>
      <Icon name="chevrons-left" size={20} color={COLORS.BLACK} />
      <Text style={styles.text}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButtonContainer: {
    width: 110,
    height: BUTTON.HEIGHT,
    backgroundColor: COLORS.WHITE,
    borderRadius: BUTTON.BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: BUTTON.FONT_SIZE,
    fontFamily: BUTTON.FONT_FAMILY,
    color: COLORS.BLACK,
  },
});

export default BackButton;
