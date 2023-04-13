import {Link} from 'react-router-dom';
import './Step7.scss'


const Step7 = () => {
	return (
		<div className="step step-7">
			<h1 className="h1 h1-step-7">Please hold while we locate your note...</h1>
			<Link to="/letter">
				<div class="loader"></div>
			</Link>
		</div>
	);
};

export default Step7;
