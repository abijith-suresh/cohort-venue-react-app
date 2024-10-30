import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import cohorts from "../../data/cohortData";

function CohortView() {
  const { cohortId } = useParams();
  const [cohort, setcohort] = useState(null);

  useEffect(() => {
    const fetchcohort = () => {
      const foundcohort = cohorts.find(
        (c) => c.cohortId === parseInt(cohortId)
      );
      setcohort(foundcohort);
    };

    fetchcohort();
  }, [cohortId]);

  if (!cohort) {
    return <div className="container my-4">Cohort not found.</div>;
  }

  return (
    <div className="container my-4">
      <h2 className="mb-4">Cohort Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{cohort.cohortStack}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>ID:</strong> {cohort.cohortId}
            </li>
            <li className="list-group-item">
              <strong>Size:</strong> {cohort.cohortSize}
            </li>
            <li className="list-group-item">
              <strong>Venue ID:</strong> {cohort.cohortVenueId === 0 ? "Not Assigned" : cohort.cohortVenueId}
            </li>
            <li className="list-group-item">
              <strong>Start Date:</strong> {new Date(cohort.cohortStartDate).toLocaleDateString()}
            </li>
            <li className="list-group-item">
              <strong>Duration (Weeks):</strong> {cohort.cohortDurationWeeks}
            </li>
            <li className="list-group-item">
              <strong>SPOC:</strong> {cohort.cohortSPOC || "Not Assigned"}
            </li>
            <li className="list-group-item">
              <strong>Instructor:</strong> {cohort.cohortInstructor || "Not Assigned"}
            </li>
          </ul>
        </div>
      </div>
      <Link to="/cohort-list" className="btn btn-primary mt-3">
        Back to Cohort List
      </Link>
    </div>
  );
}

export default CohortView;
