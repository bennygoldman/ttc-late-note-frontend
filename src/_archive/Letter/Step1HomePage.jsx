import {useState} from "react";

// const Step1HomePage = ({data, setData}) => {

// 	const [benny, setBenny] = useState()

// 	const handleUsernameChange = (e) => {
// 		const username = e.target.value
// 		console.log(username)
// 		setData({...data, username: e.target.value})
// 		// console.log(`data ` + data.username)
// 		localStorage.setItem('username', e.target.value);
// 		// console.log(`localstorage ` + localStorage.username)
// 	};

// 	// will need to add CSS classes in the return - and possibly consider making a form__field component that includes a label + input + validation

// 	return (
// 		<div>
// 			<div>
// 				<p>Did a TTC delay make you late for an important event? We're sorry. If you give us some details about your trip, we'd be happy to write a letter for you to send to the person(s) affected.</p>
// 				<p>Let's get started. First, tell us your name:</p>
// 			</div>
// 			<div>
// 				<label>name</label>
// 				<input
// 					// onChange={(e) => setData({...data, username: e.target.value})}
// 					onChange={handleUsernameChange}
// 					type="text"
// 					value={data.username}
// 					id="username"
// 					placeholder='enter your name...'
// 				/>
// 			</div>
// 		</div>
// 	);
// };

// export default Step1HomePage;

const Step1HomePage = () => {
	return (
		<div className="form__page">
			<div className="form__copy">
				<p>Did a TTC delay make you late for an important event? We're sorry. If you give us some details about your trip, we'd be happy to write a letter for you to send to the person(s) affected.</p>
				<p>Let's get started. First, tell us your name:</p>
			</div>
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
		</div>
	);
};

export default Step1HomePage;
