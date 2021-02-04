import NextLink from 'next/link';

import { GetServerSideProps, NextPage } from 'next';
import fetch from 'node-fetch';
import ErrorPage from 'next/error';

type Data = {
  id: string;
  name: string;
  email: string;
};

const UserPage: NextPage<{ data: Data }> = (props) => {
  if (!props.data) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <h1>User</h1>
      <div>
        <div>UserID</div>
        <div>{props.data.id}</div>

        <div>Name</div>
        <div>{props.data.name}</div>

        <div>Email</div>
        <div>{props.data.email}</div>
      </div>
      <NextLink href="/">
        <div>Go back home</div>
      </NextLink>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}) => {
  try {
    const { id } = params;
    const result = await fetch(`http://localhost:3000/api/user/${id}`);
    const data: Data = await result.json();

    return {
      props: { data },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default UserPage;
