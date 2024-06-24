import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './pages/AllProducts';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllProducts/>}/>
      <Route path="/:id" element={<SingleProduct/>}/>
    </Routes>
  );
}

export default App;
