import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { Navigate, Route, Routes } from "react-router-dom";

import AnimeList from "./components/layout/AnimeList/AnimeList";
import AnimeDetails from "./components/layout/AnimeDetails/AnimeDetails";
import NotFound from "./components/layout/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/anime" />} />
          <Route path="/anime" element={<AnimeList />}></Route>
          <Route path="/anime/:animeId" element={<AnimeDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
