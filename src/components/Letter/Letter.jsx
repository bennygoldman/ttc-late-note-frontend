import './Letter.scss'
import logo from '../../assets/logos/TTC-LOGO.svg'
import signature from '../../assets/images/signature-svgrepo-com.svg'
import dayjs from 'dayjs'

const Letter = () => {

	const formData = JSON.parse(localStorage.getItem('formData'));
	const todaysDate = dayjs().format('MMMM D, YYYY')
	const formDateFormat = dayjs(formData.date).format('MMMM D, YYYY')
	console.log(todaysDate)
	console.log(formDateFormat)

	const handleFormSave = () => {
		const formName = document.querySelector('#form-name').value;
		const formData = JSON.parse(localStorage.getItem('formData'));

		formData.name = formName;

		localStorage.setItem('formData', JSON.stringify(formData));
	}

	return (
		<>
			<div>
				<div className="paper letter">
					<div className="letter__block--start">
						<div className="letter__address--sender">
							<img src={logo} alt="logo" className="logo" />
							<p>Late Note Division</p>
							<p>1900 Yonge Street</p>
							<p>Toronto, ON M4S 1Z2</p>
						</div>
						<div className="letter__date">
							<p>{todaysDate}</p>
						</div>
						<div className="letter__address--recipient">
							<p><span className="handwriting handwriting--mod">{formData.toFirst} {formData.toLast}</span></p>
							<p>A really great person</p>
							<p>And forgiving too!</p>
							<p>Toronto, ON</p>
						</div>
					</div>

					<div className="letter__block--middle">
						<p className="letter__title">Dear <span className="handwriting">{formData.toFirst}</span>,</p>
						<p className="letter__copy">On behalf of the TTC, please accept our most sincere apologies for causing <span className="handwriting">{formData.name}</span> to be late for the <span className="handwriting">{formData.toEvent}</span> on <span className="handwriting">{formDateFormat}</span>.</p>
						<p className="letter__copy">We've reviewed our records, and <span className="handwriting">{formData.name}'s</span> delay was the fault of a <span className="handwriting">General Delay</span> at <span className="handwriting">Broadview</span>, resulting in a <span className="handwriting">38</span> minute delay on the <span className="route-tag">{formData.line}</span> <span className="handwriting">{formData.mode}</span>.</p>
						<p className="letter__copy">Just like <span className="handwriting">{formData.name}</span>, we make every effort to run on a reliable schedule, but delays can be unavoidable. We hope you can understand and forgive <span className="handwriting">{formData.name}</span> this time.</p>
					</div>

					<div className="letter__block--end">
						<p className="letter__closing">Sincerely,</p>
						<img src={signature} alt="signature" className="letter__signature" />
						<div className="letter__end-title">
							<p>Late Note Division</p>
							<p>TTC</p>
						</div>
					</div>


				</div>
			</div>
		</>
	);
};

export default Letter;
