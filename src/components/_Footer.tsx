import { Box } from "@chakra-ui/react";
import { VFC } from "react";

export const Footer: VFC = () => {
  return (
    <Box
      h="200px"
      bg="gray.200"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <footer>
        <small lang="en">©2021 Sota Hirose All Rights Reserved</small>
      </footer>
    </Box>
  );
};
