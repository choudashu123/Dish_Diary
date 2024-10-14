import CreateListing from "./components/pages/create-listing/CreateListing";
import Home from "./components/pages/homepage/Home";
import Details from "./components/pages/listingdetail/Details";
import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/detail/:id" element={<Details />}></Route>
          <Route exact path="/create" element={<CreateListing />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
