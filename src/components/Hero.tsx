import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Using motion components from framer-motion
const MotionBox = motion(Box);
const MotionImage = motion(Image);

export default function Hero() {
  const headingSize = useBreakpointValue({ base: "3xl", md: "4xl", lg: "5xl" });
  const subheadingSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Box
      width="full"
      minHeight="100vh"
      bgGradient="rgb(244, 245, 247)"
      pt="200px" // Add padding to account for fixed navbar
    >
      <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: 10, lg: 20 }}
          py={{ base: 16, md: 28 }}
          align="center"
        >
          <VStack
            spacing={6}
            align={{ base: "center", lg: "flex-start" }}
            textAlign={{ base: "center", lg: "left" }}
            maxW={{ lg: "500px" }}
          >
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "6xl", lg: "5xl" }}
                fontWeight="bold"
                color="trello.neutral.900"
                lineHeight="1.2"
              >
                Capture, organize, and tackle your to-dos from anywhere.
              </Heading>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Text
                fontSize={subheadingSize}
                color="trello.neutral.700"
                maxW={{ base: "100%", lg: "90%" }}
                lineHeight="1.6"
              >
                Escape the clutter and chaos—unleash your productivity with
                Trello.
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              width="100%"
            >
              <Stack
                direction={{ base: "column", sm: "row" }}
                spacing={4}
                mt={2}
                width="100%"
                justify={{ base: "center", lg: "flex-start" }}
                align="center"
              >
                <InputGroup maxW={{ base: "100%", sm: "300px" }}>
                  <Input
                    placeholder="Email"
                    size="lg"
                    bg="white"
                    borderRadius="md"
                    _focus={{
                      borderColor: "trello.blue.500",
                      boxShadow: "0 0 0 1px trello.blue.500",
                    }}
                  />
                </InputGroup>
                <Button
                  variant="accent"
                  size="lg"
                  fontSize="md"
                  px={8}
                  py={6}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "md",
                  }}
                  transition="all 0.2s"
                >
                  Sign up - it's free!
                </Button>
              </Stack>
              <Text
                fontSize="xs"
                color="trello.neutral.500"
                mt={2}
                textAlign={{ base: "center", sm: "left" }}
              >
                By entering my email, I acknowledge the Atlassian Privacy Policy
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                variant="link"
                color="trello.blue.600"
                rightIcon={
                  <Box as="span" fontSize="lg">
                    ▶️
                  </Box>
                }
                _hover={{ textDecoration: "none" }}
              >
                Watch video
              </Button>
            </MotionBox>
          </VStack>

          <Flex flex={1} justify="center" align="center">
            <MotionImage
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              alt="Trello Board"
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              objectFit="cover"
              borderRadius="xl"
              shadow="2xl"
              maxH="500px"
              maxW="100%"
            />
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
