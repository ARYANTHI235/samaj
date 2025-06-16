import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './page/Home';
import Footer from './components/Footer';
import AboutUsPage from './page/AboutUsPage';
import './i18n/i18n';
import ExecutiveCommittee from './page/ExecutiveCommittee';
import MembersExecutiveCommittee from './page/MembersExecutiveCommittee';
import Trustees from './components/Trustees';
import GovernmentSchemeGuidance from './components/GovernmentSchemeGuidance';
import SkillDevelopmentCenterPage from './page/SkillDevelopmentCenterPage';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='aboutus' element={<AboutUsPage />} />
      <Route path='/officers-of-the-executive-committee' element={<ExecutiveCommittee />} />
      <Route path='/members-of-the-executive-committee' element={<MembersExecutiveCommittee />} />
      <Route path='/trustees' element={<Trustees />} />
      <Route path='/government-scheme-guidance-centre' element={<GovernmentSchemeGuidance />} />
      <Route path='/skill-development-centre' element={<SkillDevelopmentCenterPage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
