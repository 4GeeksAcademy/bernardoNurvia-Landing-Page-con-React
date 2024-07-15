import React from "react";

const Jumbutton = () => {

    return (
        <div className="card m-2 col-3" style={{ width: "auto", background: "aliceblue" }}>
            <div className="card-body">
                <h1 className="card-title">Bienvenidos!</h1>
                <p className="card-text"> Somos la familia Patiño González y estos son nuestros queridos miembros.</p>
                <a href="#" className="btn btn-primary card-link">Card link</a>
            </div>
        </div>
    )
}

export default Jumbutton;