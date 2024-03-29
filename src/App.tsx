import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { Navigate, Route, Routes } from "react-router-dom";

import AnimeList from "./pages/AnimeList/AnimeList";
import AnimeDetails from "./pages/AnimeDetails/AnimeDetails";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/anime" />} />
        <Route path="/anime" element={<AnimeList />}></Route>
        <Route path="/anime/:animeName" element={<AnimeDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
