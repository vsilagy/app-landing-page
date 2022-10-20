import hero from '../assets/illustration-hero.svg';
const Hero = () => {
	return (
		<section id="hero">
			<div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
				<div className="flex flex-col gap-8 lg:w-1/2 lg:gap-10 lg:mt-12">
					<h1 className="text-3xl text-veryDarkBlue font-medium text-center lg:text-5xl lg:text-left ">
						A Simple Bookmark Manager
					</h1>
					<p className="text-grayishBlue text-sm max-w-md mx-auto text-center lg:m-0 lg:text-base lg:text-left">
						A clean and simple interface to organize your favourite
						websites. Open a new browser tab and see your sites load
						instantly. Try it for free.
					</p>
					<div className="flex justify-center items-center gap-5 lg:justify-start">
						<a className="py-3 px-6 font-medium text-white bg-softBlue rounded-md shadow-lg hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2 outline-none">
							Get it on Chrome
						</a>
						<a className="py-3 px-6 font-medium text-veryDarkBlue bg-gray-200 rounded-md shadow-lg hover:bg-white hover:text-veryDarkBlue hover:border-veryDarkBlue hover:border-2 outline-none">
							Get it on Safari
						</a>
					</div>
				</div>
				<div className="relative mx-auto lg:mx-0 lg:w-1/2">
					<img src={hero} className="relative z-10"></img>
				</div>
			</div>
		</section>
	);
};

export default Hero;
