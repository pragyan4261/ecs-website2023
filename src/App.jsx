import './App.css';
import Home from './Pages/Home'
import Feed from './Pages/Feed'
import Members from './Pages/Members'
import Developers from './Pages/Developers'
import ResourceHub from './Pages/ResourceHub'
import About from './Pages/About'
import Events from './Pages/Events'
import FAQ from './components/FAQ'
import Notes from "./components/Notes"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/members" element={<Members />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/resourcehub" element={<ResourceHub />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/notes/First" element={<Notes sem='First' />} />
          <Route path="/notes/Second" element={<Notes sem='Second' />} />
          <Route path="/notes/Third" element={<Notes sem='Third' />} />
          <Route path="/notes/Fourth" element={<Notes sem='Fourth' />} />
          <Route path="/notes/Fifth" element={<Notes sem='Fifth' />} />
          <Route path="/notes/Sixth" element={<Notes sem='Sixth' />} />
          <Route path="/notes/Seventh" element={<Notes sem='Seventh' />} />
          <Route path="/notes/Eighth" element={<Notes sem='Eighth' />} />
          <Route path="/notes/:sem" component={Notes} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
