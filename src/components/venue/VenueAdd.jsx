import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function VenueAdd({ setAllVenues }) {
  const [venue, setVenue] = useState({
    venueId: 101,
    venueName: "",
    venueSeater: "",
    isVenueAC: true,
    venueCity: "",
    venueState: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVenue((prev) => ({
      ...prev,
      [name]: name === "isVenueAC" ? value === "true" : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVenue = {
      ...venue,
      venueId: Math.floor(Math.random() * 1000), // Generate a random venue ID for this example
    };

    setAllVenues((prevVenues) => [...prevVenues, newVenue]);

    setVenue({
      venueId: 101,
      venueName: "",
      venueSeater: "",
      isVenueAC: true,
      venueCity: "",
      venueState: "",
    });

    navigate("/venue-list");
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Add New Venue</h2>
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
          Add Venue
        </button>
        <Link to="/venue-list" className="btn btn-secondary ms-2">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default VenueAdd;
