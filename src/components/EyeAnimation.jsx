import React from 'react';
import { Box, keyframes, usePrefersReducedMotion, Image } from '@chakra-ui/react';

const rollAnimation = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(360deg); }
  100% { transform: rotate(0deg); }
`;

const EyeAnimation = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${rollAnimation} infinite 10s linear`;

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Image src="/images/eye.png" animation={animation} boxSize="150px" />
    </Box>
  );
};

export default EyeAnimation;