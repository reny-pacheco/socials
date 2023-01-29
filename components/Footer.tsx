import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <Box
        px={2}
        py={0.8}
        color=" #189AB4"
        mb={1}
        mt={20}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="body2" fontSize={{ xs: 10, sm: 11 }}>
          Add your social links{' '}
          <Link href="#" style={{ color: ' #189AB4' }}>
            here
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
