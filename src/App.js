import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Step from "./components/Step";
import Dashboard from "./components/Dashboard";

const App = () => {
    const stepsData = [{
        id: 0,
        header: "Welcome to Glam!",
        embedUrl: "https://cdn.getglam.app/content/paywalls/240515_web2web_video1_v04.mp4",
        nextPath: "/onboarding/step2",
    }, {
        id: 1,
        header: "Match your Aesthetic",
        embedUrl: "https://cdn.getglam.app/content/paywalls/240515_web2web_video2_v01.mp4",
        nextPath: "/onboarding/step3",
    }, {
        id: 2,
        header: "Explore 100+ Styles",
        embedUrl: "https://cdn.getglam.app/content/paywalls/240515_web2web_video3_v01.mp4",
        nextPath: "/",
    },];
  return (
      <div className="bg-blue-50" style={{ minHeight: '100vh' }}>
          <Router>
              <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  {stepsData.map(({ header, embedUrl, nextPath, id}) => (<Route
                      key={id}
                      path={`/onboarding/step${id + 1}`}
                      element={<Step
                          header={header}
                          embedUrl={embedUrl}
                          nextPath={nextPath}
                      />}
                  />))}
              </Routes>
          </Router>
      </div>
  );
};

export default App;
