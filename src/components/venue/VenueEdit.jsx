import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function VenueEdit({ allVenues, setAllVenues }) {
  const { venueId } = useParams();
  const navigate = useNavigate();

  const [venue, setVenue] = useState(null);

  useEffect(() => {
    const foundVenue = allVenues.find((v) => v.venueId === parseInt(venueId));
    if (foundVenue) {
      setVenue(foundVenue);
    }
  }, [venueId, allVenues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVenue((prev) => ({
      ...prev,
      [name]: name === "isVenueAC" ? value === "true" : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllVenues((prevVenues) =>
      prevVenues.map((v) =>
        v.venueId === parseInt(venueId) ? { ...venue, venueId: v.venueId } : v
      )
    );
    navigate("/venue-list");
  };

  if (!venue) {
    return <div className="container my-4">Venue not found.</div>;
  }

  return (
    <div className="container my-4">
      <h2 className="mb-4">Edit Venue</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="venueName" className="form-label">
            Venue Name
          </label>
          <input
            type="text"
            className="form-control"
            id="venueName"
            name="venueName"
            value={venue.venueName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="venueSeater" className="form-label">
            Venue Seater
          </label>
          <input
            type="number"
            className="form-control"
            id="venueSeater"
            name="venueSeater"
            value={venue.venueSeater}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="isVenueAC" className="form-label">
            Is Venue AC
          </label>
          <select
            className="form-control"
            id="isVenueAC"
            name="isVenueAC"
            value={venue.isVenueAC ? "true" : "false"}
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="venueCity" className="form-label">
            Venue City
          </label>
          <input
            type="text"
            className="form-control"
            id="venueCity"
            name="venueCity"
            value={venue.venueCity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="venueState" className="form-label">
            Venue State
          </label>
          <input
            type="text"
            className="form-control"
            id="venueState"
            name="venueState"
            value={venue.venueState}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Venue
        </button>
        <Link to="/venue-list" className="btn btn-secondary ms-2">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default VenueEdit;
