import { Header } from "./components/Header";
import { UserProvider } from "./context/UserContext";
import { GlobalStyle } from "./styles/global";

function App() {

  return (
    <UserProvider>
      <GlobalStyle />
      <Header />
    </UserProvider>
  )
}

export default App
