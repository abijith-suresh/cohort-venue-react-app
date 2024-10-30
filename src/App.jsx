import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import CohortList from "./components/cohort/CohortList";
import VenueList from "./components/venue/VenueList";
import VenueView from "./components/venue/VenueView";
import CohortView from "./components/cohort/CohortView";
import CohortAdd from "./components/cohort/CohortAdd";
import cohorts from "./data/cohortData";

function App() {
  const [allCohorts, setAllCohorts] = useState(cohorts);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/cohort-list"
            element={
              <CohortList
                allCohorts={allCohorts}
                setAllCohorts={setAllCohorts}
              />
            }
          ></Route>
          <Route
            path="/cohort-add"
            element={<CohortAdd setAllCohorts={setAllCohorts} />}
          ></Route>
          <Route path="/venue-list" element={<VenueList />}></Route>
          <Route path="/venue-view/:venueId" element={<VenueView />} />
          <Route path="/cohort-view/:cohortId" element={<CohortView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
