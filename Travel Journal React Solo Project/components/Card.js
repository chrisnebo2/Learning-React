import React from "react"

export default function Card(props) {
    return (
        <div className="card">
           <div className="children">
                <a href={props.imageUrl}>
                    <img src={props.imageUrl} className="location-image" />
                </a>
           </div>
           <div className="children">
                <div className="location">
                    <img src="../images/location.png" className="location-icon" />
                    <p className="country">
                        {props.location}
                    </p>
                    <a href={props.googleMapsUrl} className="google-link">
                        View on Google Maps
                    </a>
                </div>
                <h2 className="title">{props.title}</h2>
                <h4 className="date">{props.startDate} - {props.endDate}</h4>
                <p className="description">{props.description}</p>
           </div>
        </div>
    )
}