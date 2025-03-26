import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Accordion from "./components/Accordion";
import Body from "./components/Body";
import Comments from "./components/comments/Comments";
import ImageSlider from "./components/image-slider/ImageSlider";
import Login from "./components/Login";
import Pagination from "./components/pagination/Pagination";
import ProtectedRoute from "./components/ProtectedRoute";
import Team from "./components/Team";
import LiveChat from "./components/live-chat/LiveChat";
import SearchUI from "./components/search-ui/SearchUI";

function App() {
  const [lang, setLang] = useState("en");

  return (
    <div>
      <header className="text-2xl font-bold py-5 bg-black text-white text-center">
        Hello World
        <nav className="px-20 m-2 w-[1200px] flex justify-between text-lg">
          <a href="/">Home </a>
          <a href="/about">About </a>
          <a href="/accordion">Accordion </a>
          <a href="/comments">Nested Comments</a>
          <a href="/image-slider">Image Slider</a>
          <a href="/pagination">Pagination</a>
          <a href="/live-chat">Live Chat</a>
          <a href="/search">Search</a>
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
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/image-slider" element={<ImageSlider />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/live-chat" element={<LiveChat />} />
          <Route path="/search" element={<SearchUI />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
