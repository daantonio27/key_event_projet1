import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import {
  MdMenuOpen,
  MdNotificationImportant,
  MdAccountBox,
  MdMessage,
} from "react-icons/md";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Evenement from "./pages/Evenement";

function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <Router>
        <div className="App">
          <header>
            <MdMenuOpen onClick={() => setShowNav(!showNav)} />
            KEY EVENT {""}
            <MdMessage size="1.9rem" style={{ float: "right" }} />
            <MdNotificationImportant size="1.9rem" style={{ float: "right" }} />
            <MdAccountBox size="1.9rem" style={{ float: "right" }} />
          </header>
          <NavBar show={showNav} />
          <div className="min">
            <Route path="/" exact={true} component={Evenement} />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
