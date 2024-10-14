import React, { useState } from 'react';
import { ChakraProvider, Flex, IconButton, Box, Switch, useColorMode } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import Bot from './Components/Bot';
import LeftColumn from './Components/LeftColumn';

const App = () => {
  const [isLeftColumnOpen, setIsLeftColumnOpen] = useState(false); // Start with LeftColumn hidden
  const { colorMode, toggleColorMode } = useColorMode(); // Hook for dark mode
  const toggleLeftColumn = () => {
    setIsLeftColumnOpen(!isLeftColumnOpen); // Toggle LeftColumn visibility
  };

  return (
    <Flex height="100vh" width="100vw" position="relative" bg={colorMode === 'light' ? 'white' : 'gray.900'}>
      {/* Hamburger Menu IconButton */}
      <IconButton
        aria-label="Toggle Menu"
        icon={<FiMenu />}
        position="absolute"
        top={4}
        left={4}
        zIndex={10}
        onClick={toggleLeftColumn}
      />

      {/* Dark Mode Toggle Switch */}
      <Box position="absolute" top={4} right={4} zIndex={10}>
        <Switch colorScheme="gray" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      </Box>

      {/* LeftColumn takes 35% of the width, hidden when toggled off */}
      {isLeftColumnOpen && (
        <Flex flex="0.25" minW="200px" bg={colorMode === 'light' ? 'white' : 'gray.800'}>
          <LeftColumn />
        </Flex>
      )}

      {/* Bot takes the remaining width */}
      <Flex flex={isLeftColumnOpen ? '0.75' : '1'} bg={colorMode === 'light' ? 'white' : 'gray.800'}>
        <Bot />
      </Flex>
    </Flex>
  );
};

export default App;
