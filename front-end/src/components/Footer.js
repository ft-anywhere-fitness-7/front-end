import React from "react";
import "../CSS/Footer.css";


const Footer = () => {

    return (
        <div className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Anywhere Fitness</h4>
                        <ul className="list-unstyled">
                            <li>Sign In</li>
                            <li>Register</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Meet the team!</h4>
                        <ul className="list-unstyled">
                            <li>Brandi Ball</li>
                            <li>Cam Meiners</li>
                            <li>Collyn Godlewski</li>
                            <li>James Calvo</li>
                            <li>Kat Yevsukov</li>
                            <li>Rongjun Geng</li>
                            <li>Tuan Nguyen</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} Anywhere Fitness | All rights reserved | Terms of Service | Privacy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;