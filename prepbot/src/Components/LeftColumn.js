//LeftColumn.js
import React from 'react';
import { Box, Button, Text, Input, Flex, Select } from '@chakra-ui/react';

const LeftColumn = () => {
  return (
    <Flex direction="column" w="100%" p={4} borderRight="1px solid #E2E8F0">
      {/* Upload Section */}
      <Box mb={4}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>Upload and Analyze Resume</Text>
        <Button w="100%" colorScheme="blue" mb={2}>Upload and Analyze Resume</Button>
        
      </Box>

      {/* Detecte Status Section */}
      <Box mb={4}>
      <Text fontSize="sm" mb={2}>Status </Text>
        <Input placeholder="--" />
      </Box>

      {/* Detected Specialization Section */}
      <Box mb={4}>
      <Text fontSize="sm" mb={2}>Detected Specialization </Text>
        <Input placeholder="--" />
      </Box>

      {/* Select Job Section */}
      <Box mb={4}>
        <Text fontSize="sm" mb={2}>Select Job Role</Text>
        <Select placeholder="Select Job Role" >
          <option value="mle">Machine Learning Engineer</option>
          <option value="se">Software Engineer</option>
        </Select>
      </Box>

      {/* Text Input Box */}
      <Box mb={4}>
      <Text fontSize="sm" mb={2}>Enter Job Description (max 200 words)</Text>
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
