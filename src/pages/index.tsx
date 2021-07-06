import { NextPage } from "next";
import { Layout } from "../components/layout";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Twitter } from "../Icon/twitter";
import { Github } from "../Icon/github";
import { Wantedly } from "../Icon/wantedly";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Header />
        <Heading textAlign="center" fontSize="32px" mt="16px">
          自己紹介
        </Heading>
        <Box
          shadow="md"
          mt="23px"
          borderRadius="md"
          h={{ sm: "200px" }}
          display={{ sm: "flex" }}
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
        >
          <Image
            src="./intro.jpg"
            alt="自己紹介の写真"
            objectFit="cover"
            display="inline-block"
            borderLeftRadius="md"
            w={{ sm: "240px" }}
          />
          <Box fontWeight="semibold" p="0.25em" ml="10px">
            <Text fontSize="20px" m="1em 0 0.5em">
              名前：廣瀬颯太（ひろせそうた）
            </Text>
            <Text>大学：静岡大学工学部23卒</Text>
            <Text pt="0.1em">趣味：プログラミング・サッカー</Text>
            <Box mt="8px">
              <Text
                fontWeight="bold"
                color="white"
                bg="green.300"
                as="span"
                p="0.5"
                borderRadius="md"
                shadow="sm"
              >
                SNS
              </Text>
              <br />
              <Box mt="8px">
                <Twitter />
                <Github />
                <Wantedly/>
              </Box>
            </Box>
          </Box>
        </Box>
      </Layout>
      <Footer />
    </>
  );
};

export default Home;
