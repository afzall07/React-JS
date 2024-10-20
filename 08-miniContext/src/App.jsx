import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextprovider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextprovider>
      <Login />
      <Profile />
    </UserContextprovider>
  );
}

export default App;
