import React from "react";
import '../../styles/component-styles/Header.scss';
import Film from '../../styles/assets/icons/cinemaslate.svg';

const Header = () => {
	return (
		<div className="header">
			<h1 className="header__title">The Movie Nominations
				<img src={Film} alt="cinema slate" className="header__icon"/>
			</h1>
		</div>
	);
};
export default Header;
