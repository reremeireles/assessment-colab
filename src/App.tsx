import { UserProvider } from "./context/UserContext";
import { GlobalStyle } from "./styles/global";

function App() {

  return (
    <UserProvider>
      <GlobalStyle />
    </UserProvider>
  )
}

export default App
