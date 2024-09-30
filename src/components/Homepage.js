import React from 'react';
import Studies from './Studies';
import FourSteps from './FourSteps';
import Footer from './Footer';

import { Link as RouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

import {
  Box,
  Flex,
  Heading,
  Button,
  Text,
  Input,
  Stack,
  Image,
  IconButton,
} from '@chakra-ui/react';

function Homepage() {
  return (
    <Box>
      {/* Header Section */}
      <Flex
        justify="space-between"
        align="center"
        p={4}
        bg="white"
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Box display="flex" alignItems="center">
          <Image src= "images/logo.png" alt="University Logo" h={8} />
          <Heading as="h1" size="md" ml={2}>
          Neurocognitive Health Behavior Laboratory
          </Heading>
        </Box>
        <Stack direction="row" spacing={4}>
          <Button as={RouterLink} to="/login" colorScheme="purple">
            Volunteer Login
          </Button>
          <Button as={RouterLink} to="/login" colorScheme="purple">
            Study Team Login
          </Button>
          <Button as={RouterLink} to="/signup" colorScheme="purple">
            Sign Up
          </Button>
        </Stack>
      </Flex>

      {/* Hero Section */}
      <Box
        position="relative"
        h="80vh"
        bgImage="images/banner-lab.png"
        bgSize="cover"
        bgPosition="center"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          w="full"
          h="full"
          bgGradient="linear(to-r, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1))"
          color="white"
        >
          <Flex direction="column" justify="center" align="center" h="full" textAlign="center">
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              "Message"
            </Text>
            <Heading as="h2" size="lg" mb={6}>
              
              What’s <Text as="span" color="yellow.400">your</Text> reason for participating in health research?
            </Heading>
          </Flex>
        </Box>
      </Box>

      {/* Search Section */}
      <Flex bg="blue.800" p={6} justify="center">
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align="center">
          <Input
            placeholder="Find a study by topic or condition"
            size="lg"
            w={{ base: '100%', md: '400px' }}
            bg="white"
          />
          <Button colorScheme="yellow" size="lg">
            Search
          </Button>
        </Stack>
      </Flex>
      <Studies/>
      <FourSteps/>
      <Footer/>

    </Box>
  );
}

export default Homepage;
