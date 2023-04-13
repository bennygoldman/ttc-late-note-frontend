import {Link} from 'react-router-dom';
import './Step6.scss'

const Step6 = () => {
	return (
		<div className="step step-6">
			<h1 className="h1 h1-step-6">You're all set!</h1>
			<p>Send this link to {`Zed`}: <Link to="/loading-letter">http://tardy.to/arg3a5v</Link></p>
			<p>We look forward to having you aboard again soon.</p>
			<p>Your friends at the</p>
			<div className="signature">- T T C</div>
			<p>Need another note? Make one <Link to="/new-note">here</Link>.</p>
			<p><Link to="/aboutus">Learn more</Link> about us.</p>
		</div>
	);
};

export default Step6;
