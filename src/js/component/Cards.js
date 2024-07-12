import React from "react";
import logoBernardoNurvia from "./../../img/logoBernardoNurvia.jpg"
const Cards = () => {
const cardTitle =[]
const cardDescription =[]
    return (
        <div className="m-2 col col-md-3 card" style={{width: ""}}>
            <img src={logoBernardoNurvia} alt="Logo Bernardo Nurvia" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary d-grid gap-2 col mx-auto">Go somewhere</a>
                </div>
        </div>
    )
};

export default Cards;