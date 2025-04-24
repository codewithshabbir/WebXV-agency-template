import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router";
import Projects from "./Pages/AllProjects/Projects";
import Community from "./Pages/Community/Community";
import About from "./Pages/AboutUs/About";
import MainLayout from "./MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/all-projects" element={<Projects />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about-us" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
