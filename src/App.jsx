import "./App.css";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar/Navbar";
import Option from "./pages/Option";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DonorSignIn from "./pages/DonorSignIn";
import NgoSignIn from "./pages/NgoSignIn";

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/option" element={<Option/>}/>
              <Route path="/donorSignin" element={<DonorSignIn/>}/>
              <Route path="/ngoSignin" element={<NgoSignIn/>}/>
          </Routes>
      </Router>
  );
}

export default App;