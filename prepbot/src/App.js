//App.js
import React from 'react';
import Bot from './Components/Bot';
import LeftColumn from './Components/LeftColumn';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import './styles.css';

const App = () => {
  return (
    <ChakraProvider>
      <Flex direction="row" height="100vh" width="100vw">
        {/* LeftColumn takes 35% of the width */}
        <Flex flex="0.35" bg="gray.50">
          <LeftColumn />
        </Flex>
        
        {/* Bot takes 65% of the width */}
        <Flex flex="0.65" bg="white">
          <Bot />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;

