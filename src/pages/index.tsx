import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Trello | Manage Your Team's Projects From Anywhere</title>
        <meta name="description" content="Trello clone landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main">
        <Navbar />
        <Hero />
      </Box>
    </>
  );
}