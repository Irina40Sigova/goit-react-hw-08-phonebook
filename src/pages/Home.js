import { EditIcon } from '@chakra-ui/icons';
import { Box, Center, Text } from '@chakra-ui/react';
export default function Home() {
  return (
    <Box h="100vh">
      <Center>
        <Text fontSize="60px" color="blue" as="cite" mt="350px">
          Welcome to your Phonebook
        </Text>
        <EditIcon fontSize="60px" color="blue" ml="20px" mt="350px" />
      </Center>
    </Box>
  );
}
