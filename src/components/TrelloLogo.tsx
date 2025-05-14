import { Box, BoxProps } from '@chakra-ui/react';
import { TrelloIcon } from 'lucide-react';

interface TrelloLogoProps extends BoxProps {
  size?: number;
}

export default function TrelloLogo({ size = 24, ...rest }: TrelloLogoProps) {
  return (
    <Box display="inline-flex" alignItems="center" {...rest}>
      <TrelloIcon size={size} color="#0052CC" />
    </Box>
  );
}