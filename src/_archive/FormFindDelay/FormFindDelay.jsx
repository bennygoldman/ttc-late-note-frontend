import FindDelayChooseDateDatePicker from "../FindDelayChooseDateDatePicker/FindDelayChooseDateDatePicker";
import FindDelayChooseModeSelect from "../FindDelayChooseModeSelect/FindDelayChooseModeSelect";
import FindDelayChooseLineSelect from "../FindDelayChooseLineSelect/FindDelayChooseLineSelect";
import FindDelayChooseTimeSelect from "../FindDelayChooseTimeSelect/FindDelayChooseTimeSelect";
import {useState} from "react";

const FormFindDelay = (data) => {
	const [dateChoice, setDateChoice] = useState('')
	const [modeChoice, setModeChoice] = useState('')
	const [lineChoice, setLineChoice] = useState('')
	const [timeChoice, setTimeChoice] = useState('')



	return (
		<div>
			<p>Thank you, {`${data.username}`}</p>
			<FindDelayChooseDateDatePicker
				setDateChoice={setDateChoice}
			/>
			<FindDelayChooseModeSelect
				setModeChoice={setModeChoice}
			/>
			<FindDelayChooseLineSelect
				setLineChoice={setLineChoice}
			/>
			<FindDelayChooseTimeSelect
				setTimeChoice={setTimeChoice}
			/>
		</div>
	);
};

export default FormFindDelay;
