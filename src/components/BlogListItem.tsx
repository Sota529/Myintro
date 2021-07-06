import { ListItem, Box, Heading } from "@chakra-ui/react";
import { VFC } from "react";

export const BlogListItem: VFC = () => {
  return (
    <ListItem>
      <Box
        display="flex"
        boxShadow="md"
        borderRadius="lg"
        h={{ base: "80px", md: "100px" }}
        bg="yellow.100"
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        alignItems="center"
        _hover={{ cursor: "pointer", boxShadow: "none" }}
      >
        <Heading as="h2" size="md" pl="8px" mx="auto">
          ブログ始めました！
        </Heading>
      </Box>
    </ListItem>
  );
};
