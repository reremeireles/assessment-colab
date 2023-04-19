import { Header } from "./components/Header";
import { ListUsers } from "./components/ListUsers";
import { UserProvider } from "./context/UserContext";
import { GlobalStyle } from "./styles/global";

function App() {

  return (
    <UserProvider>
      <GlobalStyle />
      <Header />
      <ListUsers />
    </UserProvider>
  )
}

export default App
