import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';


function App() {
  
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/movie/:id' element={<MoviePage/>}></Route>
    </Routes>
  );
}

export default App;