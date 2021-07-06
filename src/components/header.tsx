import { Box, Heading, Button } from "@chakra-ui/react";
import { VFC } from "react";

const headeritem = [
  { id: "intro", value: "自己紹介" },
  { id: "blog", value: "ブログ" },
];
export const Header: VFC = () => {
  return (
    <Box h="80px" display={{ sm: "flex" }} my="auto" alignItems="center">
      <Heading fontSize="36px" textAlign="center" verticalAlign="center">
        SotanIntro
      </Heading>
      <Box
        ml="auto"
        mt={{ base: "0.5em", sm: "0" }}
        textAlign="center"
        display={{base:"none",sm:"initial"}}
      >
        {headeritem.map((item) => {
          return (
            <Button
              key={item.id}
              fontSize="20px"
              bg="white"
              _hover={{ textDecoration: "underline" }}
              _focus={{ border: "none", bg: "none" }}
            >
              {item.value}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};
