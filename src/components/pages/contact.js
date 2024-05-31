import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profilePicture from "../../../static/assets/images/auth/login.jpg"


export default function() {
    return (
        <div className="content-page-wrapper">
            <div className="left-column" 
                style=
                {{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >

            </div>
            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone"></FontAwesomeIcon>
                        </div>
                        <div className="text">555-555-5555</div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope"></FontAwesomeIcon>
                        </div>
                        <div className="text">ruben.barril@gmail.com</div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marked-alt"></FontAwesomeIcon>
                        </div>
                        <div className="text">Vitoria, ALAVA</div>
                    </div>
                </div>
            </div>
        </div>
    )
}