import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';

const Header = () => {
	return (
		<header className="inner-container">
			<div className="logo">
				<Link to="/">
					<img src={logo} alt="Logo" />
				</Link>
			</div>
		</header>
	);
};

export default Header;
