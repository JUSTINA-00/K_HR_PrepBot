import React from 'react';
import Bot from './Bot'
import { ChakraProvider } from '@chakra-ui/react';
import './styles.css'
const App=()=> {
  return (
    <div className='Bots'>
      <ChakraProvider>
        <Bot/>
        
      </ChakraProvider>
    </div>
  )
}
export default App;
