import { Box } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import NotificationBanner from "@/components/NotificationBanner";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <Box as="main">
      <Navbar />
      <NotificationBanner />
      <HeroSection />
    </Box>
  );
}
