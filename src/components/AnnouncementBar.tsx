import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";

const AnnouncementBar = () => {
  return (
    <Box
      bg="trello.blue.50" // Light blue background
      color="trello.blue.800" // Dark blue text
      py={2} // Padding vertical
      px={4} // Padding horizontal
      textAlign="center" // Center the text
      fontSize="sm" // Small text size
      fontWeight="medium" // Medium weight
    >
      <Container maxW="container.xl">
        <Flex justifyContent="center" alignItems="center">
          <Text>
            Accelerate your teams' work with Atlassian Intelligence (AI)
            features 🤖 now available for all Premium and Enterprise!{" "}
            <Link
              href="#"
              color="trello.blue.600"
              textDecoration="underline"
              _hover={{ color: "trello.blue.800" }}
            >
              Learn more
            </Link>
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};
