import React from "react";
import NavBar from "./NavBar";
import Jumbutton from "./Jumbutton";
import Cards from "./Cards";
import Footer from "./Footer";
import bernardo from "./../../img/bernardo.png";
import vanessa from "./../../img/vane.png";
import kamila from "./../../img/kami.png";
import arantza from "./../../img/arantza.png";
const Home = () => {
	return (
		<div>
			<NavBar />
			<div className="container">
				<Jumbutton />


			</div>
			<div className="container overflow-hidden">
				<div className="row gx-4">
				<Cards imgUrl={bernardo} name="Bernardo" description="Padre de Familia, super poderoso! asi lo definen sus hijas!" />
				<Cards imgUrl={vanessa} name="Vanessa" description="Madre, cariñosa y comprensiva, cuida de todos en casa!" />
				<Cards imgUrl={kamila} name="Kamila" description="La hija mayor, inteligente y cariñosa! excelente estudiante!" />
				<Cards imgUrl={arantza} name="Arantza" description="El terror de casa, capaz de volver loco a todos, simplemente adorable!" />
			</div>
			</div>
			

			<Footer />
		</div>

	);
};

export default Home;
