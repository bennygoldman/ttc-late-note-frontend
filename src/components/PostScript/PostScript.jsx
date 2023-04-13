import {Link} from 'react-router-dom';
import './PostScript.scss'


const PostScript = () => {
	return (

		<div className="post-script">
			<p>This note was auto-generated based on data collected by the TTC. Please note, at this time, we are unable to verify if <b>Benny</b> was riding TTC when the incident occurred. But they went through the trouble to send this to you, so maybe you can let it slide this time.</p>
			<p>To send your own note, go <Link to="/new-note">here</Link>.</p>
		</div>

	);
};

export default PostScript;
