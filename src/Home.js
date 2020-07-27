import React from 'react';

const Home = ({user}) => {
	return (
		<h1>{`Hi, ${user.name}, Welcome!`}</h1>
	);
}

export default Home;