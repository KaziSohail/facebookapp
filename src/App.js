import Home from "./pages/home/Home";
import{Routes,Route} from 'react-router-dom';
import Login from "./components/login/Login";
import Profile from "./components/Profile/Profile";
import CloseFriend from "./components/closeFriend/CloseFriend";
import Feed from "./components/feed/Feed";
import Register from "./components/register/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="closeFriend" element={<CloseFriend/>}/>
      <Route path="feed" element={<Feed/>}/>
      <Route path="register" element={<Register/>}/>
      

    </Routes>
  );
}

export default App;
