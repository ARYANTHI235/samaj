import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './page/Home';
import Footer from './components/Footer';
import AboutUsPage from './page/AboutUsPage';
import './i18n/i18n';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='aboutus' element={<AboutUsPage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
