import Button from '../Button/Button';
import './Step3.scss'

const Step3 = () => {
	return (
		<div className="step step-3">
			<h1 className='h1-step-3'>... and who's the note for?</h1>
			<div className="form-area form-area-step-3">
				<div className="form-field">
					<label htmlFor="toFirstName">first name</label>
					<input type="text" placeholder="First name" />
				</div>
				<div className="form-field">
					<label htmlFor="toLastName">last name</label>
					<input type="text" placeholder="Last name" />
				</div>
				<div className="form-field">
					<label htmlFor="toEvent">event</label>
					<input type="text" placeholder="(e.g., wedding or graduation)" />
				</div>
			</div>
			<Button
				to="/loading-draft"
				name="let's see it"
				isButton={false}
			/>
		</div>
	);
};

export default Step3;
