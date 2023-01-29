import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { NextPage } from 'next';
import Link from 'next/link';
import CustomIcon from './CustomIcon';

type ISocial = {
  name: string;
  link: string;
};

const Social: NextPage<ISocial> = ({ name, link }) => {
  return (
    <Link href={link} style={{ textDecoration: 'none' }} target="_blank">
      <Box
        sx={{
          color: '#05445E',
          width: {
            xs: 100,
            sm: 160,
          },
          '&:hover': {
            color: '#189AB4',
          },
        }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        px={2}
        mb={4}
      >
        <CustomIcon
          name={name}
          sx={{
            fontSize: {
              xs: '32px',
              sm: '50px',
            },
          }}
        />
        <Typography variant="body2" fontSize={{ xs: 12, sm: 16 }}>
          {name}
        </Typography>
      </Box>
    </Link>
  );
};

export default Social;
