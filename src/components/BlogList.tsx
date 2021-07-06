import { List } from "@chakra-ui/react";
import { VFC } from "react";
import { BlogListItem } from "./BlogListItem";

export const BlogList: VFC = (props: any) => {
  return (
    <List spacing="1.2em">
      {props.posts.map((post: any) => {
        return <BlogListItem {...post} key={post.id} />;
      })}
    </List>
  );
};
