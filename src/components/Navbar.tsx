import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Link,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from '@chakra-ui/react';
import { Menu as MenuIcon, X, ChevronDown } from 'lucide-react';

const NavDropdown = ({ title, items }: { title: string; items: { label: string; description?: string }[] }) => (
  <Menu>
    <MenuButton
      as={Button}
      rightIcon={<ChevronDown size={16} />}
      variant="ghost"
      fontWeight="medium"
      px={2}
      _hover={{
        color: 'trello.blue.500',
      }}
    >
      {title}
    </MenuButton>
    <MenuList
      py={4}
      minW="320px"
      borderRadius="lg"
      boxShadow="xl"
      border="1px solid"
      borderColor="gray.100"
    >
      {items.map((item, index) => (
        <MenuItem
          key={index}
          py={3}
          px={4}
          _hover={{
            bg: 'trello.blue.50',
          }}
        >
          <Box>
            <Text fontWeight="medium" color="trello.neutral.900">
              {item.label}
            </Text>
            {item.description && (
              <Text fontSize="sm" color="trello.neutral.600" mt={1}>
                {item.description}
              </Text>
            )}
          </Box>
        </MenuItem>
      ))}
    </MenuList>
  </Menu>
);

const navItems = {
  features: [
    { label: 'Views', description: 'View your team\'s projects from every angle' },
    { label: 'Automation', description: 'Automate tasks and workflows with Butler' },
    { label: 'Power-Ups', description: 'Power up your teams by adding apps and integrations' },
    { label: 'Templates', description: 'Give your team a blueprint for success' },
  ],
  solutions: [
    { label: 'Marketing Teams', description: 'Hit deadlines every time' },
    { label: 'Product Management', description: 'Build the right products, the right way' },
    { label: 'Engineering Teams', description: 'Ship better code, faster' },
    { label: 'Design Teams', description: 'Design, collaborate, and deliver better' },
  ],
  plans: [
    { label: 'Standard', description: 'For small teams that need to manage work and scale collaboration' },
    { label: 'Premium', description: 'Best for teams that need to track multiple projects and visualize work' },
    { label: 'Enterprise', description: 'For organizations that need enterprise-grade security and controls' },
  ],
  resources: [
    { label: 'Trello Guide', description: 'Our easy guide to using Trello' },
    { label: 'Remote Work Guide', description: 'Work from anywhere with Trello' },
    { label: 'Webinars', description: 'Learn from Trello experts' },
    { label: 'Customer Stories', description: 'See how teams use Trello' },
  ],
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      width="full"
      zIndex="1000"
      transition="background-color 0.3s ease"
      bg={scrolled ? 'white' : 'transparent'}
      boxShadow={scrolled ? 'sm' : 'none'}
    >
      <Container maxW="container.xl" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Link href="#" _hover={{ textDecoration: 'none' }}>
                <Flex alignItems="center">
                  <Box color="trello.blue.500" fontWeight="bold" fontSize="2xl">
                    Trello
                  </Box>
                </Flex>
              </Link>
            </Box>
            <HStack as={'nav'} spacing={1} display={{ base: 'none', md: 'flex' }}>
              <NavDropdown title="Features" items={navItems.features} />
              <NavDropdown title="Solutions" items={navItems.solutions} />
              <NavDropdown title="Plans" items={navItems.plans} />
              <NavDropdown title="Resources" items={navItems.resources} />
              <NavLink>Pricing</NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <HStack spacing={2} display={{ base: 'none', md: 'flex' }}>
              <Button variant="secondary" size="md">
                Log in
              </Button>
              <Button
                variant="accent"
                size="md"
                px={6}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'md',
                }}
                transition="all 0.2s"
              >
                Get Trello for free
              </Button>
            </HStack>
            <IconButton
              size={'md'}
              icon={isOpen ? <X /> : <MenuIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
              ml={2}
            />
          </Flex>
        </Flex>
      </Container>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start" mt={4}>
              {Object.entries(navItems).map(([key, items]) => (
                <Box key={key} w="full">
                  <Text fontWeight="bold" mb={2} color="trello.neutral.700" textTransform="capitalize">
                    {key}
                  </Text>
                  <VStack align="start" spacing={3} pl={2}>
                    {items.map((item, index) => (
                      <Link key={index} fontSize="sm" color="trello.neutral.600" _hover={{ color: 'trello.blue.500' }}>
                        {item.label}
                      </Link>
                    ))}
                  </VStack>
                </Box>
              ))}
              <Button variant="secondary" size="md" width="full">
                Log in
              </Button>
              <Button variant="accent" size="md" width="full">
                Get Trello for free
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

const NavLink = ({ children, href = '#' }: { children: React.ReactNode; href?: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      color: 'trello.blue.500',
    }}
    href={href}
    fontWeight="medium"
  >
    {children}
  </Link>
);