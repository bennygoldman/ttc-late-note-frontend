import './Step1.scss'
import Button from '../Button/Button';

const Step1 = () => {
	const handleFormSave = () => {
		const formName = document.querySelector('#form-name').value;
		const formData = JSON.parse(localStorage.getItem('formData'));

		formData.name = formName;

		localStorage.setItem('formData', JSON.stringify(formData));
	}

	return (
		<div className="step step-1">
			<h1 className="h1 h1-step-1">TTC Late Note</h1>
			<p className='p-step-1'>Did a TTC delay make you late for an important event? We're sorry. If you give us some details about your trip, we'd be happy to write a letter for you to send to the person(s) affected.</p>
			<div className="form-area form-area-step-1">
				<p>Let's get started. First, tell us your name.</p>
				<div className="form-field">
					<label htmlFor="">name</label>
					<input id="form-name" type="text" placeholder="enter your name..." />
				</div>
			</div>
			<Button
				name="next"
				onClick={handleFormSave}
				to="/find-delay"
				isButton={false}
			/>
			{/* <div className="tweet-embed">
				<a className="twitter-timeline" data-dnt="true" data-theme="light" href="https://twitter.com/TTCnotices?ref_src=twsrc%5Etfw">Tweets by TTCnotices</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			</div> */}
		</div>
	);
};

export default Step1;
