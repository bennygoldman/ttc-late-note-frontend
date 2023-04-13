

const Survey = () => {


	var surveyJSON = {"title": "TTC LATE NOTE", "description": "Did a TTC delay make you late for an important event? We're sorry. If you give us some details about your trip, we'd be happy to write a letter for you to send to the person(s) affected.", "logoPosition": "right", "pages": [{"name": "enterUsername", "elements": [{"type": "text", "name": "username", "title": "First, tell us your name.", "description": "NAME", "descriptionLocation": "underInput", "hideNumber": true, "valueName": "username", "isRequired": true, "requiredErrorText": "You must enter a name to continue", "validators": [{"type": "text", "minLength": 2}], "placeholder": "Enter your name..."}], "title": "Let's get started."}, {"name": "findDelay", "elements": [{"type": "text", "name": "DATE", "visibleIf": "{username} notempty", "title": "I remember it just like it was...", "hideNumber": true, "valueName": "delayDate", "isRequired": true, "requiredErrorText": "Please enter a date", "inputType": "date", "min": "2023-04-01", "max": "2023-04-13"}, {"type": "dropdown", "name": "transportMode", "title": "I was riding the... ", "description": "VEHICLE", "descriptionLocation": "underInput", "hideNumber": true, "valueName": "transportMode", "isRequired": true, "requiredErrorText": "Please choose one.", "choices": ["bus", "streetcar", "subway"], "choicesOrder": "asc", "choicesVisibleIf": "{delayDate} notempty"}, {"type": "dropdown", "name": "transportLine", "title": "Yeah, that's it. It was the...", "description": "LINE", "descriptionLocation": "underInput", "hideNumber": true, "valueName": "transportLine", "isRequired": true, "requiredErrorText": "Please choose one.", "choices": [{"value": "7", "text": "7 - Bathurst", "visibleIf": "{transportMode} = 'bus'"}, {"value": "29", "text": "29 - Dufferin", "visibleIf": "{transportMode} = 'bus'"}, {"value": "32", "text": "32 - Eglinton", "visibleIf": "{transportMode} = 'bus'"}, {"value": "35", "text": "35 - Jane", "visibleIf": "{transportMode} = 'bus'"}, {"value": "504", "text": "504 - King", "visibleIf": "{transportMode} = 'streetcar'"}, {"value": "505", "text": "505 - Dundas", "visibleIf": "{transportMode} = 'streetcar'"}, {"value": "510", "text": "510 - Spadina", "visibleIf": "{transportMode} = 'streetcar'"}, {"value": "1", "text": "1 - Bloor / Danforth", "visibleIf": "{transportMode} = 'subway'"}, {"value": "2", "text": "2 - Yonge / University", "visibleIf": "{transportMode} = 'subway'"}], "choicesOrder": "asc", "choicesVisibleIf": "{transportMode} notempty"}, {"type": "dropdown", "name": "transportTime", "title": "... to be exact. Right around ...", "description": "TIME", "descriptionLocation": "underInput", "hideNumber": true, "valueName": "transportTime", "isRequired": true, "requiredErrorText": "Please choose one.", "choices": [{"value": "0848", "text": "AM - 8:43", "visibleIf": "{transportLine} anyof [1, 29, 35, 505, 7]"}, {"value": "0915", "text": "AM - 9:15", "visibleIf": "{transportLine} anyof [2, 32, 504, 510]"}, {"value": "1359", "text": "PM - 1:59", "visibleIf": "{transportLine} anyof [1, 2, 35, 504, 510, 7]"}, {"value": "1625", "text": "PM - 4:25", "visibleIf": "{transportLine} anyof [29, 504, 7]"}, {"value": "2048", "text": "PM - 8:48", "visibleIf": "{transportLine} anyof [1, 7, 35]"}, {"value": "0635", "text": "AM - 6:35", "visibleIf": "{transportLine} anyof [2, 29, 32, 504, 505, 510]"}], "choicesOrder": "asc", "choicesVisibleIf": "{transportLine} notempty and {transportMode} notempty"}], "visibleIf": "{username} notempty", "title": "Thanks {username}! ", "description": "Now tell us what happened:"}, {"name": "noteDetails", "elements": [{"type": "text", "name": "toFirstName", "title": "Recipient's first name:", "description": "FIRST NAME", "descriptionLocation": "underInput", "hideNumber": true, "valueName": "toFirstName", "isRequired": true, "requiredErrorText": "Please enter a name", "validators": [{"type": "text", "minLength": 2}], "placeholder": "First name"}, {"type": "text", "name": "toLastName", "title": "Recipient's last name:", "description": "LAST NAME", "descriptionLocation": "underInput", "hideNumber": true, "valueName": "toLastName", "isRequired": true, "requiredErrorText": "Please enter a name.", "validators": [{"type": "text", "minLength": 2}], "placeholder": "Last name"}, {"type": "text", "name": "toEvent", "title": "The event you were late for:", "description": "EVENT", "descriptionLocation": "underInput", "hideNumber": true, "valueName": "toEvent", "isRequired": true, "requiredErrorText": "Please enter an event.", "validators": [{"type": "text", "minLength": 2}], "placeholder": "(ex: \"wedding\", \"graduation\", \"CRUD lecture\")"}], "visibleIf": "{username} notempty and {transportTime} notempty and {transportMode} notempty and {transportLine} notempty", "title": "... and who's the note for?"}]};

	function sendDataToServer(survey) {
		//send Ajax request to your web server
		alert("The results are: " + JSON.stringify(survey.data));
	}
	// Survey.StylesManager.applyTheme("modern");

	// ReactDOM.render(<Survey.Survey json={surveyJSON} onComplete={sendDataToServer} />, document.getElementById("surveyContainer"));

	return (
		<>

			<link href="https://unpkg.com/survey-react@1.9.83/defaultV2.css" type="text/css" rel="stylesheet" />
			<script src="https://unpkg.com/survey-react@1.9.83/survey.react.min.js"></script>
			<div id="surveyContainer">{surveyJSON}</div>
		</>
	);
};

export default Survey;


