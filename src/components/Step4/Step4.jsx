import {Link} from 'react-router-dom';
import './Step4.scss'

const Step4 = () => {
	return (
		<div className="step step-4">
			<h1 className="h1 h1-step-4">Hang tight while we prepare your note...</h1>
			<Link to="/review-draft">
				<div className="loader"></div>
			</Link>
		</div>
	);
};

export default Step4;
