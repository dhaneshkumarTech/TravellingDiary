import React from "react";

function TripCard(props) {
    return (
        <div className="trip-card">
            <img className="trip-image" src={`images/${props.image}`} alt="Hello"></img>
            <div className="trip-info">
                <img className="map" src="images/map.png" alt="hlll"></img>
                <span className="country">{props.country}</span>
                <span ><a className="map-text" href="#">View of Google Maps</a></span>
                <h1 className="trip-place">{props.place}</h1>
                <h3 className="trip-date">{props.date}</h3>
                <p className="trip-about">{props.about}</p>
            </div>
        </div>
    )
}

export default TripCard;