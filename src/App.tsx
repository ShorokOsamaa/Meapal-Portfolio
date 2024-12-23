import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/shared/Header';
import HomePage from './Components/Home/HomePage';
import PrivacyPolicyPage from './Components/Policy/PrivacyPolicyPage';
import OurVisionPage from './Components/Vision/OurVisionPage';
import VerbatimVisionPage from './Components/Vision/VerbatimVisionPage';
import JobsPage from './Components/Jobs/Jobs';
import TermsAndConditionsPage from './Components/Policy/TermsAndConditionsPage';
import OurOffersPage from './Components/Offers/OurOffersPage';
import Development from './Components/Development/Development';
import ImgSlider from './Components/Slider/ImgSlider';

import 'bootstrap/dist/css/bootstrap.min.css';

// @ts-ignore
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/our-vision" element={<OurVisionPage />} />
          <Route path="/our-offers" element={<OurOffersPage />} />
          <Route path="/verbatim-vision" element={<VerbatimVisionPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/development" element={<Development />} />
          <Route path="/slider" element={<ImgSlider />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditionsPage />}
          />
          {/* Put New Components Here */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
