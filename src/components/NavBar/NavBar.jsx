import logo from '../../assets/logos/TTC-LOGO.svg'
import "./NavBar.scss";
import {NavLink, useLocation} from "react-router-dom";

const NavBar = () => {

	const location = useLocation();
	// const isWarehouseActive = location.pathname.startsWith("/warehouse") || location.pathname === "/";
	// const isInventoryActive = location.pathname.startsWith("/inventory");

	return (
		<div className="header">
			<div className="header-contents">
				<NavLink to="/" className="header-logo">
					{/* <span className="header-type">TTC</span> */}
					<img src={logo} alt="logo" className="header-img" />
					<span className="header-hand">Late Note</span>
				</NavLink>
				<div className="header-nav">
					<NavLink to="/new-note" className="header-navitem header-active">New Note</NavLink>
					<NavLink to="/aboutus" className="header-navitem header-inactive">About Us</NavLink>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
