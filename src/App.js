/* eslint-disable jsx-a11y/alt-text */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import ProductsServicesPage from './Pages/ProductsServicesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products-and-services"
          element={<ProductsServicesPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
