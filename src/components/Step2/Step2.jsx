import Button from '../Button/Button';
import './Step2.scss'
import {useState, useEffect} from 'react';
import dayjs from 'dayjs'
import axios from 'axios'

const Step2 = () => {
	const mongofyDate = (dateString) => {
		return dayjs(dateString).format('YYYY-MM-DD');
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

	const [dates, setDates] = useState([]);
	const [selectedDate, setSelectedDate] = useState('');
	const [modes, setModes] = useState([])
	const [selectedMode, setSelectedMode] = useState('');
	const [lines, setLines] = useState([])
	const [selectedLine, setSelectedLine] = useState('');
	const [times, setTimes] = useState([])
	const [selectedTime, setSelectedTime] = useState('');
	const [selectedDelay, setSelectedDelay] = useState('');
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
		<div className="step step-2">
			<h1 className="h1 h1-step-2">Thanks! Now tell us what happened:</h1>
			<div className="form-area form-area-step-2">
				<div className="form-field">
					<p>I remember it just like it was...</p>
					<label>date</label>
					{/* <input type="date" min="2023-03-31" max="2023-04-13" /> */}
					<input
						type="date"
						id="delayDate"
						onChange={handleDateChange}
						value={selectedDate}
						min={dates.length > 0 ? dates[0] : ''}
						max={dates.length > 0 ? dates[dates.length - 1] : ''} />
				</div>
				<div className="form-field">
					<p>I was on a...</p>
					<label>vehicle</label>
					<select value={selectedMode} onChange={handleModeChange}>
						<option>--select a vehicle--</option>
						{modes &&
							modes !== undefined ?
							modes.map((mode) => {
								return (<option key={mode} value={mode}>{mode}</option>)
							})
							: "No types"
						}

						{/* <option value="bus">bus</option>
						<option value="streetcar">streetcar</option> */}
					</select>
				</div>
				<div className="form-field">
					<p>Yeah that's it. It was the...</p>
					<label>line</label>
					<select value={selectedLine} onChange={handleLineChange}>
						<option>--select a line--</option>
						{/* <option value="504">504</option>
						<option value="505">505</option>
						<option value="510">510</option> */}
						{lines &&
							lines !== undefined ?
							lines.map((line) => {
								return (<option key={line} value={line}>{line}</option>)
							})
							: "No Lines"
						}
					</select>
				</div>
				<div className="form-field">
					<p>...to be exact. Right around...</p>
					<label>time</label>
					<select value={selectedTime} onChange={handleTimeChange}>
						<option>--select a time--</option>
						{/* <option value="9:30am">9:30am</option>
						<option value="4:20pm">4:20pm</option> */}
						{times && times !== undefined ? times.map(({time, id}) => {
							return (
								<option key={time} value={id}>{time}</option>)
						})
							: "No Times"
						}
					</select>
				</div>
			</div>
			<Button
				name="next"
				to="/enter-details"
				isButton={false}
			/>
		</div>
	);
};

export default Step2;
