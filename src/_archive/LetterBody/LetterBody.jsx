import './LetterBody.scss'
import {useState} from 'react'

const LetterBody = () => {
	return (
		<div>
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
					<p><span className="handwriting handwriting--mod">{`${toFirstName} ${toLastName}`}</span></p>
					<p>A really great person</p>
					<p>And forgiving too!</p>
					<p>Toronto, ON</p>
				</div>
			</div>

			<div className="letter__block--middle">
				<p className="letter__title">Dear <span className="handwriting">{`${toFirstName}`}</span>,</p>
				<p className="letter__copy">On behalf of the TTC, please accept our most sincere apologies for causing <span className="handwriting">{`${username}`}</span> to be late for the <span className="handwriting">{`${toEvent}`}</span> on <span className="handwriting">{`${foundDelay.date}`}</span>.</p>
				<p className="letter__copy">We've reviewed our records, and <span className="handwriting">{`${username}`}</span>'s delay was caused by {`{a/an}`} <span className="handwriting">{`${foundDelay.incident}`}</span> at <span className="handwriting">{`${foundDelay.location}`}</span>, resulting in {`{a/an}`} <span className="handwriting">{`${foundDelay.min_delay}`}</span> minute delay on the <span className="route-tag">{`${foundDelay.line}`}</span> <span className="handwriting">{`{Mode}`}</span>.</p>
				<p className="letter__copy">Just like <span className="handwriting">{`${userName}`}</span>, we make every effort to run on a reliable schedule, but delays can be unavoidable. We hope you can understand and forgive <span className="handwriting">{`${username}`}</span> this time.</p>
			</div>
		</div>
	);
};

export default LetterBody;
