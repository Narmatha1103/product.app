import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Error from "./Components/Error";
import MainPage from "./Components/MainPage";
import Logout from "./Components/Logout";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
          <Route path="/signup" element={<MainPage />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
