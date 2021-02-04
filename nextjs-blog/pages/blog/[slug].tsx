import NextLink from 'next/link';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';

const BlogPage: NextPage<{ title: string; text: string }> = (props) => {
  return (
    <div>
      <NextLink href="/blog" passHref>
        <div>Back to TOC</div>
      </NextLink>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = (await import('../../lib/blogs.json')).default;
  const slugs = blogs.map((blog) => blog.slug);
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const blogs = (await import('../../lib/blogs.json')).default;
  const blog = blogs.find((x) => x.slug === slug);

  return {
    props: {
      title: blog.title,
      text: blog.text,
    },
  };
};

export default BlogPage;
