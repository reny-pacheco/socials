import Head from 'next/head';
import Profile from '@/components/Profile';
import { Box } from '@mui/material';
import Tags from '@/components/Tags';
import SocialList from '@/components/SocialList';
import Footer from '@/components/Footer';
import users from '@/db/users.json';

type Params = {
  params: {
    username: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const username = params.username;
  const user = users.filter((user) => user.username === username);

  return {
    props: {
      user: user[0],
    },
  };
}

export async function getStaticPaths() {
  const paths = users.map((user) => ({
    params: {
      username: user.username,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

const User = ({ user }: any) => {
  return (
    <Box
      sx={{
        background: '#e4e5f1',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Head>
          <title>{user.name}</title>
          <meta name={user.name} content={`Social links by ${user.name}`} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box
          sx={{
            width: {
              xs: '100vw',
              sm: 800,
            },
            backgroundColor: 'rgba(255, 255, 255, .85)',
            borderRadius: 2,
            boxShadow: 'rgb(5, 68, 94, .2) 0px 2px 30px 3px',
          }}
          mt={{ xs: 12, sm: 20 }}
          mx={1}
        >
          <Profile name={user.name} bio={user.bio} image={user.image} />
          <Tags tags={user.tags} />
          <SocialList socials={user.socials} />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default User;
