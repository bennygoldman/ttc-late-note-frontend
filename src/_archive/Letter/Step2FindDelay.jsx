import {useEffect, useState} from 'react';
import axios from 'axios'
import dayjs from 'dayjs'

const Step2FindDelay = ({data, setData}) => {

	const [dateDropdown, setDateDropdown] = useState([])
	const [dateSelect, setDateSelect] = useState('')

	const [modeDropdown, setModeDropdown] = useState([])
	const [modeSelect, setModeSelect] = useState('null')

	const [lineDropdown, setLineDropdown] = useState([])
	const [lineSelect, setLineSelect] = useState('null')

	const [timeDropdown, setTimeDropdown] = useState([])
	const [timeSelect, setTimeSelect] = useState('')

	const [delayById, setDelayById] = useState('')


	// get date list on page load
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			axios
				.get('/delays/dates')
				.then(res => {
					setDateDropdown(res.data)
					console.log(res.data)
				})
				.catch((err) => {
					console.log(err)
				})
		}, 5000);
		return () => clearTimeout(timeoutId);
	}, [])


	const mongofyDate = (dateString) => {
		return dayjs(dateString).format('YYYY-MM-DD');
	}

	// set date to get mode list
	const handleDateSelect = (e) => {
		const date = e.target.value
		console.log(date)
		localStorage.setItem('delayDate', mongofyDate(date));
		setData({...data, delayDate: mongofyDate(date)})
		setDateSelect(date)
	}

	// get available modes
	useEffect(() => {
		if (dateSelect && dateSelect !== undefined) {
			axios
				.get(`/delays/modes?date=${mongofyDate(dateSelect)}`)
				.then(res => {
					setModeDropdown(res.data);
				})
				.catch(err => {
					console.log(err)
				})
		}
	}, [dateSelect])

	// set mode to get line list
	const handleModeSelect = (e) => {
		const mode = e.target.value
		console.log(mode)
		localStorage.setItem('transportType', mode);
		setData({...data, transportType: mode})
		setModeSelect(mode)
	}

	// get available lines 
	useEffect(() => {
		if (dateSelect && dateSelect !== undefined && modeSelect && modeSelect !== undefined) {
			axios
				.get(`/delays/lines?date=${mongofyDate(dateSelect)}&mode=${modeSelect}`)
				.then(res => {
					setLineDropdown(res.data);
				})
				.catch(err => {
					console.log(err)
				})
		}

	}, [dateSelect, modeSelect])

	// set line to get time list
	const handleLineSelect = (e) => {
		const line = e.target.value
		console.log(line)
		localStorage.setItem('transportLine', line);
		setData({...data, transportLine: line})
		setLineSelect(line)

	}

	// get available times 
	useEffect(() => {
		if (dateSelect && dateSelect !== undefined && modeSelect && modeSelect !== undefined && lineSelect && lineSelect !== undefined) {
			axios
				.get(`/times?date=${mongofyDate(dateSelect)}&mode=${modeSelect}&line=${lineSelect}`)
				.then(res => {
					setTimeDropdown(res.data);
				})
				.catch(err => {
					console.log(err)
				})
		}

	}, [dateSelect, modeSelect, lineSelect])

	// set time to get event ID
	const handleTimeSelect = (e) => {
		const {_id, time} = e.target.value
		const value = e.target.value
		console.log(`noValId: ${_id}, noValtime: ${time}`)
		console.log(`valueId: ${value._id}, valueTime: ${value.time}`)
		localStorage.setItem('transportTime', time);
		localStorage.setItem('transportTime', value.time);
		localStorage.setItem('delayId', _id);
		localStorage.setItem('delayId', value._id);
		setData({...data, transportTime: time, delayId: _id})
		setTimeSelect(time)
		setDelayById(_id)
		// const selectedTime = e.target.value;
		// const timeObj = JSON.parse(selectedTime);
		// timeObj._id = timeObj._id.toString(); // Convert _id to string
		// localStorage.setItem("selectedTime", JSON.stringify(timeObj));
	}

	// confirm event details
	useEffect(() => {
		if (timeSelect && timeSelect !== undefined && delayById && delayById !== undefined) {
			axios
				.get(`/delays/event/${delayById}`)
		}
	})

	return (
		<div>
			<div>
				<p>I remember it just like it was ...</p>
				<label htmlFor="delayDate">date</label>
				<select id="delayDate" onChange={handleDateSelect}>
					<option value="">-- Choose a Date --</option>
					{dateDropdown &&
						dateDropdown !== undefined ?
						dateDropdown.map((dates) => {
							return (
								<option key={dates.date} value={dates.date}>{dates.date}</option>)
						})
						: "No dates"
					}
				</select>
				{/* {dateDropdown.length > 0 && (<select id="delayDate" onChange={handleDateSelect}>
					<option value="">-- Choose a Date --</option>
					{dateDropdown &&
						dateDropdown !== undefined ?
						dateDropdown.map((dates) => {
							return (
								<option key={dates.date} value={dates.date}>{dates.date}</option>)
						})
						: "No dates"
					}
				</select>)} */}
			</div>
			<div>
				<p>I was on a ...</p>
				{/* <label htmlFor="transportType">vehicle</label>
				<select id="transportType" onChange={handleModeSelect}>
					<option value="">-- Choose a Type --</option>
					{modeDropdown &&
						modeDropdown !== undefined ?
						modeDropdown.map((modes) => {
							return (
								<option key={modes.mode} value={modes.mode}>{modes.mode}</option>)
						})
						: "No types"
					}
				</select> */}
				{modeDropdown.length > 0 && (<select id="transportType" onChange={handleModeSelect}>
					<option value="">-- Choose a Type --</option>
					{modeDropdown &&
						modeDropdown !== undefined ?
						modeDropdown.map((modes) => {
							return (
								<option key={modes.mode} value={modes.mode}>{modes.mode}</option>)
						})
						: "No types"
					}
				</select>)}
			</div>
			<div>
				<p>Yeah, that's it. It was the ... </p>
				{/* <label htmlFor="transportLine">line</label>
				<select id="transportLine" onChange={handleLineSelect}>
					<option value="">-- Choose a Line --</option>
					{lineDropdown &&
						lineDropdown !== undefined ?
						lineDropdown.map((lines) => {
							return (
								<option key={lines.line} value={lines.line}>{lines.line}</option>)
						})
						: "No lines"
					}
				</select> */}
				{lineDropdown.length > 0 && (<select id="transportLine" onChange={handleLineSelect}>
					<option value="">-- Choose a Line --</option>
					{lineDropdown &&
						lineDropdown !== undefined ?
						lineDropdown.map((lines) => {
							return (
								<option key={lines.line} value={lines.line}>{lines.line}</option>)
						})
						: "No lines"
					}
				</select>)}
			</div>
			<div>
				<p>... to be exact. Right around ... </p>
				{/* <label htmlFor="transportTime">time</label>
				<select id="transportTime" onChange={handleTimeSelect}>
					<option value="">-- Choose a Time --</option>
					{timeDropdown &&
						timeDropdown !== undefined ?
						timeDropdown.map((times) => {
							return (
								<option key={times.time} value={times.time}>{times.time}</option>)
						})
						: "No times"
					}
				</select> */}
				{timeDropdown.length > 0 && (<select id="transportTime" onChange={handleTimeSelect}>
					<option value="">-- Choose a Time --</option>
					{timeDropdown &&
						timeDropdown !== undefined ?
						timeDropdown.map((times) => {
							return (
								<option key={times.time} value={times.time}>{times.time}</option>)
						})
						: "No times"
					}
				</select>)}
			</div>
		</div>
	);
};

export default Step2FindDelay;
