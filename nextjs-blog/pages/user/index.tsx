import NextLink from 'next/link';
import { NextPage, GetStaticProps } from 'next';

const UserIndexPage: NextPage<{
  users: { id: string | number; name: string; email: string }[];
}> = (props) => {
  return (
    <div>
      <h1>Users</h1>
      {props.users.map((item) => {
        return (
          <NextLink
            as={`user/${item.id}`}
            href={`/user/[slug]`}
            passHref
            key={`/user/${item.id}`}
          >
            <h2>{item.name}</h2>
          </NextLink>
        );
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const users = (await import('../../lib/data.json')).default;
  return {
    props: { users },
  };
};

export default UserIndexPage;
