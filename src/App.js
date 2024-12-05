import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Step from "./components/Step";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/onboarding/step1" element={<Step
              header={"Welcome to Glam!"}
              embedUrl={"https://cdn.getglam.app/content/paywalls/240515_web2web_video1_v04.mp4"}
              nextPath={"/onboarding/step2"}
          />} />
            <Route path="/onboarding/step2" element={<Step
                header={"Match your Aesthetic"}
                embedUrl={"https://cdn.getglam.app/content/paywalls/240515_web2web_video2_v01.mp4"}
                nextPath={"/onboarding/step3"}
            />} />
            <Route path="/onboarding/step3" element={<Step
                header={"Explore 100+ Styles"}
                embedUrl={"https://cdn.getglam.app/content/paywalls/240515_web2web_video3_v01.mp4"}
                nextPath={"/"}
            />} />
        </Routes>
      </Router>
  );
};

export default App;
