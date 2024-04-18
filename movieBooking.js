// App.js

import React, { useState } from "react";
import "./movieBooking.css";

const MovieBooking = () => {
  const [userName, setUserName] = useState("");
  const [seatNumber, setSeatNumber] = useState("");
  const [totalBooked, setTotalBooked] = useState(0);
  const [bookedTickets, setBookedTickets] = useState([]);
  const [searchedSeat, setSearchedSeat] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName && seatNumber) {
      const existingTicket = bookedTickets.find(
        (ticket) => ticket.seatNumber === seatNumber
      );
      if (existingTicket) {
        alert(`Seat number ${seatNumber} has already been booked.`);
      } else {
        const newTicket = {
          userName,
          seatNumber,
          ticketNumber: bookedTickets.length + 1,
        };
        setBookedTickets([...bookedTickets, newTicket]);
        setUserName("");
        setSeatNumber("");
        setTotalBooked(totalBooked + 1);
      }
    }
  };

  const handleSearch = () => {
    if (searchedSeat) {
      const result = bookedTickets.find(
        (ticket) => ticket.seatNumber === searchedSeat
      );
      if (result) {
        setSearchResult(result);
      } else {
        alert(`No booking found for seat number ${searchedSeat}`);
        setSearchResult(null);
      }
    } else {
      setSearchResult(null);
    }
  };

  return (
    <div className="App">
      <h1>Movie Booking</h1>
      <div className="booking-form">
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label>
            Seat Number:
            <input
              type="text"
              value={seatNumber}
              onChange={(e) => setSeatNumber(e.target.value)}
            />
          </label>
          <button type="submit">Book Ticket</button>
        </form>
        <p>Total Booked: {totalBooked}</p>
      </div>
      <div className="search-form">
        <input
          type="text"
          placeholder="Enter seat number"
          value={searchedSeat}
          onChange={(e) => setSearchedSeat(e.target.value)}
        />
        <button onClick={handleSearch}>Find Slot</button>
      </div>
      {searchResult && (
        <div className="search-result">
          <h2>Search Result</h2>
          <p>
            Ticket Number: {searchResult.ticketNumber}, Username:{" "}
            {searchResult.userName}, Seat Number: {searchResult.seatNumber}
          </p>
        </div>
      )}
      <div className="booked-tickets">
        <h2>Booked Tickets</h2>
        <ul>
          {bookedTickets.map((ticket) => (
            <li key={ticket.ticketNumber}>
              Ticket Number: {ticket.ticketNumber}, Username: {ticket.userName},
              Seat Number: {ticket.seatNumber}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieBooking;
