// theme.js
import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',  // Default color mode
  useSystemColorMode: false,  // Whether to switch based on system preferences
};

const theme = extendTheme({ config });

export default theme;
