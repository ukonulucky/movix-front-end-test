import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import '404-page/dist/index.css'
import {LostPage} from '404-page'


function App() {
  return (
    <div className="App">
    <Router>
    
       <Routes>
        <Route path="/login" element={<Login />}   />
        <Route path="/signup" element={<Signup />}   />
        <Route path="/" element={<Home />}   />
        <Route path="*" element={<LostPage />}   />
       </Routes>
      
    </Router>
    </div>
  );
}

export default App;
