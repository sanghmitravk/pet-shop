import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import AddPet from './pages/AddPet';
import SellPet from './pages/SellPet';
import Customers from './pages/Customers';
import SalesHistory from './pages/SalesHistory';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-pet" element={<AddPet />} />
            <Route path="/sell-pet" element={<SellPet />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/sales-history" element={<SalesHistory />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
