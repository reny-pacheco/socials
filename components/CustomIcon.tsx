import { NextPage } from 'next';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';

const Icons: Record<string, any> = {
  github: GitHubIcon,
  facebook: FacebookIcon,
  youtube: YouTubeIcon,
  linkedIn: LinkedInIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  portfolio: LanguageIcon,
};

const CustomIcon: NextPage<any> = ({ name, ...props }) => {
  const Icon: any = Icons[name];
  return <Icon {...props} />;
};

export default CustomIcon;
