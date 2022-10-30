import React from "react";

function TripCard() {
    return (
        <div className="trip-card">
            <img className="trip-image" src="images/muree.jpg" alt="Hello"></img>
            <div className="trip-info">
                <img className="map" src="images/map.png" alt="hlll"></img>
                <span className="country">Country</span>
                <span ><a className="map-text" href="#">View of Google Maps</a></span>
                <h1 className="trip-place">Place Name</h1>
                <h3 className="trip-date">Date</h3>
                <p className="trip-about">Experience the culture of ethnic minority communities of Hunza
                    Participate and dance to the tunes of Murree drums
                    Enjoy Hunza and Pakistani cuisine</p>
            </div>
        </div>
    )
}

export default TripCard;