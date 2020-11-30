import React from 'react'
// import './styles/Card.css'

const Card = (props) => {
    return(
        <div className="Card">
            <img src={props.image} alt={props.title}/>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default Card