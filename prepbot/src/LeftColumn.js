// src/components/LeftColumn.js
import React from 'react';
import { Box, Button, Text, Input, Flex, Select } from '@chakra-ui/react';

const LeftColumn = () => {
  return (
    <Flex direction="column" w="30%" bg="gray.50" p={4} borderRight="1px solid #E2E8F0">
      {/* Upload Section */}
      <Box mb={4}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>Upload and Analyze Resume</Text>
        <Button w="100%" colorScheme="blue" mb={2}>Upload Resume</Button>
        <Text fontSize="sm" color="gray.500">Resume is uploaded and analyzed. You can now edit the text.</Text>
      </Box>

      {/* Select Specialization Section */}
      <Box mb={4}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>Select Specialization</Text>
        <Select placeholder="Artificial Intelligence" icon={<span>🤖</span>} />
      </Box>

      {/* Text Input Box */}
      <Box mb={4}>
        <Input placeholder="Type your message" />
      </Box>

      {/* Generate Questions Button */}
      <Box mb={4}>
        <Button w="100%" colorScheme="orange">Generate Q</Button>
      </Box>

      {/* Feedback Button */}
      <Box>
        <Button w="100%" colorScheme="red">Feedback</Button>
      </Box>
    </Flex>
  );
};

export default LeftColumn;
