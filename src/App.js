import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Home = () => {
  return <h2>Home</h2>
}
const About = () => {
  return <h2>About</h2>
}
const Testing = () => {
  return <h2>Testing</h2>
}

function App() {
  return (
    <div className="App">
      
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/testing">Testing</Link>
              </li>
            </ul>
          </nav>

          <div className="content">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/testing" element={<Testing />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>

        </div>
      </Router>

    </div>
  );
}

export default App;
