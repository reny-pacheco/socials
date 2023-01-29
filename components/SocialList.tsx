import { NextPage } from 'next';
import Social from './Social';
import Box from '@mui/material/Box';
import { ISocial } from '@/types';

type ISocials = {
  socials: ISocial[];
};

const Socials: NextPage<ISocials> = ({ socials }: any) => {
  const socialLinks = Object.entries(socials);
  return (
    <Box
      mt={8}
      display="flex"
      flexWrap="wrap"
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: {
          xs: '100%',
          sm: '80%',
          md: '70%',
        },
      }}
      mx={{ sm: 'auto' }}
    >
      {socialLinks.map(([name, link]: any) => {
        return <Social key={name} name={name} link={link} />;
      })}
    </Box>
  );
};

export default Socials;
