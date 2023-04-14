// import FormHomePage from "../../components/FormHomePage/FormHomePage";
// import FormFindDelay from "../../components/FormFindDelay/FormFindDelay";
// import FormEnterDetails from "../../components/FormEnterDetails/FormEnterDetails";
// import FormReviewDraft from "../../components/FormReviewDraft/FormReviewDraft";
// import FormConfirmation from "../../components/FormConfirmation/FormConfirmation";
import Step1HomePage from '../../components/Step1HomePage';
import Step2FindDelay from '../../components/Step2FindDelay';
import Step3AddDetails from '../../components/Step3AddDetails';
import Step5DraftPreview from '../../components/Step5DraftPreview';
import axios from 'axios'
import {useState} from 'react'

const Form = () => {
	const [page, setPage] = useState(0)
	const [data, setData] = useState({
		username: localStorage.username || '',
		delayDate: localStorage.delayDate || '',
		transportType: localStorage.transportType || '',
		transportLine: localStorage.transportLine || '',
		transportTime: localStorage.transportTime || '',
		delayId: localStorage.delayId || '',
		toFirstName: localStorage.toFirstName || '',
		toLastName: localStorage.toLastName || '',
		toEvent: localStorage.toEvent || ''
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
		setPage((currPage) => currPage + 1)
	}

	const titles = [`Welcome to TTC Late Note`, `Now tell us what happened.`, `... and Who's it For?`, `Everything look good?`]

	const PageDisplay = () => {
		// if (page == 0) {
		// 	return <Step1HomePage data={data} setData={setData} />
		// } else if (page == 1) {
		// 	return <Step2FindDelay data={data} setData={setData} />
		// } else if (page == 2) {
		// 	return <FormEnterDetails data={data} setData={setData} />
		// } else {
		// 	return <FormReviewDraft data={data} setData={setData} />
		// }
		if (page == 0) {
			return <Step1HomePage data={data} setData={setData} />
		} else if (page == 1) {
			return <Step2FindDelay data={data} setData={setData} />
		} else if (page == 2) {
			return <Step3AddDetails data={data} setData={setData} />
		} else {
			return <Step5DraftPreview data={data} setData={setData} />
		}
	}

	// there's an old handleNext in the scratchpad
	const handleNext = () => {
		if (page === titles.length - 1) {
			handleSubmit()
		} else {
			setPage((currPage) => currPage + 1)
		}
	};

	const handleBack = () => {
		setPage((currPage) => currPage - 1)
	};

	return (
		<div className="form">
			{page === titles.length ? (
				<FormConfirmation />
			) : (
				<div className="form__title">
					<h1>{titles[page]}</h1>
					<form className="form__logic">
						<div className="form__page">{PageDisplay()}</div>
						<div className="form__button-flex">
							{page !== 0 && (
								<button
									type="button"
									className="form__button form__button--secondary"
									onClick={handleBack}>
									{page === titles.length - 1 ? "Edit Note" : "Back"}
								</button>
							)}
							<button
								type="button"
								className="form__button form__button--primary"
								onClick={handleNext}>
								{page === titles.length - 1 ? "Looks Good" : page === titles.length - 2 ? "Review Draft" : "Next"}
							</button>
						</div>
					</form>
				</div>
			)}
		</div>

	);
};

export default Form;
