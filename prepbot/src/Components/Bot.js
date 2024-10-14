import React from 'react';

import { Heading, Flex, Button, VStack, Text, Textarea, useColorMode } from '@chakra-ui/react';

const Bot = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex direction="column" align="center" height="100vh" justify="flex-start" w="100%">
      <Heading as="h1" size="2xl" mb={5} textAlign="center">
        Karunya Institute HR Interview Prep Bot
      </Heading>
      <div className='mains' style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Flex direction="column" w="90%">
          <Text mt={5}>🗪 Chat</Text>
          <Textarea placeholder='Sample ChatBox' width="100%" height="400px" mt={2} />
          <Flex direction="column">
            <Text mt={5}>Type your answer (or) click 'Skip' to proceed</Text>
            <Textarea placeholder='Hello' width="100%" height="40px" mt={2} />
            <VStack fontFamily="sans-serif" spacing={5} mt={5}>
              <Button w="100%" bg={colorMode === 'light' ? 'gray.300' : 'gray.700'}>
                📩 Send
              </Button>
              <Button w="100%" bg={colorMode === 'light' ? 'gray.300' : 'gray.700'}>
                ⏭️ Skip
              </Button>
              <Button w="100%" bg={colorMode === 'light' ? 'gray.300' : 'gray.700'}>
                💡 Generate Answer
              </Button>
            </VStack>
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
};

export default Bot;
