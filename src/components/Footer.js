import logo from '../assets/logo-bookmark-footer.svg';
import facebook from '../assets/icon-facebook.svg';
import twitter from '../assets/icon-twitter.svg';
const Footer = () => {
	return (
		<footer className="bg-veryDarkBlue py-16">
			<div className="container flex flex-col justify-between items-center px-6 gap-8 mx-auto md:flex-row">
				<div>
					<div className="text-gray-100 text-sm flex flex-col justify-center items-center gap-6 uppercase md:flex-row">
						<img
							src={logo}
							className="h-6 mb-1 md:h-7 md:mb-0 md:mr-4"
						/>
						<a
							href="#features"
							className="tracking-widest hover:text-softRed cursor-pointer">
							Features
						</a>
						<a
							href="#"
							className="tracking-widest hover:text-softRed cursor-pointer">
							Pricing
						</a>
						<a
							href="#"
							className="tracking-widest hover:text-softRed cursor-pointer">
							Contact
						</a>
					</div>
				</div>
				<div className="flex justify-center items-center gap-12">
					<a href="#">
						<img src={facebook} />
					</a>
					<a href="#">
						<img src={twitter} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
