import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import UploadMeal from './pages/UploadMeal';
import MealHistory from './pages/MealHistory';
import Reports from './pages/Reports';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto mt-4 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<UploadMeal />} />
            <Route path="/history" element={<MealHistory />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;