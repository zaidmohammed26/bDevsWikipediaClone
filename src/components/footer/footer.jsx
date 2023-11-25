import React from "react"
import "./footer.css"
import wiki from "./wikifooter-removebg-preview.png"

function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-main">
                <div className="footer-left">
                    <h3>Developed By</h3>
                    <ul>
                        <li>Kamran</li>
                        <li>Hemanth</li>
                        <li>Ganesh</li>
                        <li>Zaid</li>
                    </ul>
                    <h6>Used Technologies :- React js , Bootstrap , node js , html-css-javascript</h6>
                </div>
                <div className="footer-right">
                    <img src={wiki} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer