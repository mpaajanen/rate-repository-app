import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorTabText: {
    color: theme.colors.tabText,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  rating: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.rating,
  },
  tag: {
    padding: 5,
    color: '#ffffff',
    backgroundColor: theme.colors.primary
  },
});

const Text = ({ color, fontSize, fontWeight, tag, rating, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'tabText' && styles.colorTabText,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    tag && styles.tag,
    rating && styles.rating,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;