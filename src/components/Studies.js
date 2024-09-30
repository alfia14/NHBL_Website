import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Image,
} from '@chakra-ui/react';

function Studies() {
  const searchItems = [
    { title: 'BREES', image: '/images/covid.jpg' },
    { title: 'iCONS', image: '/images/healthy-men.jpg' },
    { title: 'iPALS', image: '/images/healthy-women.jpg' },
    { title: 'MPODS', image: '/images/from-home.jpg' },
    { title: 'NURISH', image: '/images/mental-health.jpg' },
    { title: 'Studies Related to Dental Health', image: '/images/dental-health.jpg' },
    { title: 'Studies Related to the Eye', image: '/images/eye.jpg' },
    { title: 'Obesity Studies', image: '/images/obesity.jpg' },
    { title: 'Diabetes Studies', image: '/images/diabetes.jpg' },
  ];

  return (
    <Box py={16} bg="gray.50">
      <Heading as="h2" textAlign="center" mb={8} color="blue.900">
        Highlighted Studies
      </Heading>
      
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} px={8}>
        {searchItems.map((item, index) => (
          <Box
            key={index}
            position="relative"
            h="200px"
            bgImage={`url(${item.image})`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="md"
            overflow="hidden"
            _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
          >
            <Flex
              position="absolute"
              top="0"
              left="0"
              w="full"
              h="full"
              bg="rgba(0, 0, 0, 0.4)"
              justify="center"
              align="center"
              color="white"
              fontSize="lg"
              fontWeight="bold"
              textAlign="center"
            >
              {item.title}
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Studies;
