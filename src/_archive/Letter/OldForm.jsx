// import './Form.scss';
import axios from 'axios'
import {useEffect, useState} from 'react'
import {API_URL_BASE as api, DELAY_PATH as delays, DELAY_DATES_PATH as dates, DELAY_LINES_PATH as lines, DELAY_TIMES_PATH as times} from '../utils/utils'

export default function Form() {
	const [dateSelect, setDateSelect] = useState([])
	const [lineSelect, setLineSelect] = useState([])
	const [timeSelect, setTimeSelect] = useState([])
	const [foundDelay, setFoundDelay] = useState('')
	const [selectedDate, setSelectedDate] = useState('')
	const [userName, setUserName] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [lateEvent, setLateEvent] = useState('')

	const datesUrl = `${api}/${delays}/${dates}`

	useEffect(() => {
		axios
			.get(datesUrl)
			.then(res => {
				setDateSelect(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, []);

	useEffect(() => {

		if (selectedDate) {
			const linesUrl = `${api}/${delays}/${lines}?date=${selectedDate}`;

			axios
				.get(linesUrl)
				.then((res) => {
					setLineSelect(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [selectedDate]);


	const handleDateChange = (e) => {
		const date = e.target.value
		console.log(date)
		setSelectedDate(date)
	}

	const handleLineChange = (e) => {
		const line = e.target.value
		const timesUrl = `${api}/${delays}/${times}?date=${selectedDate}&line=${line}`
		axios
			.get(timesUrl)
			.then((res) => {
				setTimeSelect(res.data);
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const handleTimeChange = (e) => {
		const value = e.target.value;
		const [id, time] = value.split('|');
		console.log(`id: ${id}, time: ${time}`);
		const exactDelayUrl = `${api}/${delays}/exactdelay/${id}`
		axios
			.get(exactDelayUrl)
			.then((res) => {
				console.log(res.data)
				setFoundDelay(res.data);
			})
			.catch((err) => console.log(err))
	}

	const handleUserChange = (e) => {
		const value = e.target.value
		setUserName(value)
	}
	const handleFirstChange = (e) => {
		const value = e.target.value
		setFirstName(value)
	}
	const handleLastChange = (e) => {
		const value = e.target.value
		setLastName(value)
	}
	const handleEventChange = (e) => {
		const value = e.target.value
		setLateEvent(value)
	}



	return (
		<div>
			<input type="text" name="user" id="user" defaultValue="user" onChange={handleUserChange} />
			<div className="form">
				<select name="date" id="date" onChange={handleDateChange}>
					<option value="">-- Choose a Date --</option>
					{dateSelect.map(date => (
						<option
							key={date.date}
							value={date.date}>
							{date.date}
						</option>
					))}
				</select>
				{lineSelect.length > 0 && (
					<select name="line" id="line" onChange={handleLineChange}>
						<option value="">-- Choose a Line --</option>
						{lineSelect.map(line => (
							<option
								key={line.line}
								value={line.line}>
								{line.line}
							</option>
						))}
					</select>
				)}
				{timeSelect.length > 0 && (
					<select name="time" id="id" onChange={handleTimeChange}>
						<option value="">-- Choose a Time --</option>
						{timeSelect.map(time => (
							<option
								key={time.id}
								value={`${time.id}|${time.time}`}>
								{time.time}
							</option>
						))}
					</select>
				)}
				{/* make this a form that sends a post on submit to test notes route */}
				<div>
					<input type="text" name="first" id="first" defaultValue="first" onChange={handleFirstChange} />
					<input type="text" name="last" id="last" defaultValue="last" onChange={handleLastChange} />
					<input type="text" name="event" id="event" defaultValue="event" onChange={handleEventChange} />
				</div>
			</div>



			{!!foundDelay && (
				<>
					<div className="letter__block--start">
						<div className="letter__address--sender">
							<p>Late Note Division</p>
							<p>1900 Yonge Street</p>
							<p>Toronto, ON M4S 1Z2</p>
						</div>
						<div className="letter__date">
							<p>April 3, 2023</p>
						</div>
						<div className="letter__address--recipient">
							<p><span className="handwriting handwriting--mod">{`${firstName} ${lastName}`}</span></p>
							<p>A really great person</p>
							<p>And forgiving too!</p>
							<p>Toronto, ON</p>
						</div>
					</div>

					<div className="letter__block--middle">
						<p className="letter__title">Dear <span className="handwriting">{`${firstName}`}</span>,</p>
						<p className="letter__copy">On behalf of the TTC, please accept our most sincere apologies for causing <span className="handwriting">{`${userName}`}</span> to be late for the <span className="handwriting">{`${lateEvent}`}</span> on <span className="handwriting">{`${foundDelay.date}`}</span>.</p>
						<p className="letter__copy">We've reviewed our records, and <span className="handwriting">{`${userName}`}</span>'s delay was caused by {`{a/an}`} <span className="handwriting">{`${foundDelay.incident}`}</span> at <span className="handwriting">{`${foundDelay.location}`}</span>, resulting in {`{a/an}`} <span className="handwriting">{`${foundDelay.min_delay}`}</span> minute delay on the <span className="route-tag">{`${foundDelay.line}`}</span> <span className="handwriting">{`{Mode}`}</span>.</p>
						<p className="letter__copy">Just like <span className="handwriting">{`${userName}`}</span>, we make every effort to run on a reliable schedule, but delays can be unavoidable. We hope you can understand and forgive <span className="handwriting">{`${userName}`}</span> this time.</p>
					</div>
				</>
			)}
		</div>
	);
};
