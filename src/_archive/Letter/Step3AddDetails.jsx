import Headline from './Headline'
import TextInput from './TextInput'
import Button from './Button'

const Step3AddDetails = ({data, setData}) => {
	return (
		<div>
			<div>
				<p>... and who's the note for?</p>
			</div>
			<div>
				<label>First name</label>
				<input
					onChange={(e) => setData({...data, toFirstName: e.target.value})}
					type="text"
					value={data.toFirstName}
					id="toFirstName"
					placeholder='First name'
				/>
			</div>
			<div>
				<label>Last name</label>
				<input
					onChange={(e) => setData({...data, toLastName: e.target.value})}
					type="text"
					value={data.toLastName}
					id="toLastName"
					placeholder='Last name'
				/>
			</div>
			<div>
				<label>Event</label>
				<input
					onChange={(e) => setData({...data, toEvent: e.target.value})}
					type="text"
					value={data.toEvent}
					id="toEvent"
					placeholder='(ex: "lecture", "dinner", "wedding")'
				/>
			</div>
		</div>
	);
};

export default Step3AddDetails;
