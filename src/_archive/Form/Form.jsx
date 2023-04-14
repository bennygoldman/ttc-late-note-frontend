import {useState, useEffect, useMemo, useRef} from "react";
import './Form.scss'
import axios from "axios";
import dayjs from "dayjs";

const Form = () => {

	const [username, setUsername] = useState('')
	const userRef = useRef()
	const [dates, setDates] = useState([]);
	const [selectedDate, setSelectedDate] = useState('');
	const [modes, setModes] = useState([])
	const [selectedMode, setSelectedMode] = useState('');
	const [lines, setLines] = useState([])
	const [selectedLine, setSelectedLine] = useState('');
	const [times, setTimes] = useState([])
	const [selectedTime, setSelectedTime] = useState('');
	const [selectedDelay, setSelectedDelay] = useState('');


	const [noteDetails, setNoteDetails] = useState(0)
	const toFirstRef = useRef()
	const toLastRef = useRef()
	const toEventRef = useRef()

	const mongofyDate = (dateString) => {
		return dayjs(dateString).format('YYYY-MM-DD');
	}
	function handleUsername(e) {
		e.preventDefault()
		setUsername(userRef.current.value)
	}
	function handleDateChange(e) {
		setSelectedDate(e.target.value);
	}
	function handleModeChange(e) {
		setSelectedMode(e.target.value);
	}
	function handleLineChange(e) {
		setSelectedLine(e.target.value);
	}
	function handleTimeChange(e) {
		const selectedId = e.target.value;
		const selectedTimeObj = times.find(({id}) => id === selectedId);
		setSelectedTime(selectedTimeObj.time);
		setSelectedDelay(selectedId);
	}
	function handleDelayInfo(e) {
		e.preventDefault()
	}

	function handleNoteDetails(e) {
		e.preventDefault()
		console.log(toFirstRef.current.value)
		console.log(toLastRef.current.value)
		console.log(toEventRef.current.value)
		const noteDetailsRef = {"toFirstName": toFirstRef.current.value, "toLastName": toLastRef.current.value, "toEvent": toEventRef.current.value}
		console.log(noteDetailsRef)
		setNoteDetails(noteDetailsRef)
	}

	function handleSubmit(e) {
		// const {username, delayId, toFirstName, toLastName, toEvent} = data
		e.preventDefault()
		alert('form submitted')

	}
	// set valid Dates on initial load
	useEffect(() => {
		axios
			.get('/delays/dates')
			.then(res => {
				// console.log(res.data)
				const validDates = res.data.map(date => mongofyDate(date));
				setDates(validDates);
				// console.log(validDates);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);
	// set valid Modes on date select
	useEffect(() => {
		setModes('')
		setSelectedMode('')
		{
			selectedDate !== '' && (
				axios
					.get(`/delays/modes?date=${selectedDate}`)
					.then(res => {
						setModes(res.data)
					})
					.catch(err => {
						console.log(err)
					})
			)
		}
	}, [selectedDate])
	// set valid Lines on mode select
	useEffect(() => {
		setLines('')
		setSelectedLine('')

		{
			selectedDate !== '' &&
				selectedMode !== '' &&
				(
					axios
						.get(`delays/lines?date=${selectedDate}&mode=${selectedMode}`)
						.then(res => {
							console.log(res.data)
							setLines(res.data)

						})
						.catch(err => {
							console.log(err)
						})
				)
		}
	}, [selectedDate, selectedMode])
	// set valid Times on line select
	useEffect(() => {
		setTimes('')
		setSelectedTime('')
		{
			selectedDate !== '' &&
				selectedMode !== '' &&
				selectedLine !== '' &&
				(
					axios
						.get(`delays/times?date=${selectedDate}&mode=${selectedMode}&line=${selectedLine}`)
						.then(res => {
							console.log(res.data)
							setTimes(res.data)
						})
						.catch(err => {
							console.log(err)
						})
				)
		}
	}, [selectedDate, selectedMode, selectedLine])
	return (
		<div>
			<form>
				{/* step 1 - enter username */}
				<>
					<div className="form-field">
						<label htmlFor="username">name</label>
						<input
							type="text"
							id="username"
							placeholder="enter your name"
							ref={userRef}
							autoComplete="off"
						/>
						{/* refactor later */}
					</div>
					<button onClick={handleUsername}>setusername</button>
				</>
				{/* step 2a - only show once username is entered */}
				<>
					{username !== '' && (
						<>
							<div className="p2-h2-takes-props">
								<h2>Hi {username}</h2>
							</div>
							<div className="form-field">
								<label htmlFor="delayDate">date</label>
								<input
									type="date"
									id="delayDate"
									onChange={handleDateChange}
									value={selectedDate}
									min={dates.length > 0 ? dates[0] : ''}
									max={dates.length > 0 ? dates[dates.length - 1] : ''}
								/>
							</div>
							{/* step 2b - only show modes once date is selected */}
							{selectedDate !== '' && (
								<>
									{modes.length > 0 && (<div className="form-field">
										<label htmlFor="transportMode">mode</label>
										<select id="transportMode" onChange={handleModeChange}>
											<option value=""></option>
											{modes &&
												modes !== undefined ?
												modes.map((mode) => {
													return (<option key={mode} value={mode}>{mode}</option>)
												})
												: "No types"
											}
										</select>
									</div>)}


									{selectedMode !== '' && (
										<>
											{lines.length > 0 && (
												<div className="form-field">
													<label htmlFor="transportLine">line</label>
													<select id="transportLine" onChange={handleLineChange}>
														<option value=""></option>
														{lines &&
															lines !== undefined ?
															lines.map((line) => {
																return (<option key={line} value={line}>{line}</option>)
															})
															: "No Lines"
														}
													</select>
												</div>)}

											{selectedLine !== '' && (
												<>
													{times.length > 0 && (
														<div className="form-field">
															<label htmlFor="transportTime">time</label>
															<select id="transportTime" onChange={handleTimeChange}>
																<option value=""></option>
																{times && times !== undefined ? times.map(({time, id}) => {
																	return (
																		<option key={time} value={id}>{time}</option>)
																})
																	: "No Times"
																}
															</select>
														</div>)}

													{selectedTime !== '' && (
														<>
															<button onClick={handleDelayInfo}>set delay info</button>
														</>
													)}
												</>
											)}
										</>
									)}
								</>
							)}
						</>
					)}
				</>
				{/* step 3 - only show once delay info is set */}
				{selectedDelay !== '' && (
					<>
						<div className="form-field">
							<label htmlFor="toFirstName">first name</label>
							<input
								type="text"
								id="toFirstName"
								placeholder="Recipient's first name"
								ref={toFirstRef}
								autoComplete="off"
							/>
						</div>
						<div className="form-field">
							<label htmlFor="toLastName">last name</label>
							<input
								type="text"
								id="toLastName"
								placeholder="Recipient's last name"
								ref={toLastRef}
								autoComplete="off"
							/>
						</div>
						<div className="form-field">
							<label htmlFor="toEvent">event</label>
							<input
								type="text"
								id="toEvent"
								placeholder="ex: 'wedding', 'graduation', etc."
								ref={toEventRef}
								autoComplete="off"
							/>
						</div>
						<button onClick={handleNoteDetails}>submit note info</button>
					</>
				)}

				{noteDetails !== 0 && (<div className="button-box">
					{/* <button
						// type="button"
						onClick=""
					>back</button> */}
					<button
						// type="button"
						onClick={handleSubmit}
					>submit</button>
				</div>)}

			</form>
		</div>
	);
};

export default Form;
