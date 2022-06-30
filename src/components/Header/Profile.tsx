import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lincoln Dias Marques</Text>
          <Text color="gray.300" fontSize="small">
            licodmarques@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Lincoln Dias Marques"
        src="https://github.com/lindias.png"
      ></Avatar>
    </Flex>
  );
}
