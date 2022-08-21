import { Route, Routes } from "react-router-dom";
import BookList from "./Pages/BookList";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookList />} />
    </Routes>
  );
}

export default App;
