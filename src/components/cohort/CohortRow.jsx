import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function CohortRow({ cohort, onEdit, onDelete }) {
  return (
    <tr key={cohort.cohortId}>
      <td>{cohort.cohortId}</td>
      <td>{cohort.cohortStack}</td>
      <td>{cohort.cohortSize}</td>
      <td>
        {cohort.cohortVenueId === 0 ? (
          <button className="btn btn-success">MAP</button>
        ) : (
          cohort.cohortVenueId
        )}
      </td>
      <td>{cohort.cohortStartDate}</td>
      <td>{cohort.cohortDurationWeeks}</td>
      <td>{cohort.cohortSPOC}</td>
      <td>{cohort.cohortInstructor}</td>
      <td className="text-center">
        <Link
          to={`/cohort-view/${cohort.cohortId}`}
          className="btn btn-outline-primary me-2"
          aria-label={`View cohort ${cohort.cohortId}`}
        >
          <i className="bi bi-eye"></i>
        </Link>
      </td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-outline-warning me-2"
          onClick={() => onEdit(cohort.cohortId)}
          aria-label={`Edit cohort ${cohort.cohortId}`}
        >
          <i className="bi bi-pencil"></i>
        </button>
      </td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => onDelete(cohort.cohortId)}
          aria-label={`Delete cohort ${cohort.cohortId}`}
        >
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default CohortRow;
