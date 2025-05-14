"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

export default function HeroSection() {
  return (
    <Box position="relative" overflow="hidden">
      <Container maxW="container.xl" py={{ base: 10, md: 20 }}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 8, lg: 12 }}
        >
          {/* Left side content */}
          <VStack
            spacing={6}
            align={{ base: "center", lg: "flex-start" }}
            textAlign={{ base: "center", lg: "left" }}
            maxW={{ base: "full", lg: "50%" }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              lineHeight="1.2"
              color="gray.800"
            >
              Capture, organize, and tackle your to-dos from anywhere.
            </Heading>

            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
              Escape the clutter and chaos—unleash your productivity with
              Trello.
            </Text>

            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={4}
              w={{ base: "full", md: "auto" }}
            >
              <Input
                placeholder="Email"
                size="lg"
                bg="white"
                borderColor="gray.300"
                _hover={{ borderColor: "gray.400" }}
                _focus={{
                  borderColor: "blue.500",
                  boxShadow: "0 0 0 1px blue.500",
                }}
                width={{ base: "full", md: "300px" }}
              />
              <Button
                size="lg"
                bg="brand.blue"
                color="white"
                _hover={{ bg: "blue.500" }}
                width={{ base: "full", md: "auto" }}
              >
                Sign up - it's free!
              </Button>
            </Stack>

            <Text fontSize="sm" color="gray.600">
              By entering my email, I acknowledge the{" "}
              <Link color="brand.blue" href="#">
                Atlassian Privacy Policy
              </Link>
            </Text>

            <Link
              href="#"
              display="flex"
              alignItems="center"
              color="brand.blue"
              fontWeight="medium"
              mt={2}
            >
              <Box
                as="span"
                mr={2}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                bg="brand.blue"
                color="white"
                rounded="full"
                w="24px"
                h="24px"
              >
                <FaPlay size="10px" />
              </Box>
              Watch video
            </Link>
          </VStack>

          {/* Right side image */}
          <Box
            position="relative"
            width={{ base: "full", lg: "50%" }}
            height={{ base: "auto", lg: "600px" }}
          >
            {/* Phone image */}
            <Box
              position="relative"
              zIndex="2"
              transform={{ base: "translateY(0)", lg: "translateY(-5%)" }}
            >
              <Image
                src="/placeholder.svg?height=600&width=300"
                alt="Trello mobile app"
                width={{ base: "250px", md: "300px" }}
                mx="auto"
              />
            </Box>

            {/* Decorative shapes */}
            <Box
              position="absolute"
              bottom="10%"
              right="5%"
              zIndex="1"
              width={{ base: "150px", md: "200px" }}
              height={{ base: "150px", md: "200px" }}
              bg="brand.orange"
              transform="rotate(15deg)"
            />

            <Box
              position="absolute"
              bottom="5%"
              right="15%"
              zIndex="0"
              width={{ base: "150px", md: "200px" }}
              height={{ base: "150px", md: "200px" }}
              bg="brand.purple"
              transform="rotate(25deg)"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
