import Button from '../Button/Button';
import './Step3.scss'

const Step3 = () => {

	const formData = JSON.parse(localStorage.getItem('formData'));
	console.log('Form Data:', formData);

	const handleFormSave = () => {
		const formToFirst = document.querySelector('#form-toFirst').value;
		const formToLast = document.querySelector('#form-toLast').value;
		const formToEvent = document.querySelector('#form-toEvent').value;

		formData.toFirst = formToFirst;
		formData.toLast = formToLast;
		formData.toEvent = formToEvent;

		localStorage.setItem('formData', JSON.stringify(formData));
		console.log(formData)
	}

	return (
		<div className="step step-3">
			<h1 className='h1-step-3'>... and who's the note for?</h1>
			<div className="form-area form-area-step-3">
				<div className="form-field">
					<label htmlFor="toFirstName">first name</label>
					<input type="text" placeholder="First name" id="form-toFirst" />
				</div>
				<div className="form-field">
					<label htmlFor="toLastName">last name</label>
					<input type="text" placeholder="Last name" id="form-toLast" />
				</div>
				<div className="form-field">
					<label htmlFor="toEvent">event</label>
					<input type="text" placeholder="(e.g., wedding or graduation)" id="form-toEvent" />
				</div>
			</div>
			{/* <Button
				to="/loading-draft"
				name="let's see it"
				isButton={false}
			/> */}
			<Button
				name="let's see it"
				onClick={handleFormSave}
				to="/loading-draft"
				isButton={false}
			/>
		</div>
	);
};

export default Step3;
