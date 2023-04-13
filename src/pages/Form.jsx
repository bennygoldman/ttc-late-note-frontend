import Step1 from '../components/Step1/Step1';
import Step2 from '../components/Step2/Step2';
import Step3 from '../components/Step3/Step3';
import Step4 from '../components/Step4/Step4';
import Step5 from '../components/Step5/Step5';
import Step6 from '../components/Step6/Step6';
import Button from '../components/Button/Button';

import {useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom';
import dayjs from "dayjs";


const Form = () => {
	const [data, setData] = useState({
		username: '',
		delayDate: '',
		transportType: '',
		transportLine: '',
		transportTime: '',
		delayId: '',
		toFirstName: '',
		toLastName: '',
		toEvent: ''
	})

	const createNote = async (e) => {
		const {username, delayId, toFirstName, toLastName, toEvent} = data
		e.preventDefault();
		try {
			await axios.post('/notes', {
				username,
				delayId,
				toFirstName,
				toLastName,
				toEvent,
			})
			alert('note created')
		} catch (error) {
			alert('note failed')
			console.log(error)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(data)
		createNote(e)
		alert('Note Submitted')

	}


	return (
		<>
			<Step1 data={data} setData={setData} />
			<Step2 data={data} setData={setData} />
			<Step3 data={data} setData={setData} />
			<Step4 data={data} setData={setData} />
			<Step5 data={data} setData={setData} />
			<Step6 data={data} setData={setData} />
		</>

	)

	// return (
	// 	<div className="form">
	// 		{page === titles.length ? (
	// 			<Step6 />
	// 		) : (
	// 			<div className="form-title">
	// 				<h1>{titles[page]}</h1>
	// 				<div className="form-logic">
	// 					<div className="form-page">{PageDisplay()}</div>
	// 					<div className="form-button-flex">
	// 						{page !== 0 && (
	// 							<Button
	// 								isButton={true}
	// 								onClick={handleBack}
	// 								name={page === titles.length - 1 ? "Edit Note" : "Back"} />
	// 						)}
	// 						<Button
	// 							isButton={true}
	// 							onClick={handleNext}
	// 							name={page === titles.length - 1 ? "Looks Good" : page === titles.indexOf(2) ? "Review Draft" : "Next"}
	// 						/>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		)}
	// 	</div>

	// );
};

export default Form;
