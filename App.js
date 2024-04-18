
import React from "react"
import ReactDOM from "react-dom"
import MovieBooking from "./movieBooking"; // Correct the import to use proper capitalization

const AppLayout = () => {
    return (
        <MovieBooking />
    );
};

const root = document.getElementById("root");
ReactDOM.render(<AppLayout />, root); 
