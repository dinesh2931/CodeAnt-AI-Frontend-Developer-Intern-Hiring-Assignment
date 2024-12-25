import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          {/* Add your routes here */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
