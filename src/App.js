import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Header from "./cmp/header/Header";
import Homepage from "./cmp/Homepage/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css/animate.min.css";

const App = () => {
  const design = (
    <>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route exact path="/" element={<Homepage />}></Route>
            <Route exact path="/blog" element={<h1>welcome to blog page</h1>}></Route>
            <Route exact path="/software engineer" element={<h1>welcome to  se</h1>}></Route>
            <Route exact path="/web development" element={<h1>welcome to wd</h1>}></Route>
            <Route exact path="/robotics" element={<h1>welcome to robotics page</h1>}></Route>
            <Route exact path="/contact us" element={<h1>welcome to contact-us page</h1>}></Route>

          </Routes>
        </div>
      </Router>
    </>
  );
  return design;
}
export default App;
