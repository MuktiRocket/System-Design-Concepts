import About from "./components/About";
import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./components/Team";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("en");

  return (
    <div>
      <header className="text-2xl font-bold py-5 bg-black text-white text-center">
        Hello World
        <nav className="px-20 m-2 w-[1200px] flex justify-between text-lg">
          <a href="/">Home </a>
          <a href="/about">About </a>
          <a href="/team">Team </a>
          <a href="/login">Login </a>
        </nav>
        <select
          className="bg-gray-500 rounded-md p-1 text-sm"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
        </select>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About lang={lang} />} />
          </Route>
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
