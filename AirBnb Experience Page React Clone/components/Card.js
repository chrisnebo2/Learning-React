import React from "react"

export default function Card(props) {
    let badgeText = ""
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }else{
        badgeText = ""
    }
    
    return (
            <div className="card">
                <div className="card-image">
                    <img src={`../images/${props.coverImg}`} className="image" />
                    <p className="sold-out">{badgeText}</p> 
                </div>
                <div className="rating">
                    <img className="star" src="../images/star.png" />
                    <p className="rate">{props.stats.rating} <span className="country">({props.stats.rating}) • {props.location}</span></p>
                </div>
                <div className="card-text"> 
                    <p>{props.title}</p>
                    <p><b>From ${props.price}</b> / person</p>
                </div>
            </div>
    )
}
