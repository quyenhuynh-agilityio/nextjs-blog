import NextLink from 'next/link';
import Router from 'next/router';
import { GetServerSideProps, NextPage } from 'next';
import auth0 from '../lib/auth0';

const SecretPage: NextPage<{ username?: string; error?: string }> = (props) => {
  return (
    <div>
      <NextLink href="/">Home</NextLink>
      <h2>
        {props.error ? 'You are not logged in' : 'Welcome'}
        <p>{props.error ?? props.username}</p>
        <button
          onClick={() =>
            Router.push(props.error ? `/api/login` : `/api/logout`)
          }
        >
          {props.error ? 'Log in' : 'Log out'}
        </button>
      </h2>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const { user } = await auth0.getSession(req);
    return {
      props: {
        username: user.name,
      },
    };
  } catch (error) {
    return {
      props: { error: error.message },
    };
  }
};

export default SecretPage;
