import { Route, BrowserRouter, Routes } from "react-router-dom";
import Aliens from "./components/Aliens";
import Humans from "./components/Humans";
import Navbar from "./components/Navbar";
import { useState } from 'react'


function App() {
  const [query, setQuery] = useState("")

  const handleSearch = (e) => {
    setQuery(e.target.value)
  }

  return (
    <BrowserRouter>
      <Navbar query={query} handleSearch={handleSearch} />
      <Routes>
        <Route path="/aliens" element={<Aliens query={query} handleSearch={handleSearch} />}/>
        <Route path="/humans" element={<Humans query={query} handleSearch={handleSearch} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
