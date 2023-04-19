import './App.css';
import Meme from './Meme/Meme';
import MemeGenerated from './MemeGenerated/MemeGenerated';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Create Meme</h1>
      <Routes>
        <Route exact path='/' element={<Meme />} />
        <Route path='/generated' element={<MemeGenerated />} />
      </Routes>
    </div>
  );
}

export default App;
