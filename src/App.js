import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import SearchLocations from './pages/SearchLocations';
import Homepage from './pages/homepage';
import Savedlocations from'./pages/Savedlocations';

function App() {
  return (
    <div className="App">
  <MainLayout>
     <Routes>
        <Route path="/" element={<Homepage/>}  ></Route>
       <Route path="/SearchLocations" element={<SearchLocations/>} ></Route>
        <Route path="/Savedlocations" element={<Savedlocations/>} ></Route>
     </Routes>
  </MainLayout>
    </div>
  );
}

export default App;