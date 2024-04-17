import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ReviewDetail from "./pages/ReviewDetail.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/review/:id" element={<ReviewDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
