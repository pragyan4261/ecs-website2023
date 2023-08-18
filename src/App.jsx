import './App.css';
import Home from './Pages/Home'
import Feed from './Pages/Feed'
import Members from './Pages/Members'
import Developers from './Pages/Developers'
import ResourceHub from './Pages/ResourceHub'
import About from './Pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/" exact element = {<Home />}/>
        <Route path ="/feed" element = {<Feed />}/>
        <Route path ="/members" element = {<Members />}/>
        <Route path ="/developers" element = {<Developers />}/>
        <Route path ="/resourcehub" element = {<ResourceHub/>}/>
        <Route path ="/about" element = {<About />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
