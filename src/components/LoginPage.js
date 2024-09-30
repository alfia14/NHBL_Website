import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Link, Stack, Text, Image } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // Use useNavigate for routing
import axios from 'axios'; // To handle API requests

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      // Send login data to the backend
      const response = await axios.post('https://nhblstudies.web.illinois.edu/login.php', {
        email,
        password,
      });

      // Check if login was successful
      if (response.data.status === 'success') {
        setMessage('Login successful! Redirecting...');
        // Redirect to dashboard or another page
        navigate('/dashboard'); // Use navigate for redirection
      } else {
        setMessage(response.data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setMessage('Error: Unable to log in. Please try again later.');
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
        Log in
      </Text>

      {/* Display success or error message */}
      {message && (
        <Text color={message.startsWith('Error') ? 'red.500' : 'green.500'} mb={4}>
          {message}
        </Text>
      )}

      {/* Login Form */}
      <Stack spacing={4} as="form" onSubmit={handleLogin}>
        <FormControl isRequired>
          <FormLabel>Email you signed up with</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Your password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        {/* Forgot password link */}
        <Link color="blue.500" textAlign="right" fontSize="sm" mb={4}>
          Forgot password
        </Link>

        {/* Login Button */}
        <Button type="submit" colorScheme="blue" w="full" size="lg">
          Log in
        </Button>
      </Stack>

      {/* Create an account link */}
      <Text mt={6}>
        <Link as={RouterLink} to="/signup" color="blue.500">
          Create an account
        </Link>
      </Text>

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

export default LoginPage;
