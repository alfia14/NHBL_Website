import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Flex,
  Text,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import axios from 'axios';  // Import axios for making API requests

const SignUpPage = () => {
  // State variables to store form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle sign-up form submission
  const handleSignUp = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    // API request to backend
    try {
      const response = await axios.post('https://nhblstudies.web.illinois.edu/signup.php', {
       // name, // You might want to send this too
        email,
        password,
      });

      // Display success message from backend
      setMessage(response.data.message);
    } catch (error) {
      // Handle and display error message from backend
      if (error.response && error.response.data) {
        setMessage('Error: ' + error.response.data);
      } else {
        setMessage('Error: Unable to sign up. Please try again.');
      }
    }
  };

  return (
  
      <Box
      maxW="400px"
      mx="auto"
      mt={10}
      p={6}
      boxShadow="lg"
      bg="gray.50"
      borderRadius="md"
      textAlign="center"
    >
      {/* Logo */}
      <Image
        src="/images/logo.png"  // Update with the path to the logo file
        alt="Health Research Logo"
        mx="auto"
        mb={6}
        boxSize="80px"
      />

      {/* Title */}
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Sign Up      </Text>
      
        

        <Stack spacing={4} as="form" onSubmit={handleSignUp}>
          
          

          {/* Email Field */}
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          {/* Password Field */}
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          {/* Confirm Password Field */}
          <FormControl id="confirm-password" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>

          {/* Error or Success Message */}
          {message && (
            <Text color={message.startsWith('Error') ? 'red.500' : 'green.500'} textAlign="center">
              {message}
            </Text>
          )}

          {/* Sign Up Button */}
          <Button type="submit" colorScheme="blue" size="lg" w="full">
            Sign Up
          </Button>

          {/* Link to Login Page */}
          <Flex justify="center">
            <Text fontSize="sm">
              Already have an account?{' '}
              <Link to="/login" style={{ color: 'blue' }}>
                Log in
              </Link>
            </Text>
          </Flex>

        </Stack>
         {/* Footer text */}
      <Text mt={10} color="gray.500" fontSize="sm">
        NHBL Research
      </Text>
      <Text color="gray.400" fontSize="xs">
        © 2024 Regents of the University of Illinois Urbana Champaign
      </Text>
      </Box>
    
  );
};

export default SignUpPage;
