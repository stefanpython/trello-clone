"use client";

import { Box, Text, Link, Flex } from "@chakra-ui/react";

export default function NotificationBanner() {
  return (
    <Box bg="brand.lightBlue" py={2} px={4} textAlign="center">
      <Flex
        justify="center"
        align="center"
        maxW="container.xl"
        mx="auto"
        fontSize={{ base: "xs", md: "sm" }}
      >
        <Text>
          Accelerate your teams work with Atlassian Intelligence (AI) features
          🤖 now available for all Premium and Enterprise!{" "}
          <Link color="brand.blue" fontWeight="medium" href="#">
            Learn more.
          </Link>
        </Text>
      </Flex>
    </Box>
  );
}
