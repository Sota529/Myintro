import { NextPage } from "next";
import { Heading, Text } from "@chakra-ui/layout";
import { Layout } from "../../components/Layout";

const Id: NextPage = ({ post }: any) => {
  return (
    <Layout>
      <Heading as="h1" fontSize="32px" textAlign="center" mt="120px">{post.title}</Heading>
      <Text fontSize="24px" mt="24px" >{post.content}</Text>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/posts");
  const posts = await res.json();
  const paths = posts.map((post: any) => ({
    params: { id: post.id },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  const res = await fetch(`http://localhost:4000/posts/${params.id}`);
  const post = await res.json();

  return { props: { post } };
}

export default Id;
