import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CohortList from "./components/cohort/CohortList";
import VenueList from "./components/venue/VenueList";
import VenueView from "./components/venue/VenueView";
import CohortView from "./components/cohort/CohortView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/cohort-list" element={<CohortList />}></Route>
          <Route path="/venue-list" element={<VenueList />}></Route>
          <Route path="/venue-view/:venueId" element={<VenueView />} />
          <Route path="/cohort-view/:cohortId" element={<CohortView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
