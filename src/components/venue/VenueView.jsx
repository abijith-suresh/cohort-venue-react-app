import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import venues from "../../data/venuesData";

function VenueView() {
  const { venueId } = useParams();
  const [venue, setVenue] = useState(null);

  useEffect(() => {
    const fetchVenue = () => {
      const foundVenue = venues.find((v) => v.venueId === parseInt(venueId));
      setVenue(foundVenue);
    };

    fetchVenue();
  }, [venueId]);

  if (!venue) {
    return <div className="container my-4">Venue not found.</div>;
  }

  return (
    <div className="container my-4">
      <h2 className="mb-4">Venue Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{venue.venueName}</h5>
          <p className="card-text">
            <strong>ID:</strong> {venue.venueId}
          </p>
          <p className="card-text">
            <strong>Seater Capacity:</strong> {venue.venueSeater}
          </p>
          <p className="card-text">
            <strong>AC/Non-AC:</strong> {venue.isVenueAC ? "AC" : "Non-AC"}
          </p>
          <p className="card-text">
            <strong>City:</strong> {venue.venueCity}
          </p>
          <p className="card-text">
            <strong>State:</strong> {venue.venueState}
          </p>
        </div>
      </div>
      <Link to="/venue-list" className="btn btn-primary mt-3">
        Back to Venue List
      </Link>
    </div>
  );
}

export default VenueView;
