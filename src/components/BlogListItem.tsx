import { ListItem, Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { VFC } from "react";

export const BlogListItem: VFC = (props: any) => {
  const router = useRouter();
  const handleClick = async (id: string) => {
    router.push(`/blog/${id}`);
  };
  return (
    <ListItem onClick={() => handleClick(props.id)}>
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
          {props.title}
        </Heading>
      </Box>
    </ListItem>
  );
};
