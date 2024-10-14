import React, { useState } from 'react';
import { Box, Button, Text, Input, Flex, Select, useColorMode } from '@chakra-ui/react';

const LeftColumn = () => {
  const [fileName, setFileName] = useState('');
  const { colorMode } = useColorMode(); // Access the color mode

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <Flex direction="column" w="100%" p={4} borderRight="1px solid #E2E8F0" bg={colorMode === 'light' ? 'gray.50' : 'gray.800'} paddingTop={20}>
      
      {/* Upload Section */}
      <Box mb={4}>
        <Input type="file" accept=".pdf" onChange={handleFileChange} display="none" id="file-upload" />
        <Button as="label" htmlFor="file-upload" w="100%" bg={colorMode === 'light' ? 'gray.300' : 'gray.700'} mb={2}>
          Upload Resume
        </Button>
        {fileName && <Text fontSize="sm" color="gray.500">{fileName} uploaded</Text>}
      </Box>

      {/* Status Section */}
      <Box mb={4}>
        <Text fontSize="sm" mb={2}>Status</Text>
        <Input placeholder="--" />
      </Box>

      {/* Select Job Role Section */}
      <Box mb={4}>
        <Text fontSize="sm" mb={2}>Select Job Role</Text>
        <Select placeholder="Select Job Role">
          <option value="mle">Machine Learning Engineer</option>
          <option value="se">Software Engineer</option>
        </Select>
      </Box>

      {/* Enter Job Description */}
      <Box mb={4}>
        <Text fontSize="sm" mb={2}>Enter Job Description (max 200 words)</Text>
        <Input placeholder="Type your message" />
      </Box>

      {/* Generate Questions Button */}
      <Box mb={4}>
        <Button w="100%" bg={colorMode === 'light' ? 'gray.300' : 'gray.700'}>Generate Q</Button>
      </Box>

      {/* Feedback Button */}
      <Box>
        <Button w="100%" bg={colorMode === 'light' ? 'gray.300' : 'gray.700'}>Feedback</Button>
      </Box>
    </Flex>
  );
};

export default LeftColumn;
