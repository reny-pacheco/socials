import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import ProfilePic from '@/public/images/profile.png';
import { NextPage } from 'next';

type IProfile = {
  name: string;
  bio: string;
  image: string;
};

const Profile: NextPage<IProfile> = ({ bio, name, image }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src={ProfilePic}
          alt={name}
          width="130"
          height="130"
          style={{
            borderRadius: '50%',
            marginTop: '-65px',
            border: '3px solid #05445E',
          }}
        />
      </Box>
      <Typography
        textAlign="center"
        mt={2}
        variant="h5"
        color="#05445E"
        fontWeight="bold"
      >
        {name}
      </Typography>
      <Typography
        px={{ sm: 4 }}
        textAlign="center"
        mt={2}
        variant="body1"
        color="#189AB4"
      >
        {bio}
      </Typography>
    </>
  );
};

export default Profile;
