import { Routes , Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/404";

const App = () => {














  return (
    <div>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup />} />
    <Route path="*" element={<NotFound />} />
    
  </Routes>
      
    </div>
  );
};

export default App;


//this is the routes of the pages(idk why i am writing this comment)