import { NextPage } from "next";
import { Heading, Badge, Box } from "@chakra-ui/layout";
import { Footer } from "../../components/Footer";
import { Layout } from "../../components/Layout";
import styles from "../../../style/id.module.scss";

const Id: NextPage = ({ post }: any) => {
  const createday = post.createdAt.slice(0, 10);
  const updateday = post.updatedAt.slice(0, 10);
  const createMarkup = () => {
    return { __html: post.content };
  };
  return (
    <>
      <Layout>
        <Heading as="h1" fontSize="32px" textAlign="center" mt="120px">
          {post.title}
        </Heading>
        <Box mt="16px">
          <Badge colorScheme="green">{`作成日 ${createday}`}</Badge>
          <Badge colorScheme="blue" ml="2px">
            {`${updateday}更新`}
          </Badge>
        </Box>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={createMarkup()}
        ></div>
      </Layout>
      <Footer />
    </>
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
