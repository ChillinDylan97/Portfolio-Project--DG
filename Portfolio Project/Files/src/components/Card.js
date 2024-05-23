import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "@chakra-ui/react";

const Card = ({ title, description, imageSrc, url }) => {

  return(

    <VStack color='black' backgroundColor='white' borderRadius='xl' cursor='pointer'>
      <Image src={imageSrc} borderRadius='xl'/>
      <VStack alignItems="flex-start" p={4} spacing={4}>
        <HStack justifyContent='space-between' alignItems='center'>
          <Heading as='h3' size='md'>{title}</Heading>
        </HStack>
        <Text fontSize='lg'>{description}</Text>
        <HStack>
          <p>
          <Link href={url}>
            <p>See more</p>
          </Link>
              </p>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
