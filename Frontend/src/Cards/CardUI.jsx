import React from 'react';
import './card-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card=props=>{
    return(
        <div className="card text-center shadow">

            <div className="overflow">
                <img src={props.imgsrc} class="rounded-circle mb-3" alt="Image 1" />
            </div>

            <div className="review">
                <FontAwesomeIcon icon={faStar} style={{color: "#ffd129",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ffd129",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ffd129",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ffd129",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ffd129",}} />

            </div>
            
            <div className="card-body text-dark">
            
            
                <h4 className="card-title">{props.title}</h4>

               

                <p className="card-text text-secondary">
                    {props.description}
                </p>

            </div>

        </div>
    )

};

export default Card;