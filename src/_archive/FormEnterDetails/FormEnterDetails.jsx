import './FormEnterDetails.scss'
import EnterDetailsFirstNameInput from '../EnterDetailsFirstNameInput/EnterDetailsFirstNameInput';
import EnterDetailsLastNameInput from '../EnterDetailsLastNameInput/EnterDetailsLastNameInput';
import EnterDetailsEventInput from '../EnterDetailsEventInput/EnterDetailsEventInput';
const FormEnterDetails = () => {
	return (
		<div>
			<EnterDetailsFirstNameInput />
			<EnterDetailsLastNameInput />
			<EnterDetailsEventInput />
		</div>
	);
};

export default FormEnterDetails;
