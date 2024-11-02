import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function VenueRow({ venue, onDelete }) {
  return (
    <tr>
      <td>{venue.venueId}</td>
      <td>{venue.venueName}</td>
      <td>{venue.venueSeater}</td>
      <td>{venue.isVenueAC ? "AC" : "NON-AC"}</td>
      <td>{venue.venueCity}</td>
      <td>{venue.venueState}</td>
      <td className="text-center">
        <Link
          to={`/venue-view/${venue.venueId}`}
          className="btn btn-outline-primary me-2"
          aria-label={`View details for ${venue.venueName}`}
        >
          <i className="bi bi-eye"></i>
        </Link>
      </td>
      <td className="text-center">
      <Link
          to={`/venue-edit/${venue.venueId}`}
          className="btn btn-outline-warning me-2"
          aria-label={`Edit details for ${venue.venueName}`}
        >
          <i className="bi bi-pencil"></i>
        </Link>
      </td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => onDelete(venue.venueId)}
          aria-label={`Delete ${venue.venueName}`}
        >
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default VenueRow;
