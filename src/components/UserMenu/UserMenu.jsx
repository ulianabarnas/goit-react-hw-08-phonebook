import Box from "components/Box/Box";
import { useAuth } from "hooks/useAuth";
import { UserName } from "./UserMenu.styles";


export default function UserMenu() {
    const { user } = useAuth();

  return (
    <Box
      display='flex'
      alignItems='center'
      gap='12px'>
          <UserName>Welcome, {user.name}</UserName>
          <button type="button">Logout</button>
    </Box>
  )
}
