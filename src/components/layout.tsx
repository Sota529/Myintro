import { Box } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <Box mx="50px" mb="100px">
      {props.children}
    </Box>
  );
};
