import { extendTheme } from '@chakra-ui/react';

const colors = {
  trello: {
    blue: {
      50: '#E6F0FF',
      100: '#CCE0FF',
      200: '#99C2FF',
      300: '#66A3FF',
      400: '#3385FF',
      500: '#0052CC', // Primary blue
      600: '#0047B3',
      700: '#003D99',
      800: '#003380',
      900: '#002966',
    },
    green: {
      500: '#5AAC44', // Primary green/accent
    },
    neutral: {
      50: '#F8F9F9',
      100: '#F1F2F4',
      200: '#E4E6EA',
      300: '#D6D9E0',
      400: '#C1C7D0',
      500: '#97A0AF',
      600: '#6B778C',
      700: '#42526E',
      800: '#253858',
      900: '#172B4D',
    },
  },
};

const fonts = {
  heading: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
};

const components = {
  Button: {
    variants: {
      primary: {
        bg: 'trello.blue.500',
        color: 'white',
        _hover: {
          bg: 'trello.blue.600',
          _disabled: {
            bg: 'trello.blue.500',
          },
        },
        fontWeight: 'bold',
      },
      secondary: {
        bg: 'white',
        color: 'trello.blue.500',
        border: '1px solid',
        borderColor: 'trello.blue.500',
        _hover: {
          bg: 'trello.blue.50',
        },
        fontWeight: 'bold',
      },
      accent: {
        bg: 'trello.green.500',
        color: 'white',
        _hover: {
          bg: 'green.600',
          _disabled: {
            bg: 'trello.green.500',
          },
        },
        fontWeight: 'bold',
      },
    },
  },
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: 'none',
      },
    },
  },
};

export const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
  components,
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'trello.neutral.900',
      },
    },
  },
});