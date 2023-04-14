import HomePageEnterName from "../HomePageEnterName/HomePageEnterName";
import HomePageCopyBlock from "../HomePageCopyBlock/HomePageCopyBlock";
import {useState} from "react";

const FormHomePage = () => {
	const [username, setUsername] = useState('')

	return (
		<div>
			<HomePageCopyBlock />
			<HomePageEnterName
				username={username}
				setUsername={setUsername}
			/>
		</div>
	);
};

export default FormHomePage;
