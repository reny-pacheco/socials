import Head from 'next/head';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Box
      sx={{
        height: '100vh',
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Head>
        <title>Social Links</title>
        <meta name="social links" content="Your socials in one Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          width: {
            xs: '100vw',
            sm: 500,
          },
          backgroundColor: 'rgba(255, 255, 255, .15)',
          backdropFilter: 'blur(5px)',
          borderRadius: 2,
        }}
        className="homepage"
      >
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, .45)',
            backdropFilter: 'blur(5px)',
          }}
          px={{ xs: 2 }}
          py={{ xs: 20 }}
        >
          <Typography
            lineHeight={1.5}
            fontSize={{ xs: 30, sm: 45 }}
            variant="h3"
            fontWeight="800"
            color="#05445E"
          >
            Your social{' '}
            <Link
              href="https://my-socials.vercel.app/john-doe"
              className="link"
            >
              links
            </Link>{' '}
            in one page.
          </Typography>
          <Typography
            fontSize={{ sm: 18 }}
            mt={4}
            color="#05445E"
            fontWeight="bold"
          >
            Add your socials{' '}
            <Link
              href="https://github.com/reny-pacheco/socials"
              className="link"
            >
              here.
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
