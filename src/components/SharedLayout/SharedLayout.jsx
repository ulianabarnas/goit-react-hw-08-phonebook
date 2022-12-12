import AppBar from 'components/AppBar/AppBar';
import Box from 'components/Box/Box';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'shared/Loader/Loader';

export default function SharedLayout() {
  return (
    <Box
      maxWidth="960px"
      mx="auto"
      my={0}
      px={4}
      py={0}
    >
      <AppBar />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </Box>
  );
}
