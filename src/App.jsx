import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Pages/Detail";
import Movie from "./Pages/Movie";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/tv/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

