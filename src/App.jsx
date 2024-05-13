import "./App.css";

// Home component 
import Home from "./Home";

// Routing 
import { Routes, Route } from "react-router-dom";

// Loads the home page 
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
