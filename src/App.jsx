import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ReviewDetail from "./pages/ReviewDetail.jsx";
import { Box, Flex, Text } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Flex direction="column" align="center" justify="center" p={4}>
        <Box p={4}>
          <Link to="/">
            <Text fontSize="2xl">Home</Text>
          </Link>
        </Box>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/review/:id" element={<ReviewDetail />} />
        </Routes>
      </Flex>
    </Router>
  );
}

export default App;
