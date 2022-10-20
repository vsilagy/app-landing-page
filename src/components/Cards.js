import chrome from '../assets/logo-chrome.svg';
import firefox from '../assets/logo-firefox.svg';
import safari from '../assets/logo-safari.svg';

const Cards = () => {
	return (
		<section>
			<div>
				<div>
					<img src={chrome} />
				</div>
				<div>
					<h5>Add to Chrome</h5>
					<p>Minimum version 62</p>
				</div>
			</div>
			<div>
				<div>
					<img src={firefox} />
				</div>
				<div>
					<h5>Add to Chrome</h5>
					<p>Minimum version 62</p>
				</div>
			</div>
			<div>
				<div className="w-28">
					<img src={safari} />
				</div>
				<div>
					<h5>Add to Chrome</h5>
					<p>Minimum version 62</p>
				</div>
			</div>
		</section>
	);
};

export default Cards;
