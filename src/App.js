import './App.css';
import ProductPage from './components/ProductPage';
import IndividualPage from './components/IndividualPage';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>BuiltIn app</h1>
      <Routes>
        <Route exact path='/' element={<ProductPage />} />
        <Route exact path='/products/:id' element={<IndividualPage />} />
      </Routes>
    </div>
  );
}

export default App;
