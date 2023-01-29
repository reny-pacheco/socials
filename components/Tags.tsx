import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type ITag = {
  tagName: string;
};

const Tag = ({ tagName }: ITag) => {
  return (
    <Typography
      sx={{
        backgroundColor: '#D4F1F4',
        fontSize: {
          xs: 11,
          sm: 12,
        },
      }}
      borderRadius={5}
      px={2}
      py={0.8}
      mx={1}
      mt={1}
      color="#189AB4"
      variant="body2"
    >
      {tagName}
    </Typography>
  );
};

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <Box
      mt={2}
      display="flex"
      flexWrap="wrap"
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      width="100%"
    >
      {tags.map((tag) => (
        <Tag key={tag} tagName={tag} />
      ))}
    </Box>
  );
};

export default Tags;
