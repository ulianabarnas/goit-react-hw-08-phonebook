import Box from "components/Box/Box";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
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
          <button type="button" onClick={handleLogOut}>Logout</button>
    </Box>
  )
}
