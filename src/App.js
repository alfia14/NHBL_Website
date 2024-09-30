import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';  // Import your homepage component
import SignUpPage from './components/SignUpPage';  // Import your sign-up page component
import { ChakraProvider } from '@chakra-ui/react';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          {/* Use element instead of component */}
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
