import React from "react";
import NavBar from "./NavBar";
import Jumbutton from "./Jumbutton";
import Cards from "./Cards";
import Footer from "./Footer";


const Home = () => {
	return (
		<div>
			<NavBar/>
			<div className="container">
			<Jumbutton className= ""/>
			<Cards />
		
			</div>
			<Footer/>
				</div>

	);
};

export default Home;
