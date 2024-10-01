import React from 'react';
import { Heading, Flex,   } from '@chakra-ui/react'
import { Button,  VStack, Text } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'

// import { Wrap} from '@chakra-ui/react'

const Bot = () => {
    return(
        
<Flex direction="column" align="center" height="100vh" justify="flex-start">
<Heading as="h1" size="2xl" mb={5} marginBottom= '2px'textAlign="center">Karunya Institute HR Interview Prep Bot</Heading>
<br></br>
<br></br>

<div className='mains' style={{ height: '100vh', display:'flex', justifyContent: 'center', alignItems: 'center' }}>
<Flex direction="column" ml={500}mb={100}>
<Text mt={20} >🗪 Chat</Text>
<Textarea placeholder='Sample ChatBox' width='20cm' height='11cm' mt={2} />

<Flex direction="column">
  <Text mt={10}>Type your answer (or) click 'Skip' to proceed</Text>
  <Textarea placeholder='Hello ' width='20cm' height='10px' mt={2}></Textarea>



            



{/* <Wrap
css={{
                    height: '90%', 
                    width:'500px',
                    alignItems: '',   // Stretch items vertically
                    borderRadius: '16px',    // Rounded corners
                    padding: '30px', 
                     
                    margin:'8px',       // Padding around the borders
                    backgroundColor: '#f0f0f0' // Optional background color for visibility
                }}>
                    <Heading>HR Bot</Heading>

            </Wrap>

            {/* Second Wrap Box */}
            {/* <Wrap
                css={{
                    height: '100%', 
                    width: '950px',
                    alignItems: 'stretch',   // Stretch items vertically
                    borderRadius: '16px',  
                    padding: '30px',  
                    marginLeft: '20px',      // Space between boxes
                    backgroundColor: '#f0f0f0' // Background color for visibility
                }}
            > */} 
                {/* <Heading>Chat</Heading> */}
                

    
 





      
{/*    

</Wrap> */}


<VStack fontFamily= 'sans-serif' spacing={5} mt={50} >
<Button colorScheme='teal' color='black'variant='outline'width='20cm'>
📩 Send
  </Button>
<Button colorScheme='teal' color='black' variant='outline'width='20cm'> ⏭️ Skip
  </Button>
<Button colorScheme='teal' color='black' variant='outline'width='20cm'>
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
