import React from 'react';
import { Box, Flex, Text, Link, Stack, Divider } from '@chakra-ui/react';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="blue.900" color="white" py={10}>
      <Flex
        maxW="1200px"
        mx="auto"
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        px={8}
        mb={8}
      >
        {/* Left Section - Contact Info */}
        <Stack spacing={4} textAlign={{ base: 'center', md: 'left' }}>
          <Text fontSize="lg" fontWeight="bold">
            Neurocognitive Health Behavior Laboratory
          </Text>
          <Text>Louise Freer Hall</Text>
          <Text>906 South Goodwin Avenue</Text>
          <Text>Urbana, IL 61801</Text>
          <Text>(217) 300-1667</Text>
          <Link href="mailto:bcnnlab@gmail.com" color="blue.300" _hover={{ textDecoration: 'underline' }}>
            bcnnlab@gmail.com
          </Link>
          {/* Social Media Icon */}
          <Link href="https://facebook.com" isExternal>
            <FaFacebookF size="24px" />
          </Link>
        </Stack>

        {/* Right Section - Affiliations */}
        <Stack spacing={2} textAlign={{ base: 'center', md: 'left' }} mt={{ base: 8, md: 0 }}>
          <Text>College of Applied Health Sciences</Text>
          <Text>Department of Kinesiology and Community Health</Text>
        </Stack>
      </Flex>

      <Divider borderColor="whiteAlpha.300" />

      {/* Footer Bottom Links */}
      <Flex
        maxW="1200px"
        mx="auto"
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        px={8}
        mt={4}
      >
        {/* Policy Links */}
        <Stack direction="row" spacing={6} textAlign={{ base: 'center', md: 'left' }} fontSize="sm">
          <Link href="#" _hover={{ textDecoration: 'underline' }}>About Cookies</Link>
          <Link href="https://www.vpaa.uillinois.edu/resources/web_privacy" _hover={{ bgcolor: 'blue', textDecoration: 'underline' }}>Privacy Policy</Link>
          <Text>Copyright © 2024</Text>
          <Link href="#" _hover={{ textDecoration: 'underline' }}>Accessibility</Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;
