import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import { useAuth } from 'hooks/useAuth';

import Box from 'components/UI/Box/Box';
import { Button } from 'components/UI/Button/Button.styles';
import { UserName } from './UserMenu.styles';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Box display="flex" alignItems="center" gridGap={4}>
      <UserName>Welcome, {user.name}</UserName>
      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </Box>
  );
}
