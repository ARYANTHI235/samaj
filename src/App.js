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
import ReadingPage from './page/ReadingPage';
import UpscGpscPage from './page/UpscGpscPage';
import EducationFundPage from './page/EducationFundPage';
import OccasionalBuildingFacilitiesPage from './page/OccasionalBuildingFacilitiesPage';
import NewsAndArticlesPage from './page/NewsAndArticlesPage';
import EventsPage from './page/EventsPage';
import PastEventsPage from './page/PastEventsPage';
import GalleryPage from './page/GalleryPage';
import ContactPage from './page/ContactPage';
import Login from './page/Login';

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
      <Route path='/reading-room' element={<ReadingPage />} />
      <Route path='/upsc-gpsc-training-centre' element={<UpscGpscPage />} />
      <Route path='/education-fund' element={<EducationFundPage />} />
      <Route path='/occasional-building-facilities' element={<OccasionalBuildingFacilitiesPage />} />
      <Route path='/news-articles' element={<NewsAndArticlesPage />} />
      <Route path='/events' element={<EventsPage />} />
      <Route path='/events/past-events' element={<PastEventsPage />} />
      <Route path='/gallry' element={<GalleryPage />} />
      <Route path='/contactus' element={<ContactPage />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
