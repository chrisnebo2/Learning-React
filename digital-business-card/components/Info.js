import React from 'react'

export default function Info() {
    return(
        <div className="info">
            <div className="profile-photo">
                <img src="../images/profile-photo.JPG"/>
            </div>
            <h2 className="user-name">Christian Nebo</h2>
            <h4>Frontend & Software Developer</h4>
            <h4>Graphics Designer</h4>
            <p><a href="#">www.nebochristian.com</a></p>
            <div className="buttons">
                <a href="#" className="email-button">
                    <img src="../images/mail.png" />
                    <p>Email</p>
                </a>
                <a href="#" className="linkedin-button">
                    <img src="../images/linkedin.png" />
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    )
}