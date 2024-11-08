import "bootstrap/dist/css/bootstrap.min.css";
import VenueRow from "./VenueRow";

export default function VenueList({ allVenues, setAllVenues }) {

  const handleDelete = (venueId) => {
    setAllVenues(allVenues.filter((venue) => venue.venueId !== venueId));
  };

  return (
    <div className="container">
      <h3 className="mb-4">VENUE LIST</h3>
      <table className="table table-striped table-bordered">
        <thead className="table-light">
          <tr>
            <th className="text-center">ID</th>
            <th className="text-center">NAME</th>
            <th className="text-center">SEATER CAPACITY</th>
            <th className="text-center">AC/NON-AC</th>
            <th className="text-center">CITY</th>
            <th className="text-center">STATE</th>
            <th colSpan={3} className="text-center">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody>
          {allVenues.map((venue) => (
            <VenueRow
              key={venue.venueId}
              venue={venue}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
