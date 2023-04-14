import './NotFound.scss'

const NotFound = () => {
	return (
		<div className="notfound">
			<p className="notfound__span">404</p>
			<h1 className="notfound__head">NOT IN SERVICE </h1>
			<div className="notfound__body">
				<p>We're sorry, the page you are looking for does not exist.</p>
				<p>Would you like to make a <a href="/" className="notfound__link">new note</a> instead?</p>
			</div>
		</div>
	);
};

export default NotFound;
