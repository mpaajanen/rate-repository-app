import React from 'react';
import { Link } from 'react-router-native';
import Text from './Text';

const AppBarTab = ({ text, path }) => {
  return (
    <Link to={path}>
      <Text color="tabText" fontWeight="bold">{text}</Text>
    </Link>
  );
};

export default AppBarTab;