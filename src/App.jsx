import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Search from "./pages/search";
import "./scss/app.scss";
//ICONS for titles

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search/:keyword" element={<Search />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
