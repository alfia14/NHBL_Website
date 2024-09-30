import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Stack,
  Radio,
  Select,
  CheckboxGroup,
  Checkbox,
  Textarea,
  Text,
} from '@chakra-ui/react';

const BasicInformation = () => {
  const [gender, setGender] = useState('male');
  const [racialBackground, setRacialBackground] = useState([]);
  const [healthConditions, setHealthConditions] = useState([]);
  const [smokingStatus, setSmokingStatus] = useState('');
  const [profileVisibility, setProfileVisibility] = useState('all');

  return (
    <Box maxW="700px" mx="auto" p={6} bg="gray.50" boxShadow="md" borderRadius="md">
      <Text fontSize="2xl" mb={4}>Basic Information Form</Text>

      {/* Name */}
      <FormControl id="name" mb={4}>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Enter your name" />
      </FormControl>

      {/* Phone Number */}
      <FormControl id="phone" mb={4}>
        <FormLabel>Phone number (optional)</FormLabel>
        <Input placeholder="Enter your phone number" />
      </FormControl>

      {/* Date of Birth */}
      <FormLabel>Date of Birth</FormLabel>
      <Stack direction="row" spacing={4} mb={4}>
        <Select placeholder="Birth Month">
          <option>January</option>
          <option>February</option>
          <option>March</option>
          {/* Add other months */}
        </Select>
        <Select placeholder="Birth Day">
          {Array.from({ length: 31 }, (_, i) => (
            <option key={i}>{i + 1}</option>
          ))}
        </Select>
        <Select placeholder="Birth Year">
          {Array.from({ length: 100 }, (_, i) => (
            <option key={i}>{2024 - i}</option>
          ))}
        </Select>
      </Stack>

      {/* Gender */}
      <FormControl as="fieldset" mb={4}>
        <FormLabel>Gender</FormLabel>
        <RadioGroup onChange={setGender} value={gender}>
          <Stack direction="row">
            <Radio value="female">Female</Radio>
            <Radio value="male">Male</Radio>
          </Stack>
        </RadioGroup>
        <Text fontSize="sm" mt={2}>
          We are working on implementing updated, more inclusive options for gender, race, and ethnicity. Improvements coming soon!
        </Text>
      </FormControl>

      {/* Racial Background */}
      <FormControl as="fieldset" mb={4}>
        <FormLabel>Racial background</FormLabel>
        <CheckboxGroup value={racialBackground} onChange={setRacialBackground}>
          <Stack spacing={2}>
            <Checkbox value="American Indian or Alaska Native">American Indian or Alaska Native</Checkbox>
            <Checkbox value="Asian">Asian</Checkbox>
            <Checkbox value="Black or African American">Black or African American</Checkbox>
            <Checkbox value="Native Hawaiian or other Pacific Islander">Native Hawaiian or other Pacific Islander</Checkbox>
            <Checkbox value="White or Caucasian">White or Caucasian</Checkbox>
          </Stack>
        </CheckboxGroup>
        <FormLabel mt={2}>If other, please specify</FormLabel>
        <Textarea placeholder="Specify other racial background" />
      </FormControl>

      {/* Hispanic or Latino */}
      <FormControl as="fieldset" mb={4}>
        <FormLabel>I consider myself</FormLabel>
        <RadioGroup>
          <Stack direction="row">
            <Radio value="Hispanic or Latino">Hispanic or Latino</Radio>
            <Radio value="Not Hispanic or Latino">Not Hispanic or Latino</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      {/* Health Information */}
      <FormControl as="fieldset" mb={4}>
        <FormLabel>Currently, I have the following conditions</FormLabel>
        <Textarea placeholder="List current conditions, or leave blank if none" />
        <FormLabel mt={2}>OR</FormLabel>
        <Checkbox>No current conditions</Checkbox>
      </FormControl>

      <FormControl as="fieldset" mb={4}>
        <FormLabel>In the past, I have had the following conditions</FormLabel>
        <Textarea placeholder="List past conditions, or leave blank if none" />
        <FormLabel mt={2}>OR</FormLabel>
        <Checkbox>No past conditions</Checkbox>
      </FormControl>

      {/* Smoking Status */}
      <FormControl as="fieldset" mb={4}>
        <FormLabel>My smoking status is</FormLabel>
        <RadioGroup onChange={setSmokingStatus} value={smokingStatus}>
          <Stack direction="row">
            <Radio value="Never smoked">Never smoked</Radio>
            <Radio value="Former smoker">Former smoker</Radio>
            <Radio value="Current smoker">Current smoker</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      {/* Where Did You Learn About Us */}
      <FormControl as="fieldset" mb={4}>
        <FormLabel>I learned about this website through</FormLabel>
        <Textarea placeholder="Specify how you learned about us" />
      </FormControl>

      {/* Profile Visibility */}
      <FormControl as="fieldset" mb={4}>
        <FormLabel>MY PROFILE IS VISIBLE TO</FormLabel>
        <RadioGroup onChange={setProfileVisibility} value={profileVisibility}>
          <Stack direction="column">
            <Radio value="all">All study teams using UMHealthResearch</Radio>
            <Radio value="interested">Only the study teams whose studies I show interest in</Radio>
          </Stack>
        </RadioGroup>
        <Text fontSize="sm" mt={2}>
          We respect your privacy. We do not sell or share your private information with a third party.
        </Text>
      </FormControl>

      {/* Submit Button */}
      <Button colorScheme="blue" mt={6} w="full" size="lg">
        Submit
      </Button>
    </Box>
  );
};

export default BasicInformation;
