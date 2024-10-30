import "bootstrap/dist/css/bootstrap.min.css";
import venues from "../../data/venuesData";
import { useState } from "react";
import VenueRow from "./VenueRow";

export default function VenueList({allVenues, setAllVenues}) {

  const handleEdit = (venueId) => {
    const venueToEdit = allVenues.find((venue) => venue.venueId === venueId);
    // Implement the logic for editing the venue
  };

  const handleDelete = (venueId) => {
    setAllVenues(allVenues.filter((venue) => venue.venueId !== venueId));
  };

  return (
    <div className="container">
      <h3 className="mb-4">VENUE LIST</h3>
      <table className="table table-striped table-bordered">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>SEATER CAPACITY</th>
            <th>AC/NON-AC</th>
            <th>CITY</th>
            <th>STATE</th>
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
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
