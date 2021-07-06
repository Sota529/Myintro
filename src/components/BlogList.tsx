import { List, Text } from "@chakra-ui/react";
import { VFC } from "react";
import { BlogListItem } from "./BlogListItem";

export const BlogList: VFC = () => {
  return (
    <List spacing="1.2em">
      <BlogListItem />
    </List>
  );
};
