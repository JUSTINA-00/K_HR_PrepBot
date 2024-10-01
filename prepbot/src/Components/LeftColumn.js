//LeftColumn.js
// src/Components/LeftColumn.js
import React, { useState, useRef } from 'react';
import { Box, Button, Text, Input, Flex, Select } from '@chakra-ui/react';
import { FiUpload } from 'react-icons/fi'; // Ensure you have react-icons installed

const LeftColumn = () => {
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null); // Create a ref to access the file input

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger the click event on the hidden input
  };

  return (
    <Flex direction="column" w="100%" p={4} borderRight="1px solid #E2E8F0">
      {/* Upload Section */}
      <Box mb={4}>
        <Input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          display="none" // Hide the input
          ref={fileInputRef} // Assign ref to the input
        />
        <Button onClick={handleButtonClick} colorScheme="blue" mb={2}>
          <FiUpload /> Upload and Analyse Resume
        </Button>
        {fileName && (
          <Text fontSize="sm" color="gray.500">
            {fileName}
          </Text>
        )}
      </Box>

      {/* Detecte Status Section */}
      <Box mb={4}>
        <Text fontSize="sm" mb={2}>Status</Text>
        <Input placeholder="--" />
      </Box>

      {/* Detected Specialization Section */}
      <Box mb={4}>
        <Text fontSize="sm" mb={2}>Detected Specialization</Text>
        <Input placeholder="--" />
      </Box>

      {/* Select Job Section */}
      <Box mb={4}>
        <Text fontSize="sm" mb={2}>Select Job Role</Text>
        <Select placeholder="Select Job Role">
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
        <Button w="100%" colorScheme="orange">Generate Questions</Button>
      </Box>

      {/* Feedback Button */}
      <Box>
        <Button w="100%" colorScheme="red">Feedback</Button>
      </Box>
    </Flex>
  );
};

export default LeftColumn;
