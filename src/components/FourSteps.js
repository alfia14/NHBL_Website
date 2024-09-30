import React from 'react';
import { Box, Flex, Heading, Link, Text, SimpleGrid, Icon, Stack } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';  // You can replace these with actual icons
import { FaRegCommentDots, FaCheckCircle, FaStar } from 'react-icons/fa';

const FourSteps = () => {
  return (
    <Box py={16} bg="gray.50">
      {/* Title Section */}
      <Heading as="h2" textAlign="center" mb={4} fontSize="2xl">
        4 simple steps
      </Heading>
      <Text textAlign="center" mb={12}>
        connect you to health research
      </Text>

      {/* Steps Section */}
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} px={8}>
        {/* Step 1 */}
        <Flex direction="column" align="center" textAlign="center">
          <Box as={SearchIcon} boxSize={16} color="yellow.500" mb={4} />
          <Heading as="h4" size="md" mb={2}>
            Search
          </Heading>
          <Text color="gray.500">for studies</Text>
        </Flex>

        {/* Step 2 */}
        <Flex direction="column" align="center" textAlign="center">
          <Icon as={FaStar} boxSize={16} color="purple.600" mb={4} />
          <Heading as="h4" size="md" mb={2}>
            Show Interest
          </Heading>
          <Text color="gray.500">in studies you like</Text>
        </Flex>

        {/* Step 3 */}
        <Flex direction="column" align="center" textAlign="center">
          <Icon as={FaRegCommentDots} boxSize={16} color="orange.400" mb={4} />
          <Heading as="h4" size="md" mb={2}>
            Communicate
          </Heading>
          <Text color="gray.500">with study teams</Text>
        </Flex>

        {/* Step 4 */}
        <Flex direction="column" align="center" textAlign="center">
          <Icon as={FaCheckCircle} boxSize={16} color="green.500" mb={4} />
          <Heading as="h4" size="md" mb={2}>
            Participate
          </Heading>
          <Text color="gray.500">if there is a match</Text>
        </Flex>
      </SimpleGrid>

      {/* Privacy Section */}
      <Stack mt={16} align="center" spacing={4}>
        <Heading as="h3" size="lg" color="blue.800">
          We respect your privacy
        </Heading>
        <Text textAlign="center" maxW="600px">
          UMHealthResearch is a secure, password-protected database. All the information that you choose to share will be kept private and confidential.{' '}
          <Link href="https://www.vpaa.uillinois.edu/resources/web_privacy" _hover={{ color: 'blue', textDecoration: 'underline' }}>Privacy Policy</Link>
        </Text>
      </Stack>

      {/* Consent Section */}
      <Stack mt={16} align="center" spacing={4}>
        <Heading as="h3" size="lg" color="blue.800">
          We do nothing without your consent
        </Heading>
        <Text textAlign="center" maxW="600px">
          NHBL health research is a free and secure tool that facilitates a partnership between health researchers and volunteers. Your membership lets us know that you may be interested in participating in clinical studies, but you are never obligated to do so.
        </Text>
      </Stack>
    </Box>
  );
};

export default FourSteps;
