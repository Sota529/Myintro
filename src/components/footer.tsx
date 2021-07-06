import { Box } from "@chakra-ui/react";
import { VFC } from "react";

export const Footer: VFC = () => {
  return (
    <Box h="100px" bg="gray.200">
      <footer>
        <small lang="en">@ 2021</small>
      </footer>
    </Box>
  );
};
