import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MyContainer from "./components/MyContainer";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MyContainer />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
