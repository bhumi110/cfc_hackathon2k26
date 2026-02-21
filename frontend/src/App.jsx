import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MembersPage from "./pages/MembersPage";


function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<MembersPage />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
