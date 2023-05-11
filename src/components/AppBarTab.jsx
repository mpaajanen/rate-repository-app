import React from 'react';
import { Link } from 'react-router-native';
import Text from './Text';

const AppBarTab = ({ style, text, path }) => {
  return (
    <Link to={path}>
      <Text style={style} color="tabText" fontWeight="bold">{text}</Text>
    </Link>
  );
};

export default AppBarTab;