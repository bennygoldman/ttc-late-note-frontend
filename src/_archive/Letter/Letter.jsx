import {Container, Paper} from "@mui/material";
import './Letter.scss'
import logo from '../../assets/logos/TTC-LOGO.svg'

const Letter = () => {
	return (
		<>
			<Container>
				<h1><span className="redder">TTC </span><span className="graf">LATE NOTE</span></h1>
				<div className="paper letter">
					<div className="letter__block--start">
						<div className="letter__address--sender">
							<img src={logo} alt="logo" className="logo" />
							<p>Late Note Division</p>
							<p>1900 Yonge Street</p>
							<p>Toronto, ON M4S 1Z2</p>
						</div>
						<div className="letter__date">
							<p>April 11, 2023</p>
						</div>
						<div className="letter__address--recipient">
							<p><span className="handwriting handwriting--mod">Zed Ahmad</span></p>
							<p>A really great person</p>
							<p>And forgiving too!</p>
							<p>Toronto, ON</p>
						</div>
					</div>

					<div className="letter__block--middle">
						<p className="letter__title">Dear <span className="handwriting">Zed</span>,</p>
						<p className="letter__copy">On behalf of the TTC, please accept our most sincere apologies for causing <span className="handwriting">Benny</span> to be late for the <span className="handwriting">CRUD lecture</span> on <span className="handwriting">January 7, 2023</span>.</p>
						<p className="letter__copy">We've reviewed our records, and <span className="handwriting">Benny's</span> delay was the fault of a <span className="handwriting">General Delay</span> at <span className="handwriting">Broadview</span> that caused a <span className="handwriting">38</span> minute delay on the <span className="route-tag">505</span> <span className="handwriting">streetcar</span>.</p>
						<p className="letter__copy">Just like <span className="handwriting">Benny</span>, we make every effort to run on a reliable schedule, but delays can be unavoidable. We hope you can understand and forgive <span className="handwriting">Benny</span> this time.</p>
					</div>

					<div className="letter__block--end">
						<p className="letter__closing">Sincerely,</p>
						<img src={logo} alt="signature" className="letter__signature" />
						<div className="letter__end-title">
							<p>Late Note Division</p>
							<p>TTC</p>
						</div>
					</div>

					<div className="letter__block--disclaimer">
						<p>This note was auto-generated based on data collected by the TTC. Please note, at this time, we are unable to verify if <b>Benny</b> was riding TTC when the incident occurred. But they went through the trouble to send this to you, so maybe you can let it slide this time.</p>
						<p>To send your own note, go <span className="letter__block--link">here</span>.</p>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Letter;
// const Letter = () => {
// 	return (
// 		<Container>
// 			<Paper
// 				elevation={4}
// 				className="letter">

// 				<div className="letter__block--start">
// 					<div className="letter__address--sender">
// 						<img src={logo} alt="logo" className="logo" />
// 						<p>Late Note Division</p>
// 						<p>1900 Yonge Street</p>
// 						<p>Toronto, ON M4S 1Z2</p>
// 					</div>
// 					<div className="letter__date">
// 						<p>April 11, 2023</p>
// 					</div>
// 					<div className="letter__address--recipient">
// 						<p><span className="handwriting handwriting--mod">{`{First} {Last}`}</span></p>
// 						<p>A really great person</p>
// 						<p>And forgiving too!</p>
// 						<p>Toronto, ON</p>
// 					</div>
// 				</div>

// 				<div className="letter__block--middle">
// 					<p className="letter__title">Dear <span className="handwriting">{`{First}`}</span>,</p>
// 					<p className="letter__copy">On behalf of the TTC, please accept our most sincere apologies for causing <span className="handwriting">{`{User}`}</span> to be late for the <span className="handwriting">{`{Event}`}</span> on <span className="handwriting">{`{Date}`}</span>.</p>
// 					<p className="letter__copy">We've reviewed our records, and <span className="handwriting">{`{User}`}</span>'s delay was caused by {`{a/an}`} <span className="handwriting">{`{Incident}`}</span> at <span className="handwriting">{`{Location}`}</span> that caused a <span className="handwriting">{`{Min Delay}`}</span> minute delay on the <span className="route-tag">{`{Route}`}</span> <span className="handwriting">{`{Mode}`}</span>.</p>
// 					<p className="letter__copy">Just like <span className="handwriting">{`{User}`}</span>, we make every effort to run on a reliable schedule, but delays can be unavoidable. We hope you can understand and forgive <span className="handwriting">{`{User}`}</span> this time.</p>
// 				</div>

// 				<div className="letter__block--end">
// 					<p className="letter__closing">Sincerely,</p>
// 					<img src={logo} alt="signature" className="letter__signature" />
// 					<div className="letter__end-title">
// 						<p>Late Note Division</p>
// 						<p>TTC</p>
// 					</div>
// 				</div>

// 				<div className="letter__block--disclaimer">
// 					<p>This note was auto-generated based on data collected by the TTC. Please note, at this time, we are unable to verify if <b>{`{User}`}</b> was riding TTC when the incident occurred. But they went through the trouble to send this to you, so maybe you can let it slide this time.</p>
// 					<p>To send your own note, go <a href="#">here</a>.</p>
// 				</div>

// 			</Paper>
// 		</Container>
// 	);
// };

// export default Letter;
