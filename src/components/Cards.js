import chrome from '../assets/logo-chrome.svg';
import firefox from '../assets/logo-firefox.svg';
import safari from '../assets/logo-safari.svg';

const Cards = () => {
	return (
		<section className="pt-12 pb-32">
			<div className="relative container flex flex-col items-center gap-8 max-w-4xl mx-auto px-10 md:p-0 md:flex-row">
				<div className="flex flex-col py-6 px-6 gap-4 text-center shadow-xl rounded-lg w-max md:w-1/3">
					<div className="flex justify-center">
						<img src={chrome} className="h-24" />
					</div>

					<h5 className="text-veryDarkBlue pt-6 text-lg font-medium">
						Add to Chrome
					</h5>
					<p className="text-grayishBlue text-sm">
						Minimum version 62
					</p>
					<div className="bg-dots bg-repeat-x px-6 pt-6 capitalize"></div>
					<a
						href="#"
						className="py-3 px-6 text-white text-sm duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">
						Add & Install Extension
					</a>
				</div>
				<div className="flex flex-col py-6 px-6 gap-4 text-center shadow-xl rounded-lg w-max md:-mb-12 md:w-1/3">
					<div className="flex justify-center ">
						<img src={safari} className="h-24" />
					</div>
					<h5 className="text-veryDarkBlue pt-6 text-lg font-medium">
						Add to Safari
					</h5>
					<p className="text-grayishBlue text-sm">
						Minimum version 16
					</p>
					<div className="bg-dots bg-repeat-x px-6 pt-6 capitalize"></div>
					<a
						href="#"
						className="block py-3 px-6 text-white text-sm duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">
						Add & Install Extension
					</a>
				</div>
				<div className="flex flex-col py-6 px-6 gap-4 text-center shadow-xl rounded-lg w-max md:-mb-24 md:w-1/3">
					<div className="flex justify-center">
						<img src={firefox} className="h-24" />
					</div>

					<h5 className="text-veryDarkBlue pt-6 text-lg font-medium">
						Add to Firefox
					</h5>
					<p className="text-grayishBlue text-sm">
						Minimum version 55"
					</p>
					<div className="bg-dots bg-repeat-x px-6 pt-6 capitalize"></div>
					<a
						href="#"
						className="block py-3 px-6 text-white text-sm duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">
						Add & Install Extension
					</a>
				</div>
			</div>
		</section>
	);
};

export default Cards;
