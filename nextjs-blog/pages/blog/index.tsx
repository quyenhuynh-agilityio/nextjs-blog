import NextLink from 'next/link';
import { NextPage, GetStaticProps } from 'next';

const BlogIndexPage: NextPage<{
  blogs: { slug: string; title: string; text: string }[];
}> = (props) => {
  return (
    <div>
      <h1> Table of contents</h1>
      {props.blogs.map((item) => {
        return (
          <NextLink
            as={`blog/${item.slug}`}
            href={`/blog/[slug]`}
            passHref
            key={`/blog/${item.slug}`}
          >
            <h2>{item.title}</h2>
          </NextLink>
        );
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogs = (await import('../../lib/blogs.json')).default;
  return {
    props: { blogs },
  };
};

export default BlogIndexPage;
