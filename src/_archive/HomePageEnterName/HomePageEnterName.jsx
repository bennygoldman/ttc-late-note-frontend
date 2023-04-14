import {useState} from 'react'
import './HomePageEnterName.scss'

const HomePageEnterName = ({username, setUsername}) => {
	const handleUserChange = (e) => {
		const value = e.target.value
		setUsername(value)
	}
	return (
		<div className="username form__field">
			<label
				htmlFor="username"
				className="label__text--username username__label">
				name
			</label>
			<input
				onChange={handleUserChange}
				type="text"
				id="username"
				placeholder='Enter your name...'
				className="input__text--username username__input"
				required
			/>
			<span className="validate__text--username username__validate"></span>
		</div>
	);
};

export default HomePageEnterName;
