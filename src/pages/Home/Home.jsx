import Box from 'components/Box/Box';
import { Title } from './Home.styles';

export default function Home() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="calc(100vh - 50px)"
    >
      <Title>
        Contact manager welcome page
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>
    </Box>
  );
}
