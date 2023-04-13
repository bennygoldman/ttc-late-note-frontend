import './Step5.scss'
import Letter from '../Letter/Letter';
import Button from '../Button/Button';


const Step5 = () => {
	return (
		<div className="step step-5">
			<h1 className="h1 h1-step-5">Everything look good?</h1>
			<Letter />
			<div className="button-box">
				<Button
					to="/find-delay"
					name="go back"
					isButton={false}
				/>
				<Button
					to="/confirmation"
					name="looks good!"
					isButton={false}
				/>
			</div>
		</div>
	);
};

export default Step5;
