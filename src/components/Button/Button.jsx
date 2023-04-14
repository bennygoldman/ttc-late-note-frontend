import './Button.scss'
import {Link} from 'react-router-dom';
const Button = ({name, className, to, isButton, onClick}) => {
	// return (
	// 	<button type="button">next</button>
	// );

	if (isButton) {
		return (
			<button className={`button ${className}`}>{name}</button>
		);
	} else {
		return (
			<Link to={to} className={`link-button ${className}`} onClick={onClick}>{name}</Link>
		)
	}
};

export default Button;
