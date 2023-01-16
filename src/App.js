import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import '404-page/dist/index.css'
import {LostPage} from '404-page'
import Login2 from "./Pages/Login2";
import {Provider} from "react-redux"
import {store} from "./redux/store"



function App() {
  return (
    <div className="App">
      <Provider store={store}>
    <Router>
    
       <Routes>
        <Route path="/login" element={<Login2 />}   />
        <Route path="/signup" element={<Signup />}   />
        <Route path="/" element={<Home />}   />
        <Route path="*" element={<LostPage />}   />
       </Routes>
      
    </Router>
    </Provider>
    </div>
  );
}

export default App;
