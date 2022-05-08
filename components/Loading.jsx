import { Box, Spinner, useColorModeValue } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Box
      px={4}
      h="90vh"
      w="100vw"
      py={6}
      borderRadius="lg"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
};
