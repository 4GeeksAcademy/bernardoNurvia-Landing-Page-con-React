import React from "react";
import NavBar from "./NavBar";
import Jumbutton from "./Jumbutton";
import Cards from "./Cards";
import Footer from "./Footer";


const Home = () => {
	return (
		<div>
			<NavBar />
			<div className="container">
				<Jumbutton />


			</div>
			<div className="row">
				<Cards imgUrl="src/img/bernardo.png" name="Bernardo" description="Padre de Familia, super poderoso! asi lo definen sus hijas!" />
				<Cards imgUrl="src/img/vane.png" name="Vanessa" description="Madre, cariñosa y comprensiva, cuida de todos en casa!" />
				<Cards imgUrl="src/img/kami.png" name="Kamila" description="La hija mayor, inteligente y cariñosa! excelente estudiante!"/>
				<Cards imgUrl="src/img/arantza.png" name="Arantza" description="El terror de casa, capaz de volver loco a cualquiera, simplemente adorable!" />
			</div>

			<Footer />
		</div>

	);
};

export default Home;
