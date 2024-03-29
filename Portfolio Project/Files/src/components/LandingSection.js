import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hi there, I'm Dylan!";
const bio1 = "A Front-End Developer";
const bio2 = "specialized in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <Avatar src= "https://media.licdn.com/dms/image/D5603AQGKG2fGzblV9w/profile-displayphoto-shrink_800_800/0/1711244476509?e=1717027200&v=beta&t=jH_g4OqWse2TYQCm5wBvAT-I7462FTcj7dYKQT-vfTE"
      size='2xl'
      name='Your Name'
      />
      <Heading as='h4' size='md' noOfLines={1}>{greeting}</Heading>
    
    <VStack spacing={6}>
      <Heading as='h1' size='3xl' noOfLines={1}>{bio1}</Heading>
      <Heading as='h1' size='3xl' noOfLines={1}>{bio2}</Heading>
    </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
