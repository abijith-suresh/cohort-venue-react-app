import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function CohortEdit({ allCohorts, setAllCohorts }) {
  const { cohortId } = useParams();
  const navigate = useNavigate();

  const [cohort, setCohort] = useState({
    cohortStack: "",
    cohortSize: "",
    cohortVenueId: 0,
    cohortStartDate: "",
    cohortDurationWeeks: "",
    cohortSPOC: "",
    cohortInstructor: "",
  });

  useEffect(() => {
    const foundCohort = allCohorts.find(
      (c) => c.cohortId === parseInt(cohortId)
    );
    if (foundCohort) {
      setCohort(foundCohort);
    }
  }, [cohortId, allCohorts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCohort((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCohort = {
      cohortId: parseInt(cohortId),
      cohortSize: cohort.cohortSize,
      cohortVenueId: cohort.cohortVenueId,
      cohortStack: cohort.cohortStack,
      cohortStartDate: cohort.cohortStartDate,
      cohortDurationWeeks: cohort.cohortDurationWeeks,
      cohortSPOC: cohort.cohortSPOC,
      cohortInstructor: cohort.cohortInstructor,
    };

    setAllCohorts((prevCohorts) =>
      prevCohorts.map((c) =>
        c.cohortId === updatedCohort.cohortId ? updatedCohort : c
      )
    );

    navigate("/cohort-list");
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Edit Cohort</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="cohortStack" className="form-label">
            Stack Name
          </label>
          <input
            type="text"
            className="form-control"
            id="cohortStack"
            name="cohortStack"
            value={cohort.cohortStack}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cohortSize" className="form-label">
            Size
          </label>
          <input
            type="number"
            className="form-control"
            id="cohortSize"
            name="cohortSize"
            value={cohort.cohortSize}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cohortVenueId" className="form-label">
            Venue ID
          </label>
          <input
            type="number"
            className="form-control"
            id="cohortVenueId"
            name="cohortVenueId"
            value={cohort.cohortVenueId}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cohortStartDate" className="form-label">
            Start Date
          </label>
          <input
            type="date"
            className="form-control"
            id="cohortStartDate"
            name="cohortStartDate"
            value={cohort.cohortStartDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cohortDurationWeeks" className="form-label">
            Duration (Weeks)
          </label>
          <input
            type="number"
            className="form-control"
            id="cohortDurationWeeks"
            name="cohortDurationWeeks"
            value={cohort.cohortDurationWeeks}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cohortSPOC" className="form-label">
            SPOC
          </label>
          <input
            type="text"
            className="form-control"
            id="cohortSPOC"
            name="cohortSPOC"
            value={cohort.cohortSPOC}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cohortInstructor" className="form-label">
            Instructor
          </label>
          <input
            type="text"
            className="form-control"
            id="cohortInstructor"
            name="cohortInstructor"
            value={cohort.cohortInstructor}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Cohort
        </button>
        <Link to="/cohort-list" className="btn btn-secondary ms-2">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default CohortEdit;
