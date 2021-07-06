import { NextPage } from "next";
import { Heading, Text } from "@chakra-ui/layout";
import { Layout } from "../../components/Layout";

const Id: NextPage = ({ post }: any) => {
  return (
    <Layout>
      <Heading as="h1" fontSize="32px" textAlign="center" mt="120px">
        {post.title}
      </Heading>
      <Text fontSize="24px" mt="24px">
        {post.content}
      </Text>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://sotan.microcms.io/api/v1/posts", {
    headers: {
      "X-API-KEY": "8ed0d579-a537-476c-88be-f7fefbaf7591",
    },
  });
  const posts = await res.json();
  const paths = posts.contents.map((post: any) => ({
    params: { id: post.id },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `https://sotan.microcms.io/api/v1/posts/${params.id}`,
    {
      headers: {
        "X-API-KEY": "8ed0d579-a537-476c-88be-f7fefbaf7591",
      },
    }
  );
  const post = await res.json();

  return { props: { post } };
}

export default Id;
