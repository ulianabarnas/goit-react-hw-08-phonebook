import AuthNav from "components/AuthNav/AuthNav";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import { useAuth } from "hooks/useAuth";
import { Header } from "./AppBar.styles";


export default function AppBar() {
    const { isLogged } = useAuth();
  return (
    <Header>
          <Navigation />
          {isLogged ? <UserMenu/> : <AuthNav/>}
    </Header>
  )
}
