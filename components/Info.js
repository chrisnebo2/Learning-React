import React from 'react'
import ProfilePhoto from "../images/profile-photo.JPG"
import Mail from "../images/mail.png"
import LinkedIn from "../images/linkedin.png"


export default function Info() {
    return(
        <div className="info">
            <div className="profile-photo">
                <img src={ProfilePhoto} />
            </div>
            <h2 className="user-name">Christian Nebo</h2>
            <h4>Frontend & Software Developer</h4>
            <h4>Graphics Designer</h4>
            <p><a href="#">www.nebochristian.com</a></p>
            <div className="buttons">
                <a href="#" className="email-button">
                    <img src={Mail} />
                    <p>Email</p>
                </a>
                <a href="#" className="linkedin-button">
                    <img src={LinkedIn} />
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    )
}