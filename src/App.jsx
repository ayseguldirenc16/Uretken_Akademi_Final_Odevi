import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import About from './components/About/About'
import Space from './components/section/Space'
import Content from './components/content/Content';
import AtikTakip from './components/konum/AtikTakip';

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Space />} />
          <Route path='/AtikTakip' element={<AtikTakip />} />
          <Route path='/About' element={<About />} />
          <Route path='/content' element={<Content />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
