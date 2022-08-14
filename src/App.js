import { Route, BrowserRouter, Routes } from "react-router-dom";
import Aliens from "./components/Aliens";
import Humans from "./components/Humans";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/aliens" element={<Aliens />}/>
        <Route path="/humans" element={<Humans />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
