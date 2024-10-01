import React from 'react';
import Bot from './Bot'
import LeftColumn from './LeftColumn';
import { ChakraProvider } from '@chakra-ui/react';
import './styles.css'
const App=()=> {
  return (
    <div className='Bots'>
      <ChakraProvider>
        <Bot/>
        <LeftColumn/>
      </ChakraProvider>
    </div>
  )
}
export default App;
