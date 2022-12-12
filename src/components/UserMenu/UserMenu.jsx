import Box from "components/Box/Box";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { Button } from "shared/Button/Button.styles";
import { UserName } from "./UserMenu.styles";


export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  
  const handleLogOut = () => dispatch(logOut())

  return (
    <Box
      display='flex'
      alignItems='center'
      gridGap={4}>
          <UserName>Welcome, {user.name}</UserName>
          <Button type="button" onClick={handleLogOut}>Logout</Button>
    </Box>
  )
}
