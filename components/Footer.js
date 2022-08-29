import React from 'react'
import Twitter from "../images/twitter-icon.png"
import Facebook from "../images/facebook-icon.png"
import Instagram from "../images/instagram-icon.png"
import GitHub from "../images/github-icon.png"


export default function Footer() {
    return(
       <div className="footer">
            <a href="#">
                <img src={Twitter} />
            </a>
            <a href="#">
                <img src={Facebook} />
            </a>
            <a href="#">
                <img src={Instagram} />
            </a>
            <a href="#">
                <img src={GitHub} />
            </a>
       </div>
    )
}