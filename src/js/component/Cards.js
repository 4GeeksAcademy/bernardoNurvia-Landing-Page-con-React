import React from "react";
import logoBernardoNurvia from "./../../img/logoBernardoNurvia.jpg";



const Cards = (props) => {

    return (
        <div className="card col-sm-12 col-md-6 col-lg-3 mb-2" style={{ backgroundColor: "aliceblue", border: "8%"}}>
            <img src={props.imgUrl} alt="avatar" className="card-img-top p-2 img-card" />
            <div className="card-body">
                <h5 className="card-title text-center">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary d-grid gap-2 col mx-auto mb-2">Go somewhere</a>
            </div>
        </div>
    )
};

export default Cards;